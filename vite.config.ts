
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    host: true,
    hmr: {
      overlay: true,
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
});
// Fix deployment optimized
