import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export const viteConfig = {
  base:"/deploy-practice/",
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
}

export default defineConfig(viteConfig);
