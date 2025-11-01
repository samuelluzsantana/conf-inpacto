// A custom hook to detect scroll direction, top position, and current scrollY
// Features:
// - Uses requestAnimationFrame to batch updates for smooth performance
// - Passive scroll listener for better scroll performance
// - Avoids unnecessary re-renders by only updating when values change

import { useEffect, useRef, useState } from "react";

/**
 * useScrollDirection
 * @param {Object} options
 * @param {number} [options.topThreshold=100] - Y position (px) considered as "top of the page".
 * @param {number} [options.delta=2] - Minimal delta to consider direction changes (noise filter).
 * @returns {{ direction: 'up' | 'down', isTop: boolean, scrollY: number }}
 */
export function useScrollDirection(options = {}) {
  const { topThreshold = 100, delta = 2 } = options;

  const isBrowser = typeof window !== "undefined";
  const initialY = isBrowser ? window.scrollY || window.pageYOffset || 0 : 0;

  const [direction, setDirection] = useState("up");
  const [scrollY, setScrollY] = useState(initialY);
  const [isTop, setIsTop] = useState(initialY <= topThreshold);

  const lastYRef = useRef(initialY);
  const pendingYRef = useRef(initialY);
  const rafIdRef = useRef(0);
  const directionRef = useRef("up");

  useEffect(() => {
    if (!isBrowser) return;

    const onScroll = () => {
      // Store latest scrollY and schedule a rAF update if not already scheduled
      pendingYRef.current = window.scrollY || window.pageYOffset || 0;
      if (!rafIdRef.current) {
        rafIdRef.current = window.requestAnimationFrame(applyUpdates);
      }
    };

    const applyUpdates = () => {
      rafIdRef.current = 0;
      const currentY = pendingYRef.current;
      const lastY = lastYRef.current;
      const diff = currentY - lastY;

      // Noise filter to avoid flickers
      if (Math.abs(diff) >= delta) {
        const newDirection = diff > 0 ? "down" : "up";
        if (newDirection !== directionRef.current) {
          directionRef.current = newDirection;
          setDirection(newDirection);
        }
        lastYRef.current = currentY;
      }

      // Update top and scrollY if they changed
      const newIsTop = currentY <= topThreshold;
      setIsTop(newIsTop);
      setScrollY(currentY);
    };

    // Initialize immediately in case we're not at top on mount
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      // removeEventListener only needs capture boolean; pass false for safety
      window.removeEventListener("scroll", onScroll, false);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = 0;
      }
    };
    // Intentionally exclude deps that would cause re-subscription on every change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBrowser, topThreshold, delta]);

  return { direction, isTop, scrollY };
}

export default useScrollDirection;
