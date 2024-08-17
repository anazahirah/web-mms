<template>
  <div
    class="font-semibold w-[120%] -translate-x-[4rem] md:-translate-x-[8rem] mx-auto py-4 whitespace-nowrap uppercase"
  >
    <span
      id="running-text"
      class="flex items-center gap-4 w-full text-[clamp(1rem,5vw+1rem,4rem)]"
      >OTOMATISASI CERDAS · EFISIENSI TANPA BATAS · OTOMATISASI CERDAS ·
      EFISIENSI TANPA BATAS · OTOMATISASI CERDAS · EFISIENSI TANPA BATAS ·
      OTOMATISASI CERDAS · EFISIENSI TANPA BATAS · OTOMATISASI CERDAS ·
      EFISIENSI TANPA BATAS · OTOMATISASI CERDAS · EFISIENSI TANPA BATAS ·
      OTOMATISASI CERDAS · EFISIENSI TANPA BATAS · OTOMATISASI CERDAS ·
      EFISIENSI TANPA BATAS · OTOMATISASI CERDAS · EFISIENSI TANPA BATAS ·
      OTOMATISASI CERDAS · EFISIENSI TANPA BATAS · OTOMATISASI CERDAS ·
      EFISIENSI TANPA BATAS · OTOMATISASI CERDAS · EFISIENSI TANPA BATAS ·
    </span>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  const runningText = document.getElementById("running-text");

  runningText?.animate(
    {
      transform: "translateX(-40%)",
    },
    {
      duration: 15000,

      iterations: Infinity,
    }
  );
});
</script>
