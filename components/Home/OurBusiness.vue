<template>
  <div class="w-full h-full relative overflow-hidden py-32">
    <div class="grid grid-cols-5 w-[90%] mx-auto gap-24">
      <div
        class="flex flex-col gap-1 max-lg:col-span-6 col-span-2 relative max-md:col-span-6"
      >
        <h2 class="font-semibold text-[clamp(1.5rem,3vw+1rem,3rem)]">
          Our Business
        </h2>

        <p class="text-[clamp(1rem,2vw+1rem,1.5rem)] tracking-wider">
          We can provide what you need.
        </p>
        <img
          src="/business.gif"
          alt="Illustration by Dimotionicons from Ouch! "
          class="w-fit"
        />
      </div>
      <div class="flex flex-col gap-6 col-span-3 relative max-lg:col-span-6">
        <div class="flex gap-2 max-md:flex-col">
          <div v-for="(item, index) in service" :key="index">
            <div
              :class="[
                'group relative transition-all ease-in-out duration-300 max-md:w-[95%] 2xl:h-[529px] xl:h-[407px] md:h-[325px] rounded-2xl bg-blue-500 overflow-hidden ',
                clickedIndex === index
                  ? '2xl:w-[337px] xl:w-[260px] md:w-[208px] h-[325px]'
                  : '2xl:w-[94px] xl:w-[72px] md:w-[57px] h-[57px]',
              ]"
              :aria-expanded="clickedIndex === index ? 'true' : 'false'"
              @click="handleClick(index)"
            >
              <div
                class="absolute z-20 w-full h-full flex flex-col justify-end bg-gradient-to-b from-transparent to-sky-950"
              >
                <div
                  class="group-aria-expanded:h-auto md:h-0 h-auto xl:p-6 p-3.5 text-left relative z-20"
                >
                  <h4
                    class="font-semibold text-[#F6BB00] ease-in-out duration-300 origin-top-left md:-rotate-90 group-aria-expanded:w-full 2xl:w-[529px] xl:w-[407px] w-[325px] group-aria-expanded:md:rotate-0 text-nowrap"
                  >
                    {{ item.slogan }}
                  </h4>
                  <div
                    class="grow pb-3 text-white group-aria-expanded:flex ease-in-out duration-300 hidden"
                  >
                    {{ item.title }}
                  </div>
                  <NuxtLink :to="item.url">
                    <Button class="w-fit group"
                      >Read More
                      <IconCaretRight
                        class="size-5 -ml-4 group-hover:ml-2 duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                    /></Button>
                  </NuxtLink>
                </div>
              </div>
              <img
                :src="item.image"
                class="z-0 relative transition-all ease-in-out duration-300 w-full h-full bg-fixed object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-3 max-md:max-w-sm">
          <h3 class="font-semibold text-[clamp(1.375rem,3vw+1rem,2rem)]">
            {{ service[clickedIndex].title }}
          </h3>
          <p class="tracking-wider text-[clamp(1rem,2vw+1rem,1.5rem)]">
            {{ service[clickedIndex].description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { service } from "@/constant/data";
const clickedIndex = ref<number>(0);
function handleClick(index: number) {
  clickedIndex.value = index;
}
</script>
