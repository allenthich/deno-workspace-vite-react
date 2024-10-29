import { Hono } from "@hono/hono";
import { serveStatic } from "@hono/hono/deno";
import * as swaggerUiDist from "swagger-ui-dist";
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
app.use(
  "/api-docs/*",
  serveStatic({ root: swaggerUiDist.getAbsoluteFSPath() }),
);
// Serve the OpenAPI YAML as JSON for Swagger UI
app.get("/openapi.json", (c) => {
  return c.json(apiSpec);
});
app.get("/api-docs", (c) => {
  const swaggerHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>API Docs</title>
      <link rel="stylesheet" href="/css/swagger-ui.css" />
    </head>
    <body>
      <div id="swagger-ui"></div>
      <script src="/js/swagger-ui-bundle.js"></script>
      <script>
        const ui = SwaggerUIBundle({
          url: '/openapi.json',
          dom_id: '#swagger-ui',
        });
      </script>
    </body>
    </html>
  `;
  return c.html(swaggerHtml);
});

Deno.serve({ port: 8081 }, app.fetch);
