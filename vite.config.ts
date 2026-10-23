import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { svgSpritemap } from "vite-plugin-svg-spritemap";

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/nft-marketplace/" : "/",
  plugins: [
    react(),
    svgSpritemap({
      pattern: "src/shared/assets/icons/*.svg",
      filename: "spritemap.svg",
      currentColor: true,
      types: "src/shared/types/spritemap.ts",
    }),
  ],
  resolve: {
    alias: {
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
}));
