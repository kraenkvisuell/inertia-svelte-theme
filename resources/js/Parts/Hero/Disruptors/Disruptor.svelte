<script>
    import helpers from '@/helpers.js';

    export let disruptor = {};

    const bgColor = disruptor.bg_color ? disruptor.bg_color : '#eeeeee';
    const link = helpers.getLink(disruptor.link_type, disruptor.linked_page, disruptor.linked_product);
    const xPhone = (disruptor.x_phone ? parseInt(disruptor.x_phone) : 0) + '%';
    const yPhone = (disruptor.y_phone ? parseInt(disruptor.y_phone) : 0) + '%';
    const xDesktop = (disruptor.x_desktop ? parseInt(disruptor.x_desktop) : 0) + '%';
    const yDesktop = (disruptor.y_desktop ? parseInt(disruptor.y_desktop) : 0) + '%';
</script>

<div class="pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center text-center">
    <a
        href="{link}"
        class="pointer-events-auto flex transform flex-col items-center justify-center text-white rotate-[-8deg]"
        style='--xPhone:{xPhone}; --yPhone:{yPhone}; --xDesktop:{xDesktop}; --yDesktop:{yDesktop};'
    >
        <div
            class="absolute w-[calc(100%+2rem)] flex-shrink-0 ml-[-1rem] h-full inset-0 flex items-center justify-center"
        >
            <div
                class="w-full rounded-full aspect-1"
                style:background-color={bgColor}
            >
            </div>
        </div>

        {#if disruptor.topline}
            <div class="text-base leading-tight mt-[-5px]">
                {disruptor.topline}
            </div>
        {/if}

        <div class="text-lg font-bold leading-tight">
            {@html helpers.nl2br(disruptor.text)}
        </div>


    </a>
</div>

<style>
    a {
        margin-left: var(--xPhone);
        margin-top: var(--yPhone);
    }

    @media (orientation: landscape) {
        a {
            margin-left: var(--xDesktop);
            margin-top: var(--yDesktop);
        }
    }
</style>
