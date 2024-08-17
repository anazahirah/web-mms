<template>
  <h4 class="text-secondary text-3xl font-semibold w-[90%] mx-auto">
    Who Trust Us
  </h4>
  <div class="flex flex-col gap-8 mx-auto">
    <NuxtMarquee class="flex gap-4 items-center">
      <img
        v-for="logo in clientLogo"
        :key="logo"
        class="size-64 mx-4 object-contain"
        :src="logo.url"
        :alt="logo.alt"
        format="webp"
      />
    </NuxtMarquee>
  </div>
</template>

<script setup lang="ts">
const clientLogo = [
  { url: "/lg.png", alt: "Logo LG" },
  { url: "/mayora.png", alt: "Logo Mayora" },
  { url: "/loreal.svg", alt: "Logo Loreal" },
  { url: "/cabot.png", alt: "Logo Cabot" },
  { url: "/nestle.png", alt: "Logo Nestle" },
  { url: "/yamaha.png", alt: "Logo Yamaha" },
];
</script>
