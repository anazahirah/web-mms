<template>
  <div class="pt-64 pb-12">
    <div
      class="flex flex-col gap-3 items-center justify-center w-[90%] mx-auto"
    >
      <h4 class="text-primary text-5xl font-semibold tracking-tight">
        Who Trust Us
      </h4>
      <p class="text-neutral-400 text-lg text-center max-w-4xl">
        We proudly partner with a diverse range of clients, from industry giants
        to innovative startups across sectors. These organizations trust us to
        deliver exceptional results, thanks to our commitment to excellence and
        personalized service. We're honored to be their chosen partner in
        achieving their goals
      </p>
    </div>

    <div class="flex flex-col gap-8 mx-auto">
      <NuxtMarquee class="flex gap-4 items-center">
        <img
          v-for="logo in clientLogo"
          :key="logo.alt"
          class="size-64 mx-4 object-contain"
          :src="logo.url"
          :alt="logo.alt"
          format="webp"
        />
      </NuxtMarquee>
    </div>
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
