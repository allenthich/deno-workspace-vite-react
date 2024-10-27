import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import deno from "@deno/vite-plugin";
import "npm:react";
import "npm:react-dom";

// https://vite.dev/config/
export default defineConfig({
  plugins: [deno(), react()],
  cacheDir: "../../node_modules/.vite",
});
