import { defineConfig } from "@kubb/core";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginReactQuery } from "@kubb/plugin-react-query";
import { pluginTs } from "@kubb/plugin-ts";
import { pluginZod } from "@kubb/plugin-zod";

export default defineConfig(() => {
    return [
        {
            root: ".",
            input: {
                path: "./pets.yaml",
            },
            output: {
                path: "./gen",
            },
            plugins: [
                pluginOas({}),
                pluginTs({}),
                pluginReactQuery({}),
                pluginZod({
                    output: {
                        path: "./zod",
                    },
                    group: {
                        type: "tag",
                        name: ({ group }) => `${group}Schemas`,
                    },
                    typed: true,
                    dateType: "stringOffset",
                    unknownType: "unknown",
                    importPath: "zod",
                }),
            ],
        },
    ];
});
