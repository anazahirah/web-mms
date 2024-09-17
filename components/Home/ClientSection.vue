<template>
  <div class="max-md:py-32 py-64 flex flex-col gap-16 bg-[#fbd82d]">
    <div
      class="flex flex-col gap-3 items-center justify-center w-[90%] mx-auto"
    >
      <h4 class="text-primary text-5xl font-semibold tracking-tight">
        Who Trust Us
      </h4>
      <p class="text-neutral-800 text-lg text-center max-w-4xl">
        We proudly partner with a diverse range of clients, from industry giants
        to innovative startups across sectors. These organizations trust us to
        deliver exceptional results, thanks to our commitment to excellence and
        personalized service. We're honored to be their chosen partner in
        achieving their goals
      </p>
    </div>

    <div
      class="max-md:place-items-center flex flex-wrap gap-8 justify-center mx-auto w-[90%]"
    >
      <LazyHomeCardClient
        v-for="logo in client"
        :key="logo.alt"
        :image="logo.image"
        :alt="logo.alt"
        :url="logo.url"
        :description="logo.description"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { client } from "@/constant/data";
</script>
