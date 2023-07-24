<script>
    import Slideshow from './Hero/Slideshow.svelte';
    import ToggleArrow from '../Svg/ToggleArrow.svelte';
    import Video from './Hero/Video.svelte';
    import LargeButton from './Hero/LargeButton.svelte';
    import Disruptors from './Hero/Disruptors.svelte';

    export let entry;
</script>

<div class="h-screen">
    <div class="h-[calc(100%-22px)] md:h-[calc(100%-38px)]">
        {#if entry.hero_type.value === 'slideshow'}
            <Slideshow slides={entry.hero_slideshow}/>
        {:else if entry.hero_type.value === 'video'}
            <Video {entry}/>
        {/if}

        <Disruptors {entry}/>

        <LargeButton {entry}/>
    </div>

    <button class="flex w-full items-center justify-center bg-white h-[22px] md:h-[38px]">
        <div class="w-[9px] md:w-[21px]">
            <ToggleArrow/>
        </div>
    </button>
</div>
