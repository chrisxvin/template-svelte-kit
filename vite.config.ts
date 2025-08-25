import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import UnpluginAutoImport from "unplugin-auto-import/vite";

export default defineConfig({
    server: {
        host: "0.0.0.0",
        port: 3000,
        allowedHosts: true,
    },
    plugins: [
        tailwindcss(),
        sveltekit(),
        UnpluginAutoImport({
            imports: [
                "svelte",
                "svelte/store",
                "svelte/transition",
            ],
            dirs: [
                "./src/lib/components/**",
            ],
            dts: "./src/types/auto-imports.d.ts",
        }),
    ],
});
