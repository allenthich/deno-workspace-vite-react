import { faker } from "@faker-js/faker";
import { defineConfig } from "orval";

export default defineConfig({
  petstoreApi: {
    input: {
      target: "./pets.yaml",
    },
    output: {
      mode: "split",
      client: "hono",
      target: "./gen/pets.ts",
      override: {
        hono: {
          handlers: "./gen/handlers",
        },
      },
    },
  },
});
