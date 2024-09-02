<template>
  <div class="bg-[#FAD003] w-full h-full relative overflow-hidden py-32">
    <div class="grid max-md:grid-rows-2 grid-cols-2 w-[90%] mx-auto gap-12">
      <div
        class="flex flex-col gap-8 col-span-1 max-md:row-span-1 max-md:row-start-2 max-md:col-span-2"
      >
        <h2 class="font-semibold text-[clamp(1.5rem,3vw+1rem,3rem)]">
          Kenapa Mechatronic Mitra Solusi?
        </h2>

        <p class="text-[clamp(1rem,2vw+1rem,1.5rem)] tracking-wider">
          PT Mechatronic Mitra Solusi menghadirkan
          <span class="font-bold underline text-black"> solusi terbaik </span>
          untuk otomasi industri. Kami berkomitmen memenuhi kebutuhan spesifik
          Anda dengan layanan yang andal dan efisien
        </p>
        <Button class="w-fit group"
          >Read More About Us
          <IconCaretRight
            class="size-5 ml-0 group-hover:ml-2 duration-300 ease-in-out opacity-0 group-hover:opacity-100"
        /></Button>
      </div>
      <div
        class="relative max-md:w-full w-1/3 col-span-1 max-md:row-span-1 max-md:col-span-2 max-md:row-start-1"
      >
        <img
          src="/question-mark.png"
          alt="question mark 3D "
          class="object-contain object-center w-full absolute top-0 right-0"
        />
      </div>
    </div>
  </div>
  <!-- <div class="flex flex-col gap-32 w-full px-24">
    <div class="w-full flex gap-16">
      <div
        class="sticky top-0 self-start tracking-tight pt-4 w-1/3 text-4xl font-bold text-primary"
      >
        WHY
        <span class="text-neutral-400"> US?</span>
      </div>
      <div class="flex w-2/3 flex-col gap-32 pt-4">
        <h4
          class="text-3xl font-medium text-primary leading-snug text-justify text-neutral-500"
        >
          PT Mechatronic Mitra Solusi menghadirkan
          <span class="font-bold underline text-black"> solusi terbaik </span>
          untuk otomasi industri. Kami berkomitmen memenuhi kebutuhan spesifik
          Anda dengan layanan yang andal dan efisien
        </h4>

        <div class="flex flex-col gap-10">
          <div class="flex flex-col gap-2 5">
            <span class="text-2xl text-slate-400 flex items-end gap-3"
              >Choose us <LucideCornerRightDown class="size-5" />
            </span>
            <div class="w-full h-[1px] bg-slate-300"></div>
          </div>
          <div class="w-full grid grid-cols-3 gap-8">
            <CardSection
              class="col-span-1"
              v-for="item in keunggulan"
              :key="item.title"
              :icon="item.icon"
              :title="item.title"
              :description="item.description"
              :slogan="item.slogan"
              :number="item.number"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex gap-16">
      <div
        class="sticky place-self-end top-0 self-start tracking-tight pt-4 w-1/3 text-4xl font-bold text-primary ml-auto"
      >
        OUR
        <span class="text-neutral-400"> SERVICES</span>
      </div>
      <div class="flex w-2/3 flex-col gap-32 pt-4">
        <div class="flex flex-col gap-10">
          <div class="flex flex-col gap-2">
            <span class="text-2xl text-slate-400 flex items-end gap-3">
              Service <LucideCornerRightDown class="size-5" />
            </span>
            <div class="w-full h-[1px] bg-slate-300"></div>
          </div>
          <div class="w-full grid grid-cols-3 gap-8">
            <CardSection
              class="col-span-1"
              v-for="item in service"
              :key="item.title"
              :icon="item.icon"
              :title="item.title"
              :description="item.description"
              :slogan="item.slogan"
              :number="item.number"
            />
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script setup lang="ts">
import {
  LucideFastForward,
  LucideWrench,
  LucideLightbulb,
  LucideWalletMinimal,
  LucideSquareStack,
  LucideCornerRightDown,
  LucideHeater,
  LucideHardHat,
  LucideBrainCog,
  LucideRefrigerator,
  LucideArrowRight,
} from "lucide-vue-next";
import SteelPipe from "@/icons/PipeSteel.vue";
const keunggulan = [
  {
    icon: LucideFastForward,
    title: "Pengiriman dan Pengerjaan yang Cepat",
    description:
      "Waktu Anda berharga, kami solusinya. Tim ahli kami siap memberikan hasil cepat, berkualitas, dan tepat waktu.",
    slogan: "Fast",
    number: "01",
  },
  {
    icon: LucideWrench,
    title: "Customisasi Produk Anda",
    description:
      "Kami Merancang, Membangun, dan Menyesuaikan Sistem yang Mendukung Kesuksesan Anda.",
    slogan: "Customizable",
    number: "02",
  },
  {
    icon: LucideLightbulb,
    title: "14 Tahun dalam Berinovasi",
    description:
      "Pengalaman dan keahlian kami adalah jaminan kualitas dan keandalan produk dan layanan kami",
    slogan: " Experience",
    number: "03",
  },
  {
    icon: LucideWalletMinimal,
    title: "Harga Bersaing",
    description:
      "Kami menawarkan harga yang kompetitif tanpa mengorbankan kualitas produk dan layanan. Dengan memilih kami, Anda mendapatkan nilai terbaik untuk investasi Anda.",
    slogan: "Affordable",
    number: "04",
  },
  {
    icon: LucideSquareStack,
    title: "Banyak Pilihan Layanan",
    description:
      "Kami menyediakan 12 lebih service yang dapat meningkatkan experince anda",
    slogan: "Many Choices",
    number: "05",
  },
];
</script>
