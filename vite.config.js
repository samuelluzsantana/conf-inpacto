import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    // Gzip compression
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 10240, // Only compress files larger than 10kb
      deleteOriginFile: false,
    }),
    // Brotli compression (better than gzip)
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 10240,
      deleteOriginFile: false,
    }),
    // Bundle analyzer (only in analyze mode)
    ...(mode === "analyze"
      ? [
          visualizer({
            open: true,
            gzipSize: true,
            brotliSize: true,
          }),
        ]
      : []),
  ],
  build: {
    // Otimizações de build
    target: "es2015",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs em produção
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info", "console.debug"],
      },
    },
    rollupOptions: {
      output: {
        // Code splitting manual para melhor cache
        manualChunks: {
          // React core
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          // Animações
          "animation-vendor": ["gsap", "react-spring", "canvas-confetti"],
          // UI libraries
          "ui-vendor": ["lucide-react", "swiper", "embla-carousel-react"],
          // Utils
          "utils-vendor": [
            "dayjs",
            "smooth-scroll-into-view-if-needed",
            "react-scroll",
          ],
        },
        // Nomes consistentes para melhor cache
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },
    // Aumenta o limite de warning para chunks
    chunkSizeWarningLimit: 1000,
    // Sourcemaps desabilitados em produção
    sourcemap: false,
  },
  // Otimizações de servidor dev
  server: {
    hmr: {
      overlay: true,
    },
  },
  // Pre-bundling de dependências
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "gsap",
      "dayjs",
      "lucide-react",
    ],
    exclude: ["three", "ogl"], // Heavy libs podem ser excluídas se não usadas
  },
}));
