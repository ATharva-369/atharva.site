import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/', // Use '/' if deploying to the root of your domain
  build: {
    outDir: 'dist', // Ensure this is inside the 'build' block
  },
});
