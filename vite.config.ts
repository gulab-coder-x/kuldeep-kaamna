import { defineConfig } from 'vite';
import type { Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const useDevEntry = (): Plugin => ({
  name: 'use-dev-entry',
  apply: 'serve',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const [pathname, query] = (req.url || '').split('?');
      if (pathname === '/' || pathname === '/index.html') {
        req.url = '/app.html' + (query ? `?${query}` : '');
      }
      next();
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), useDevEntry()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'app.html'),
      },
    },
  },
  optimizeDeps: {
    entries: ['app.html'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
