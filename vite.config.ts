import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // or "./" if deployed from a subfolder, "/" if root domain
  plugins: [react()],
});
