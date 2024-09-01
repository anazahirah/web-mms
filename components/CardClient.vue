<template>
  <div
    class="w-full max-w-64 overflow-hidden bg-white border-[1px] rounded-2xl px-10 py-6 aspect-[4/5] hover:scale-[.98] duration-300 ease-in-out group relative"
  >
    <img
      :src="image"
      :alt="alt"
      class="object-contain w-full h-full group-hover:scale-110 ease-in-out duration-300"
    />
    <div class="absolute top-5 right-5 text-black text-xs cursor-pointer">
      <NuxtLink :to="url" class="bg-[#FBD82E] p-2 rounded-lg"
        >Read More</NuxtLink
      >
    </div>

    <div
      class="absolute -bottom-1/2 left-0 right-0 px-4 group-hover:bottom-0 group-hover:pb-4 ease-in-out duration-300"
    >
      {{ description }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string;
  url: string;
  description: string;
  alt: string;
}>();
</script>
