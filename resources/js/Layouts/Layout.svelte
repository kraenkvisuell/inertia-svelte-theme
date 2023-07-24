<script>
    import {inertia} from '@inertiajs/svelte';

    export let globals;
    export let errors;
    export let entry;


</script>

<main class="font-body">
    <header>

    </header>

    <div>
        <slot/>
    </div>
</main>
