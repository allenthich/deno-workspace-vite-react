import { Hono } from "@hono/hono";
import { addPetMutationKey } from "@libs/pets";

const app = new Hono();

app.get("/", (c: { text: (arg0: string) => any }) => {
  return c.text(`Hello Hono! ${JSON.stringify(addPetMutationKey())}}`);
});

Deno.serve(app.fetch);
