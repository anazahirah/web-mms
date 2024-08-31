<template>
  <div class="overflow-clip">
    <LazyHeroBar />
    <NuxtPage />
    <Separator />
    <LazyFooterBar />
  </div>
</template>

<script setup lang="ts">
const { $gsap: gsap, $SrollTrigger: SrollTrigger } = useNuxtApp();

onNuxtReady(() => {
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
    .to(".image-container", { scale: 1, ease: "expo.inOut" })
    .from(".image", { filter: "blur(10px)", duration: 0 }, 0)
    .to(".scroller-nav", { opacity: 0, ease: "expo.inOut" }, 0)
    .to(".navbar-animate", { padding: "2rem 2rem", ease: "expo.inOut" })
    .from(".navbar-animate", { height: 0, ease: "expo.inOut" })
    .from(".menu-animate", { opacity: 0, duration: 2, ease: "expo.inOut" })
    .from(".text-header", { opacity: 0, duration: 1, ease: "expo.inOut" })
    .to(".navbar-animate", { overflow: "visible", ease: "expo.inOut" });
});
</script>

<style></style>
