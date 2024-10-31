import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import deno from "@deno/vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    deno() as PluginOption,
    react() as PluginOption, // Note: plugin-react-swc is used here instead of plugin-react for performance
    tsconfigPaths({
      root: "./",
      projects: [
        "./tsconfig.json",
      ],
    }),
  ],
  cacheDir: "../../node_modules/.vite",
});
