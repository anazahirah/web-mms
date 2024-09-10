<template>
  <div
    class="shadow-md fixed navbar-animate top-0 left-0 right-0 max-w-[80%] mx-auto mt-4 rounded-3xl bg-[#FAD004] px-8 overflow-hidden z-50 flex justify-between items-center"
  >
    <span class="menu-animate flex items-center gap-2"
      ><img src="/mechatronic.png" alt="logo mechatronic" class="size-10" />
      Mechatronics Mitra Solusi</span
    >
    <NavigationMenu class="menu-animate">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Our Business</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="grid w-[400px] gap-3 p-4 md:grid-cols-1">
              <li v-for="component in components" :key="component.title">
                <NavigationMenuLink as-child>
                  <a
                    :href="component.href"
                    class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div class="text-sm font-medium leading-none">
                      {{ component.title }}
                    </div>
                    <p
                      class="line-clamp-2 text-sm leading-snug text-muted-foreground"
                    >
                      {{ component.description }}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/about"
            :class="navigationMenuTriggerStyle()"
          >
            About Us
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
  <div class="w-full min-h-screen overflow-clip header my-auto pt-6">
    <div
      class="w-[90%] h-[90%] pt-4 scale-150 image-container mx-auto overflow-clip rounded-3xl relative will-change-transform"
    >
      <div
        @click="prevImage"
        class="absolute max-md:left-1/2 max-md:-translate-x-1/2 max-md:top-1/4 max-md:translate-y-0 left-4 top-1/2 -translate-y-1/2 z-30"
      >
        <div
          class="p-3 border group hover:border-transparent hover:bg-[#FAD003] ease-in-out duration-300 border-white rounded-full"
        >
          <LucideChevronLeft
            class="stroke-[#FAD003] group-hover:stroke-[#0004F0] duration-300 ease-in-out"
          />
        </div>
      </div>

      <div
        class="absolute right-4 bottom-1/2 -translate-y-1/2 z-30 max-md:right-1/2 max-md:translate-x-1/2 max-md:bottom-1/4 max-md:translate-y-0"
        @click="nextImage"
      >
        <div
          class="p-3 border group hover:border-transparent hover:bg-[#FAD003] ease-in-out duration-300 border-white rounded-full"
        >
          <LucideChevronRight
            class="stroke-[#FAD003] group-hover:stroke-[#0004F0] duration-300 ease-in-out"
          />
        </div>
      </div>
      <Transition>
        <img
          class="object-cover w-full h-full absolute left-0 top-0 image"
          :src="heroImage[indexImage].image"
          :key="heroImage[indexImage].image"
          alt="A stair case in a building with a window above it"
        />
      </Transition>
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

<script setup lang="ts">
import { LucideChevronLeft, LucideChevronRight } from "lucide-vue-next";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { components, heroImage } from "@/constant/data";
const indexImage = ref(0);

function nextImage() {
  if (indexImage.value <= heroImage.length - 1) {
    indexImage.value++;
  }
}

function createInfiniteLoop(interval = 4000) {
  function loop() {
    indexImage.value = (indexImage.value + 1) % heroImage.length;

    setTimeout(loop, interval);
  }

  loop();
}

createInfiniteLoop();

function prevImage() {
  if (indexImage.value >= 0) {
    indexImage.value--;
  }
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
