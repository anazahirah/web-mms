<template>
  <footer class="w-full overflow-hidden">
    <div class="relative h-auto w-full bg-[#021024]">
      <div
        class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
      ></div>
      <div
        class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#021024)]"
      ></div>

      <div class="container relative z-30 py-8 md:py-12">
        <div class="w-full flex items-center justify-between gap-24">
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
                      to=""
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
                      to=""
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
                      to=""
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
                      to=""
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
        <div class="xl:hidden">
          <div class="text-white text-center text-base font-medium mb-3">
            Connect Us
          </div>
          <div class="text-center space-x-3">
            <NuxtLink
              to="http://www.angkasapura2.co.id/"
              target="_blank"
              class="inline-flex justify-center items-center w-8 h-8 bg-[#012B6A] text-white rounded-full"
            >
              <i class="fa-regular fa-globe fa-fw relative"></i>
            </NuxtLink>
            <NuxtLink
              to="https://web.facebook.com/apsolusi?_rdc=1&amp;_rdr"
              target="_blank"
              class="inline-flex justify-center items-center w-8 h-8 bg-[#012B6A] text-white rounded-full"
            >
              <i class="fa-brands fa-facebook relative"></i>
            </NuxtLink>
            <NuxtLink
              to="https://www.instagram.com/angkasapurasolusi/"
              target="_blank"
              class="inline-flex justify-center items-center w-8 h-8 bg-[#012B6A] text-white rounded-full"
            >
              <i class="fa-brands fa-instagram relative"></i>
            </NuxtLink>
            <NuxtLink
              to="https://www.youtube.com/@AngkasaPuraSolusi"
              target="_blank"
              class="inline-flex justify-center items-center w-8 h-8 bg-[#012B6A] text-white rounded-full"
            >
              <i class="fa-brands fa-youtube relative"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div
        class="py-12 text-white text-center xl:text-base md:text-sm text-xs font-normal bg-[#00183A]/60 backdrop-blur-md"
      >
        <div class="container">
          <div class="max-xl:hidden text-center space-x-3 mb-4">
            <NuxtLink
              to="http://www.angkasapura2.co.id/"
              target="_blank"
              class="inline-flex justify-center items-center w-9 h-9 bg-[#012B6A] hover:bg-[#F6BB00] hover:text-[#012B6A] transition-all duration-500 text-white rounded-full"
            >
              <i class="fa-regular fa-globe fa-fw relative"></i>
            </NuxtLink>
            <NuxtLink
              href="https://web.facebook.com/apsolusi?_rdc=1&amp;_rdr"
              target="_blank"
              class="inline-flex justify-center items-center w-9 h-9 bg-[#012B6A] hover:bg-[#F6BB00] hover:text-[#012B6A] transition-all duration-500 text-white rounded-full"
            >
              <i class="fa-brands fa-facebook relative"></i>
            </NuxtLink>
            <NuxtLink
              href="https://www.instagram.com/angkasapurasolusi/"
              target="_blank"
              class="inline-flex justify-center items-center w-9 h-9 bg-[#012B6A] hover:bg-[#F6BB00] hover:text-[#012B6A] transition-all duration-500 text-white rounded-full"
            >
              <i class="fa-brands fa-instagram relative"></i>
            </NuxtLink>
            <NuxtLink
              href="https://www.youtube.com/@AngkasaPuraSolusi"
              target="_blank"
              class="inline-flex justify-center items-center w-9 h-9 bg-[#012B6A] hover:bg-[#F6BB00] hover:text-[#012B6A] transition-all duration-500 text-white rounded-full"
            >
              <i class="fa-brands fa-youtube relative"></i>
            </NuxtLink>
          </div>

          © Angkasa Pura Solusi 2024
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
