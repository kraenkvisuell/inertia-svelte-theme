function setVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setVH();

window.addEventListener('resize', setVH);

import { createInertiaApp } from '@inertiajs/svelte'

import _ from 'lodash'
window._ = _

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Blueprints/**/*.svelte', { eager: true })
        return pages[`./Blueprints/${name}.svelte`]
    },
    setup({ el, App }) {
        new App({ target: el, hydrate: true })
    },
})

