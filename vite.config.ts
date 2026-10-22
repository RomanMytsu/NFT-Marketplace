import react from "@vitejs/plugin-react";
// import path from "path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/nft-marketplace/",
  plugins: [react()],
  resolve: {
    alias: {
      // "@": path.resolve(__dirname, "./src"),
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/app/styles/abstracts/mixins" as *;
        @use "@/app/styles/abstracts/variables" as *;
        `,
      },
    },
  },
  server: {
    port: 2020,
    open: true,
    cors: true,
  },
});
