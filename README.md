# Deno Workspace with Vite React

This is a starter project for Deno workspaces/monorepo with Vite + React.

## Spino

Run any Deno task across workspaces from project root with
[Spino](https://github.com/rsm-hcd/spino).

## Vite

Serve the frontend server

```bash
cd apps/fe-sample
deno task dev
```

## @kubb/cli

Generate schemas, hooks, and client from the OpenAPI spec

```bash
cd libs/pets
deno task gen:pets
```
