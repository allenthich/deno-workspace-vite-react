import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import deno from "@deno/vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [deno(), react(), tsconfigPaths()],
  cacheDir: "../../node_modules/.vite",
});
