import { createInertiaApp } from '@inertiajs/svelte'
import createServer from '@inertiajs/svelte/server'

createServer(page =>
    createInertiaApp({
        page,
        resolve: name => {
            const pages = import.meta.glob('./Blueprints/**/*.svelte', { eager: true })
            return pages[`./Blueprints/${name}.svelte`]
        },
    }),
)
