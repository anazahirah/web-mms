<template>
  <footer class="w-full overflow-hidden">
    <div class="relative h-auto w-full bg-[#051939]">
      <div class="container relative z-30 py-8 md:py-12">
        <div
          class="w-full flex flex-row max-md:flex-col items-center justify-between gap-24"
        >
          <div class="w-full flex item-start flex-col justify-start">
            <img
              src="/mechatronic.png"
              class="xl:w-[207px] xl:h-[88px] w-auto h-[88px] mb-5 object-contain"
              alt="logo-footer"
            />
            <div
              class="text-zinc-400 xl:text-base text-sm font-medium max-w-sm"
            >
              <p>
                PT Mechatronic Mitra Solusi menghadirkan solusi terbaik untuk
                otomasi industri. Kami berkomitmen memenuhi kebutuhan spesifik
                Anda dengan layanan yang andal dan efisien
              </p>
            </div>
          </div>
          <div class="w-full">
            <div class="grid grid-cols-2 2xl:gap-12 md:gap-6 gap-3">
              <div class="">
                <div
                  class="md:mb-5 mb-2 md:text-white text-[#F6BB00] xl:text-xl text-base font-semibold"
                >
                  About Us
                </div>
                <ul class="md:space-y-3 space-y-2">
                  <li class="relative">
                    <NuxtLink
                      to="/about/mechatronic-vision?component=VisiComp"
                      class="group flex items-center transition-all text-zinc-400 hover:text-white xl:text-base md:text-sm text-xs font-medium"
                      target="_self"
                    >
                      Visi Mechatronic
                      <div
                        class="absolute left-0 bottom-0 w-0 -mb-1 group-hover:w-[42px] xl:h-[5px] h-[3px] transition-all bg-[#F6BB00] rounded-[10px]"
                      ></div>
                    </NuxtLink>
                  </li>
                  <li class="relative">
                    <NuxtLink
                      to="/about/mechatronic-mission?component=MisiComp"
                      class="group flex items-center transition-all text-zinc-400 hover:text-white xl:text-base md:text-sm text-xs font-medium"
                      target="_self"
                    >
                      Misi Mechatronic
                      <div
                        class="absolute left-0 bottom-0 w-0 -mb-1 group-hover:w-[42px] xl:h-[5px] h-[3px] transition-all bg-[#F6BB00] rounded-[10px]"
                      ></div>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="">
                <div
                  class="md:mb-5 mb-2 md:text-white text-[#F6BB00] xl:text-xl text-base font-semibold"
                >
                  Our Business
                </div>
                <ul class="md:space-y-3 space-y-2">
                  <li class="relative">
                    <NuxtLink
                      to="/business/mekanikal"
                      class="group flex items-center transition-all text-zinc-400 hover:text-white xl:text-base md:text-sm text-xs font-medium"
                      target="_self"
                    >
                      Mekanikal
                      <div
                        class="absolute left-0 bottom-0 w-0 -mb-1 group-hover:w-[42px] xl:h-[5px] h-[3px] transition-all bg-[#F6BB00] rounded-[10px]"
                      ></div>
                    </NuxtLink>
                  </li>
                  <li class="relative">
                    <NuxtLink
                      to="/business/electrical"
                      class="group flex items-center transition-all text-zinc-400 hover:text-white xl:text-base md:text-sm text-xs font-medium"
                      target="_self"
                    >
                      Electrical
                      <div
                        class="absolute left-0 bottom-0 w-0 -mb-1 group-hover:w-[42px] xl:h-[5px] h-[3px] transition-all bg-[#F6BB00] rounded-[10px]"
                      ></div>
                    </NuxtLink>
                  </li>
                  <li class="relative">
                    <NuxtLink
                      to="/business/konsultan"
                      class="group flex items-center transition-all text-zinc-400 hover:text-white xl:text-base md:text-sm text-xs font-medium"
                      target="_self"
                    >
                      Konsultan
                      <div
                        class="absolute left-0 bottom-0 w-0 -mb-1 group-hover:w-[42px] xl:h-[5px] h-[3px] transition-all bg-[#F6BB00] rounded-[10px]"
                      ></div>
                    </NuxtLink>
                  </li>
                  <li class="relative">
                    <NuxtLink
                      to="/business/informatika"
                      class="group flex items-center transition-all text-zinc-400 hover:text-white xl:text-base md:text-sm text-xs font-medium"
                      target="_self"
                    >
                      Informatika
                      <div
                        class="absolute left-0 bottom-0 w-0 -mb-1 group-hover:w-[42px] xl:h-[5px] h-[3px] transition-all bg-[#F6BB00] rounded-[10px]"
                      ></div>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separator />
      <div
        class="bg-[#051939] w-full z-40 relative pt-16 pb-4 flex flex-col gap-8"
      >
        <div class="container flex max-md:flex-col flex-row items-center">
          <div
            class="flex flex-col gap-8 p-8 bg-[#003ADA] rounded-2xl text-white max-md:w-[20rem] max-md:h-[24rem] w-[30rem] h-[20rem] -mr-2 max-md:mr-0 max-md:-mb-2 relative z-30"
          >
            <h5 class="text-[clamp(1.125rem,2vw+1rem,1.2rem)] font-semibold">
              Temukan Kami Di
            </h5>
            <div class="flex gap-3 items-center h-full">
              <NuxtLink
                :to="item.url"
                target="_blank"
                v-for="item in socialMedia"
                :key="item.url"
                class="p-3 border rounded-full group hover:border-transparent cursor-pointer hover:bg-[#FAD004] ease-in-out duration-300"
              >
                <component
                  :is="item.icon"
                  class="size-4 stroke-white group-hover:stroke-[#003ADA]"
                />
              </NuxtLink>
            </div>

            <div class="flex flex-col gap-2">
              <div class="flex gap-2 items-center">
                <LucideMapPin class="size-4 stroke-white" />
                <span class="text-white font-normal">Kantor Kami</span>
              </div>
              <span class="max-w-xs"
                >Jl. Raya Pasar Kemis Km 3,5 Kawasan Pergudangan Pos 88, Kuta
                Jaya, Kec. Ps. Kemis, Kabupaten Tangerang, Banten 15560</span
              >
            </div>
          </div>
          <div
            class="w-full h-auto flex items-center justify-center overflow-hidden rounded-xl"
          >
            <iframe
              class="w-full h-[18rem] max-md:h-[450px] max-md:w-[22rem]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3966.649046445545!2d106.5679109!3d-6.1777122!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ffb0f587aa63%3A0x2d99d4279aa949c8!2sPT%20Mechatronic%20Mitra%20Solusi!5e0!3m2!1sid!2sid!4v1725185755441!5m2!1sid!2sid"
              width="600"
              height="450"
              style="border: 0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div
          class="flex w-full items-center justify-center font-semibold text-xs text-white"
        >
          Mechatronics Group 2024.
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {
  LucideYoutube,
  LucideInstagram,
  LucideMapPin,
  LucidePhone,
  LucideMail,
} from "lucide-vue-next";

const socialMedia = [
  {
    url: "https://www.instagram.com/",
    icon: LucideInstagram,
  },
  {
    url: "https://www.youtube.com/",
    icon: LucideYoutube,
  },
  {
    url: "mailto:info@mechatronic.mitra.co.id",
    icon: LucideMail,
  },
  {
    url: "tel:+628123456789",
    icon: LucidePhone,
  },
];
</script>
