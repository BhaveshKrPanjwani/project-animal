import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/deploy-Pawfect-Haven/', // replace <repo-name> with your GitHub repo name
  plugins: [react()],
});
