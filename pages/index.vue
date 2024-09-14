<template>
  <LazyHomeHeroBar />
  <div class="flex flex-col w-full overflow-clip">
    <LazyMovingText class="max-md:my-6 my-32" />
    <LazyHomeWhyUs />
    <LazyServiceBenefit />
    <LazyOurBusiness />
    <!-- <LazyProductsSection /> -->
    <LazyClientSection />
    <LazyHomeExperienceProject />
  </div>
</template>

<script setup lang="ts">
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();
onMounted(() => {
  window.scrollTo(0, 0);
});
onNuxtReady(() => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".header",
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true,
    },
  });

  timeline
    .to(".image-container", { scale: 1, ease: "expo.inOut" })
    .from(".image", { filter: "blur(10px)", duration: 0 }, 0)
    .to(".scroller-nav", { opacity: 0, ease: "expo.inOut" }, 0)
    .from(".navbar-animate", { opacity: 0, ease: "expo.inOut" });

  onBeforeRouteLeave(() => {
    console.log("a");
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    timeline.kill();
  });
});
</script>
