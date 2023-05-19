import { defineConfig } from "vite";
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [],
  build: {
    manifest: true,
    rollupOptions: {
      input: "./src/index.ts",
    },
  },
});
