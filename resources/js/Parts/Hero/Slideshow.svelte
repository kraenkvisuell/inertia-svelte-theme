<script>
    import Slide from './Slideshow/Slide.svelte';

    export let slides;

    let currentSlide = 0;

    const switchSlide = () => (currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0);

    if (slides.length > 1) {
        setInterval(() => switchSlide(), 4000);
    }
</script>

<div class="h-full w-full">
    {#each slides as slide, index}
        <div
            class="absolute inset-0 h-full w-full transition-opacity duration-[1500ms]"
            class:opacity-0={currentSlide !== index}
            class:opacity-full={currentSlide === index}
        >
            <Slide {slide} />
        </div>
    {/each}
</div>
