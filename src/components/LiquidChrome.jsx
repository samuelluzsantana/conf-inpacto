import React, { useRef, useEffect, memo } from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";

import "./LiquidChrome.css";

// Converter cores hexadecimais para RGB normalizado (0-1)
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16) / 255,
        parseInt(result[2], 16) / 255,
        parseInt(result[3], 16) / 255,
      ]
    : [0.1, 0, 0.8];
};

const LiquidChrome = ({
  colors = ["#FA1462", "#E23973", "#6F00FF"],
  speed = 1,
  amplitude = 0.6,
  frequencyX = 3,
  frequencyY = 2,
  interactive = true,
  ...props
}) => {
  const containerRef = useRef(null);
  const rafIdRef = useRef(null);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const renderer = new Renderer({ antialias: true });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 1);

    const vertexShader = `
      attribute vec2 position;
      attribute vec2 uv;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentShader = `
      precision mediump float;
      uniform float uTime;
      uniform vec3 uResolution;
      uniform vec3 uColor1;
      uniform vec3 uColor2;
      uniform vec3 uColor3;
      uniform float uAmplitude;
      uniform float uFrequencyX;
      uniform float uFrequencyY;
      uniform vec2 uMouse;
      varying vec2 vUv;

      vec3 mix3(vec3 a, vec3 b, vec3 c, float t) {
        return t < 0.5 ? mix(a, b, t * 2.0) : mix(b, c, (t - 0.5) * 2.0);
      }

      void main() {
          vec2 fragCoord = vUv * uResolution.xy;
          vec2 uv = (2.0 * fragCoord - uResolution.xy) / min(uResolution.x, uResolution.y);

          // Reduzido de 10 para 5 iterações = 50% menos cálculos
          for (float i = 1.0; i < 5.0; i++){
              uv.x += uAmplitude / i * cos(i * uFrequencyX * uv.y + uTime + uMouse.x * 3.14159);
              uv.y += uAmplitude / i * cos(i * uFrequencyY * uv.x + uTime + uMouse.y * 3.14159);
          }

          // Efeito ripple simplificado
          vec2 diff = (vUv - uMouse);
          float dist = length(diff);
          float falloff = exp(-dist * 15.0);
          float ripple = sin(8.0 * dist - uTime * 2.0) * 0.02;
          uv += (diff / (dist + 0.001)) * ripple * falloff;

          // Criar movimento cromático nas cores
          float colorT = fract(sin(uTime * 0.5 + uv.x + uv.y) * 0.5 + 0.5);
          vec3 color = mix3(uColor1, uColor2, uColor3, colorT);
          
          // Adicionar saturação baseada no movimento
          float intensity = abs(sin(uTime - uv.y - uv.x));
          color *= (0.5 + intensity);
          
          gl_FragColor = vec4(color, 1.0);
      }
    `;

    // Converter cores hexadecimais para RGB
    const color1 = hexToRgb(colors[0]);
    const color2 = hexToRgb(colors[1]);
    const color3 = hexToRgb(colors[2]);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: {
          value: new Float32Array([
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height,
          ]),
        },
        uColor1: { value: new Float32Array(color1) },
        uColor2: { value: new Float32Array(color2) },
        uColor3: { value: new Float32Array(color3) },
        uAmplitude: { value: amplitude },
        uFrequencyX: { value: frequencyX },
        uFrequencyY: { value: frequencyY },
        uMouse: { value: new Float32Array([0, 0]) },
      },
    });
    const mesh = new Mesh(gl, { geometry, program });

    // Reduzir resolução em 50% = 75% menos pixels para processar!
    function resize() {
      const scale = 0.5; // Era 1, agora 0.5 = muito mais leve!
      renderer.setSize(
        container.offsetWidth * scale,
        container.offsetHeight * scale,
      );
      const resUniform = program.uniforms.uResolution.value;
      resUniform[0] = gl.canvas.width;
      resUniform[1] = gl.canvas.height;
      resUniform[2] = gl.canvas.width / gl.canvas.height;
    }

    // Debounce resize para evitar múltiplas chamadas
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 150);
    };
    window.addEventListener("resize", handleResize);
    resize();

    // Throttle mouse events para reduzir cálculos
    let lastMouseUpdate = 0;
    const mouseThrottle = 16; // ~60fps max

    function handleMouseMove(event) {
      const now = Date.now();
      if (now - lastMouseUpdate < mouseThrottle) return;
      lastMouseUpdate = now;

      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = 1 - (event.clientY - rect.top) / rect.height;
      const mouseUniform = program.uniforms.uMouse.value;
      mouseUniform[0] = x;
      mouseUniform[1] = y;
    }

    function handleTouchMove(event) {
      const now = Date.now();
      if (now - lastMouseUpdate < mouseThrottle) return;
      lastMouseUpdate = now;

      if (event.touches.length > 0) {
        const touch = event.touches[0];
        const rect = container.getBoundingClientRect();
        const x = (touch.clientX - rect.left) / rect.width;
        const y = 1 - (touch.clientY - rect.top) / rect.height;
        const mouseUniform = program.uniforms.uMouse.value;
        mouseUniform[0] = x;
        mouseUniform[1] = y;
      }
    }

    if (interactive) {
      container.addEventListener("mousemove", handleMouseMove, {
        passive: true,
      });
      container.addEventListener("touchmove", handleTouchMove, {
        passive: true,
      });
    }

    // Intersection Observer para pausar quando fora da tela
    const observer = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0].isIntersecting;
      },
      { threshold: 0.1 },
    );
    observer.observe(container);

    // Limitar FPS para economizar recursos
    let lastFrameTime = 0;
    const targetFPS = 30; // Reduzido de 60 para 30 FPS
    const frameInterval = 1000 / targetFPS;

    function update(t) {
      rafIdRef.current = requestAnimationFrame(update);

      // Pausar se não visível
      if (!isVisibleRef.current) return;

      // Limitar FPS
      const elapsed = t - lastFrameTime;
      if (elapsed < frameInterval) return;

      lastFrameTime = t - (elapsed % frameInterval);
      program.uniforms.uTime.value = t * 0.001 * speed;
      renderer.render({ scene: mesh });
    }
    rafIdRef.current = requestAnimationFrame(update);

    container.appendChild(gl.canvas);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      observer.disconnect();
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      if (interactive) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("touchmove", handleTouchMove);
      }
      if (gl.canvas.parentElement) {
        gl.canvas.parentElement.removeChild(gl.canvas);
      }
      const loseContextExt = gl.getExtension("WEBGL_lose_context");
      if (loseContextExt) {
        loseContextExt.loseContext();
      }
    };
  }, [colors, speed, amplitude, frequencyX, frequencyY, interactive]);

  return (
    <div ref={containerRef} className="liquidChrome-container" {...props} />
  );
};

export default memo(LiquidChrome);
