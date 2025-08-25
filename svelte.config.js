import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    compilerOptions: {
        dev: true,
        runes: true,
    },

    // Consult https://svelte.dev/docs/kit/integrations
    // for more information about preprocessors
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({ out: "dist" }),
        alias: {
            "$types": "./src/types",
            "$types/*": "./src/types/*",
        },
    },

    onwarn: (warning, handler) => {
        if (warning.code.startsWith("a11y_")) {
            return;
        }
        handler(warning);
    },
};

export default config;
