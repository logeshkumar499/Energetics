import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dynamicImport from "vite-plugin-dynamic-import";
import mkcert from "vite-plugin-mkcert";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4500,
    host: true,
  },
  preview: {
    port: 4500,
    host: true,
  },
  plugins: [react(), dynamicImport(), mkcert()],
})
