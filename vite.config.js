import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// This works for Netlify, Vercel, AND GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: "./", // ✅ This makes assets load correctly anywhere
});
