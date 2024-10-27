import { Hono } from "hono";
import { addPetMutationKey } from "@libs/pets";

const app = new Hono();

app.get("/", (c) => {
  return c.text(`Hello Hono! ${JSON.stringify(addPetMutationKey())}}`);
});

Deno.serve(app.fetch);
