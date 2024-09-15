<template>
  <div class="relative">
    <div class="bg-[#eaebf2]">
      <div
        class="2xl:h-[453px] lg:h-96 bg-blue-800 rounded-b-[2.604vw] bg-cover bg-no-repeat bg-bottom overflow-hidden"
        style="background-image: url('')"
      >
        <div class="container h-full">
          <div class="md:pt-40 sm:pt-20 h-full flex items-end">
            <div
              class="h-full flex grow flex-col justify-center pb-12 max-md:mt-12 gap-8"
            >
              <Button variant="secondary" class="w-fit" @click="navigateTo('/')"
                >Back</Button
              >
              <LazyNavBreadCrumbNav />
              <h1 class="text-white font-semibold text-5xl">
                About Our Company
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="lg:flex md:py-10 py-6 2xl:gap-6 lg:gap-4">
          <div class="2xl:w-80 xl:w-1/3 lg:w-1/4 flex-none">
            <ol
              class="relative bg-[#e4e5ed] mb-6 xl:p-6 p-4 rounded-[10px] space-y-3 text-gray-500 border-s xl:text-base text-xs font-semibold border-gray-200"
            >
              <li
                class="group/dot relative"
                v-for="item in listNavigationAbout"
                :key="item.title"
              >
                <NuxtLink
                  :to="`${item.url}?component=${item.component}`"
                  :class="{
                    'bg-[#F6BB00]': item.url == route.path,
                  }"
                  class="group block relative ms-6 xl:py-4 py-2 xl:px-5 px-2.5 rounded-[10px] hover:bg-[#F6BB00]"
                >
                  <span
                    :class="{
                      'outline-1': item.url == route.path,
                      'outline-[#004A8A]': item.url == route.path,
                      'outline-[#e4e5ed]': item.url != route.path,
                    }"
                    class="absolute left-0 top-0 bottom-0 outline m-auto flex items-center justify-center bg-[#F6BB00] outline-[#e4e5ed] rounded-full w-2 h-2 outline-8 -ml-[1.35rem] group-hover:-ml-7 group-hover:outline-1 group-hover:outline-[#004A8A] group-hover:w-5 group-hover:h-5 group-hover:border-[3px] group-hover:ring-8 group-hover:ring-[#e4e5ed]"
                  ></span>
                  <div
                    class="flex items-center justify-between capitalize text-slate-500 group-hover:text-[#004A8A]"
                  >
                    <span class="grow line-clamp-2"> {{ item.title }}</span>
                    <span
                      class="flex flex-none ms-1.5 group-hover:xl:-me-3 group-hover:-me-1 transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-[6px] h-[11px] xl:w-[9px] xl:h-[16px] fill-slate-500 group-hover:fill-[#004A8A]"
                        viewBox="0 0 9 16"
                        fill="none"
                      >
                        <path
                          d="M3.85714 0H0L5.14286 7.77778L0 16H3.85714L9 7.77778L3.85714 0Z"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="transition-all w-[6px] h-[11px] xl:w-[9px] xl:h-[16px] invisible opacity-0 fill-slate-500 group-hover:visible group-hover:opacity-100 group-hover:fill-[#004A8A]"
                        viewBox="0 0 9 16"
                        fill="none"
                      >
                        <path
                          d="M3.85714 0H0L5.14286 7.77778L0 16H3.85714L9 7.77778L3.85714 0Z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </NuxtLink>
              </li>
            </ol>
          </div>

          <NuxtPage />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { listNavigationAbout } from "@/constant/data";
definePageMeta({
  layout: "blog",
});
const route = useRoute();
</script>
