import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    server: {
      port: 3000,
      proxy: {
        '/api/rec': {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
          secure: false,
        },
        '/api': {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, '/api/be'),
        },
      },
    },
    plugins: [react(), svgr()],
  };
});
