import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/alibaba-clone/', // For GitHub Pages(should match the repository name)
});
