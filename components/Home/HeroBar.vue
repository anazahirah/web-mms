<template>
  <div
    class="fixed navbar-animate top-0 left-0 right-0 max-w-full backdrop-blur-sm mx-auto bg-transparent shadow-sm py-5 px-8 sm:px-24 z-50 flex border-b border-[#FAD003] justify-between items-center"
  >
    <div class="menu-animate flex items-center gap-2">
      <img src="/mechatronic.png" alt="logo mechatronic" class="size-10" />
      <span v-show="$viewport.isGreaterOrEquals('tablet')">
        Mechatronics Mitra Solusi</span
      >
    </div>
    <NavigationMenu
      class="menu-animate"
      v-show="$viewport.isGreaterThan('desktop')"
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger class="bg-primary text-primary-foreground"
            >Our Business</NavigationMenuTrigger
          >
          <NavigationMenuContent>
            <ul class="grid w-[250px] gap-3 p-4 md:grid-cols-1">
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
            class="bg-primary text-primary-foreground"
            href="/about"
            :class="navigationMenuTriggerStyle()"
          >
            About Us
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            class="bg-primary text-primary-foreground"
            href="mailto:info@mechatronic.mitra.co.id"
            :class="navigationMenuTriggerStyle()"
          >
            Contact Us
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    <DropdownMenu v-if="$viewport.isLessThan('desktop')">
      <DropdownMenuTrigger>
        <Button size="icon"><LucideMenu class="size-6" /></Button
      ></DropdownMenuTrigger>
      <DropdownMenuContent class="mr-3">
        <DropdownMenuLabel @click="activate = !activate">
          <span class="flex gap-1.5 items-center">
            <IconBriefcaseBusiness class="size-3" />
            Business
            <IconChevronDown
              :class="{ 'rotate-180': activate }"
              class="size-3 ease-in-out duration-300"
            />
          </span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <div
            :class="{
              'h-0 ': !activate,
              'h-[12rem]': activate,
            }"
            class="grid gap-2 overflow-clip duration-500 ease-in-out"
          >
            <NuxtLink
              v-for="component in components"
              :key="component.title"
              class="w-full col-span-1"
              :to="component.href"
            >
              <DropdownMenuItem>
                {{ component.title }}
              </DropdownMenuItem></NuxtLink
            >
          </div>
          <DropdownMenuSeparator v-show="activate" />
        </DropdownMenuGroup>

        <DropdownMenuLabel>
          <NuxtLink to="/about">
            <span class="flex gap-1.5 items-center">
              <IconUsersRound class="size-3" />
              About Us
            </span>
          </NuxtLink>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>
          <NuxtLink to="mailto:info@mechatronic.mitra.co.id">
            <span class="flex gap-1.5 items-center">
              <IconContact class="size-3" />
              Contact Us
            </span></NuxtLink
          >
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
  <div class="w-full min-h-screen overflow-clip header my-auto pt-6">
    <div
      class="max-md:w-[80%] w-[95%] h-[90%] pt-4 scale-150 image-container mx-auto overflow-clip rounded-3xl relative will-change-transform"
    >
      <div
        @click="prevImage"
        class="absolute max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:top-1/4 max-lg:translate-y-0 left-4 top-1/2 -translate-y-1/2 z-30"
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
        class="absolute right-4 bottom-1/2 -translate-y-1/2 z-30 max-lg:right-1/2 max-lg:translate-x-1/2 max-lg:bottom-1/4 max-lg:translate-y-0"
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
        <h1
          :class="{
            'text-white': heroImage[indexImage].color === 'white',
            'text-black': heroImage[indexImage].color === 'black',
          }"
          class="max-md:text-2xl text-4xl font-semibold"
        >
          Inovasi Mekanikal & Elektrikal <br />
          Tanpa Batas.
        </h1>
        <div
          class="flex flex-col gap-1 justify-center items-center scroller-nav"
        >
          <span
            :class="{
              'text-white': heroImage[indexImage].color === 'white',
              'text-black': heroImage[indexImage].color === 'black',
            }"
            class="text-[8px] text-secondary"
            >Scroll To Continue</span
          >
          <IconCaretDown class="size-4 animate-bounce" />
        </div>
      </div>
      <div
        :class="{
          'text-white': heroImage[indexImage].color === 'white',
          'text-black': heroImage[indexImage].color === 'black',
        }"
        class="absolute text-header left-[5%] bottom-[5%] text-2xl font-bold z-10"
      >
        Mechatronic Mitra Solusi
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  LucideChevronLeft,
  LucideChevronRight,
  LucideMenu,
} from "lucide-vue-next";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { components, heroImage } from "@/constant/data";
const { $viewport } = useNuxtApp();
const indexImage = ref(0);

const activate = ref(false);

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

onMounted(() => {
  createInfiniteLoop();
});
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
