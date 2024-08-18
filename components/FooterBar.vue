<template>
  <footer class="w-full">
    <div class="relative bg-white">
      <div
        class="w-full relative py-24 max-lg:gap-10 grid grid-cols-2 z-10 px-24"
      >
        <div
          class="col-span-2 lg:col-span-1 flex flex-col justify-between items-start"
        >
          <div class="font-bold text-[clamp(1.5rem,3vw+1rem,2.25rem)]">
            Get to know us!
          </div>
        </div>
        <div
          class="col-span-2 lg:col-span-1 flex max-lg:flex-col gap-10 lg:gap-[15%] items-start"
        >
          <div class="flex flex-col gap-6 w-1/2">
            <div class="flex flex-col gap-2.5">
              <div class="font-bold text-[clamp(0.941rem,2vw+1rem,1.412rem)]">
                Our Business
              </div>
              <ul class="font-normal flex flex-col gap-1.5">
                <li>
                  <a href="#product" class="">Mechanical </a>
                </li>
                <li>
                  <a href="#product" class="">Electrical</a>
                </li>
                <li>
                  <a href="#product" class="">Special Purpose Machine</a>
                </li>
                <li>
                  <a href="#product" class="">Ducting</a>
                </li>
              </ul>
            </div>

            <div class="flex flex-col gap-2.5">
              <div class="font-bold text-[clamp(0.941rem,2vw+1rem,1.412rem)]">
                Careers
              </div>

              <a class="underline" href="mailto:test@test.com">
                Email us here!
              </a>
            </div>
          </div>

          <div class="flex flex-col gap-2.5">
            <div class="font-bold text-[clamp(0.941rem,2vw+1rem,1.412rem)]">
              Contact
            </div>
            <ul class="flex flex-col gap-2 font-normal">
              <li class="">
                Jl. Raya Pasar Kemis KM 3.5 Pos Warehousing Complex 88 Block
                R12C, Gelam Jaya Tangerang
              </li>
              <li>
                <a href="tel:+62888888888">(+62) 888 888 888</a>
              </li>
              <li class="underline">
                <a
                  target="_blank"
                  class="flex gap-2 flex-row items-center"
                  href="https://www.google.co.id/maps/search/Jl.+Raya+Pasar+Kemis+KM+3.5/@-6.1731726,106.5618499,18z/data=!3m1!4b1?entry=ttu"
                >
                  <span> See on Map</span> <IconSewingPin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      style="font-family: 'Space Grotesk Variable', sans-serif"
      class="sticky bottom-0 -z-[1] py-20 bg-[#ffd000] overflow-clip w-full justify-center items-center flex text-[5vw] tracking-tighter font-extrabold"
    >
      Mechatronic Mitra Solusi
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
