<script context="module">
    export {default as layout} from '@/Layouts/Layout.svelte';
</script>

<script>
    import Hero from '../Parts/Hero.svelte'

    export let globals, entry;

    // console.log(entry);
</script>

<svelte:head>
    <title>{globals.websiteName} | {entry.title}</title>
</svelte:head>

{#if entry.hero_type != 'small_random'}
    <Hero {entry}/>
{/if}

