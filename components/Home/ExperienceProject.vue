<template>
  <div class="max-md:py-32 py-64 flex flex-col gap-16 bg-white">
    <div
      class="flex flex-col gap-3 items-center justify-center w-[90%] mx-auto"
    >
      <h4 class="text-primary text-5xl font-semibold tracking-tight">
        Experience Project
      </h4>
      <p class="text-neutral-800 text-lg text-center max-w-4xl">
        At Mechatronics, we deliver exceptional engineering and industrial
        solutions tailored to each client's unique needs. From customized
        machine design and manufacturing to comprehensive engineering services,
        our extensive experience enhances productivity and drives business
        growth. With a proven track record of managing projects with precision,
        innovation, and quality, we are your trusted partner for optimizing
        industrial capabilities.
      </p>
    </div>
    <div class="w-[90%] max-w-screen-lg mx-auto rounded-md overflow-hidden">
      <iframe
        class="w-full aspect-video"
        src="https://www.youtube.com/embed/PBo5C45lN6M?si=HXNRXetQRWQZhISD"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { client } from "@/constant/data";
</script>
