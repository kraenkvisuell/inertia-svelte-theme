<script>
    import helpers from '@/helpers.js';

    export let entry;

    const link = helpers.getLink(entry.hero_link_type, entry.hero_linked_page, entry.hero_linked_product);
</script>

{#if link}
    <div class="pointer-events-none absolute z-10 flex w-full justify-center bottom-[90px]">
        <a class="pointer-events-auto rounded-full bg-black/50 px-[50px] py-[14px]" href={link}>
            <span
                class="text-center text-2xl font-black uppercase tracking-wider text-white pl-wider">
                {entry.hero_link_text}
            </span>
        </a>
    </div>
{/if}
