<template>
  <div class="max-md:py-32 py-64 flex flex-col gap-16 bg-white">
    <div
      class="flex flex-col gap-3 items-center justify-center w-[90%] mx-auto"
    >
      <h4
        class="text-primary max-md:text-3xl text-5xl font-semibold tracking-tight"
      >
        Experience Project
      </h4>
      <p
        class="text-neutral-800 max-md:text-base text-xl text-center max-w-4xl"
      >
        Mechatronics provides custom engineering and industrial solutions to
        boost productivity and growth. We offer tailored machine design,
        manufacturing, and comprehensive engineering services, managing projects
        with precision and innovation. Trust us to optimize your industrial
        capabilities
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
