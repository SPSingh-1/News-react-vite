// vite.config.js or vitest.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base:'/News-react-vite/', // Add this line
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js', // 👈 setup here
  },
});
