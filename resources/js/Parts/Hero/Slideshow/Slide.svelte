<script>
    export let slide;

    let phoneImage = slide.image_phone ? slide.image_phone : slide.image_desktop;
    let desktopImage = slide.image_desktop ? slide.image_desktop : slide.image_phone;
</script>

<picture class="h-full w-full">
    <source
        srcset="{desktopImage.presets.xl}"
        media="(min-width: 1024px, orientation: landscape)"
    />

    <source
        srcset="{desktopImage.presets.lg}"
        media="(orientation: landscape)"
    />

    <source
        srcset="{phoneImage.presets.xl}"
        media="(min-width: 1024px, orientation: portrait)"
    />

    <source
        srcset="{phoneImage.presets.lg}"
        media="(min-width: 540px, orientation: portrait)"
    />

    <img
        src="{phoneImage.presets.lg}" alt="{slide.alt}"
        class="h-full w-full object-cover"
    />
</picture>

