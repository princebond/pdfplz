import { defineConfig } from "vite";

export default defineConfig({
  base: "/",   // Cloudflare Pages এর জন্য safe
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false
  }
});
