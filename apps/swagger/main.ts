import { Hono } from "@hono/hono";
import { serveStatic } from "@hono/hono/deno";
import { swaggerUI } from "@hono/swagger-ui";
import { parse } from "jsr:@std/yaml";
import * as path from "jsr:@std/path";

const app = new Hono();

// Load the OpenAPI YAML file
const apiSpec = parse(
  await Deno.readTextFile(
    // TODO: make yaml explorer
    path.join(
      import.meta.dirname as string,
      "..",
      "..",
      "libs",
      "pets",
      "pets.yaml",
    ),
  ),
) as object;

app.use(serveStatic({ root: "./public/" }));
app.get("/api-docs", swaggerUI({ url: "/openapi.json" }));
// Serve the OpenAPI YAML as JSON for Swagger UI
app.get("/openapi.json", (c) => {
  return c.json(apiSpec);
});

Deno.serve({ port: 8081 }, app.fetch);
