<script>
    import Disruptor from './Disruptors/Disruptor.svelte';

    export let entry;

    const disruptors = entry.hero_disruptors;
</script>

{#if disruptors}
    <div class="pointer-events-none absolute inset-0 z-0 h-full w-full">
        {#each disruptors as disruptor}
            <Disruptor {disruptor}/>
        {/each}
    </div>
{/if}
