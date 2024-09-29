<template>
  <template v-if="session">
    <LazyHomeHeroBar />
    <div class="flex flex-col w-full overflow-clip">
      <LazyHomeMovingText class="max-md:my-6 mb-12 relative" />
      <LazyHomeServiceBenefit />
      <LazyHomeWhyUs class="pt-16" />
      <LazyHomeOurBusiness />

      <LazyHomeClientSection />
      <LazyHomeExperienceProject />
    </div>
  </template>
  <div
    class="flex w-full min-h-screen bg-white items-center justify-center flex-col gap-4 absolute z-[99]"
    v-else
  >
    <div class="loader"></div>
    <span class="tracking-widest text-sm">Mechatronics Group.</span>
  </div>
</template>

<script setup lang="ts">
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const session = useSessionStorage("session", false);

onMounted(async () => {
  window.scrollTo(0, 0);
  if (!session.value) {
    setTimeout(() => {
      session.value = true;
    }, 2000);

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
  }

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
});
</script>

<style scoped>
/* HTML: <div class="loader"></div> */
.loader {
  display: inline-grid;
  padding: 5px;
  background: #fff;
  filter: blur(4px) contrast(12);
}
.loader:before {
  content: "";
  height: 40px;
  aspect-ratio: 3;
  --c: #0000 64%, #000 66% 98%, #0000 101%;
  background: radial-gradient(35% 146% at 50% 159%, var(--c)) 0 0,
    radial-gradient(35% 146% at 50% -59%, var(--c)) 100% 100%;
  background-size: calc(200% / 3) 50%;
  background-repeat: repeat-x;
  animation: l11 0.8s infinite linear;
}
@keyframes l11 {
  to {
    background-position: -200% 0, -100% 100%;
  }
}
</style>
