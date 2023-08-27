import { defineConfig } from "vite"

export default defineConfig({
  base: "/portfolioWebsite/",
  build: {
    chunkSizeWarningLimit: 1600,
  },
});
