import laravel from 'laravel-vite-plugin'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            ssr: 'resources/js/ssr.js',
            refresh: true,
        }),
        svelte({
            compilerOptions: {
                hydratable: true,
            }
        }),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
});
