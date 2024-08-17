<template>
  <div
    style="font-family: 'Plus Jakarta Sans', sans-serif"
    class="overflow-hidden"
  >
    <LazyHeroBar />
    <NuxtPage class="py-24" />
    <LazyFooterBar />
  </div>
</template>

<script setup lang="ts">
const { $gsap: gsap, $SrollTrigger: SrollTrigger } = useNuxtApp();

onMounted(() => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".header",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    })
    .to(".image-container", {
      scale: 1,

      ease: "power1.inOut",
    })
    .from(
      ".image",
      {
        filter: "blur(10px)",
      },
      0
    )
    .to(
      ".scroller-nav",
      {
        opacity: 0,
        ease: "sine.inOut",
        duration: 0.5,
      },
      0
    )
    .from(".text-header", {
      opacity: 0,
      ease: "power1.inOut",
      duration: 1,
    });
});
</script>

<style></style>
