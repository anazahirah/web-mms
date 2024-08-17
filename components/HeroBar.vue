<template>
  <div class="w-full min-h-screen overflow-hidden py-24 header">
    <div
      class="w-[90%] h-full scale-150 image-container my-auto mx-auto overflow-hidden rounded-3xl relative"
    >
      <NuxtImg
        class="object-cover w-full h-full absolute left-0 top-0 image"
        src="/header.jpg"
        format="webp"
        alt="A stair case in a building with a window above it"
      />
      <div
        class="flex flex-col gap-14 w-full items-center justify-center z-20 h-full relative text-secondary text-center"
      >
        <h1 class="text-4xl font-semibold">
          Inovasi Mekanikal & Elektrikal <br />
          Tanpa Batas.
        </h1>
        <div
          class="flex flex-col gap-1 justify-center items-center scroller-nav"
        >
          <span class="text-[8px] text-secondary">Scroll To Continue</span>
          <IconCaretDown class="size-4 animate-bounce" />
        </div>
      </div>
      <div
        class="absolute text-header left-[5%] bottom-[5%] text-2xl font-bold z-10 text-white"
      >
        Mechatronic Mitra Solusi
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
