<script>
    export let entry;

    let phoneVideo = entry.hero_video_phone ? entry.hero_video_phone : entry.hero_video_desktop;
    let desktopVideo = entry.hero_video_desktop ? entry.hero_video_desktop : entry.hero_video_phone;

    let fallbackPhoneVideo = entry.hero_fallback_video_phone
        ? entry.hero_fallback_video_phone
        : entry.hero_fallback_video_desktop;
    let fallbackDesktopVideo = entry.hero_fallback_video_desktop
        ? entry.hero_fallback_video_desktop
        : entry.hero_fallback_video_phone;

    console.log(entry)
</script>


<video class="landscape:hidden h-full w-full object-cover" playsinline muted autoplay loop>
    <source src="{phoneVideo.url}" type="{phoneVideo.mime_type}"/>

    {#if fallbackPhoneVideo && fallbackPhoneVideo.mime_type != phoneVideo.mime_type}
        <source src="{fallbackPhoneVideo.url}" type="{fallbackPhoneVideo.mime_type}"/>
    {/if}
</video>

<video class="landscape:block hidden h-full w-full object-cover" playsinline muted autoplay loop>
    <source src="{desktopVideo.url}" type="{desktopVideo.mime_type}"/>

    {#if fallbackDesktopVideo && fallbackDesktopVideo.mime_type != phoneVideo.mime_type}
        <source src="{fallbackDesktopVideo.url}" type="{fallbackDesktopVideo.mime_type}"/>
    {/if}
</video>

