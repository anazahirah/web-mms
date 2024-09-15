<template>
  <div
    class="flex flex-col gap-32 max-lg:w-full max-lg:px-6 px-0 w-[90%] mx-auto pb-32"
  >
    <div class="w-full flex max-lg:flex-col flex-row gap-16">
      <div
        class="max-lg:relative sticky top-0 self-start tracking-tight pt-4 max-lg:w-full max-lg:text-center w-1/3 left-0 text-4xl font-bold text-primary"
      >
        WHY
        <span class="text-neutral-400"> US?</span>
        <!-- <IconsCompareArrow class="top-0 right-0 size-1/2" /> -->
      </div>
      <div class="flex max-lg:w-full w-2/3 flex-col gap-8 pt-4 relative">
        <!-- <h4
          class="text-3xl font-medium text-primary leading-snug text-justify text-neutral-500"
        >
          PT Mechatronic Mitra Solusi menghadirkan
          <span class="font-bold underline text-black"> solusi terbaik </span>
          untuk otomasi industri. Kami berkomitmen memenuhi kebutuhan spesifik
          Anda dengan layanan yang andal dan efisien
        </h4> -->

        <div class="flex flex-col gap-10">
          <div class="flex flex-col gap-2 5">
            <span class="text-2xl text-slate-400 flex items-end gap-3"
              >Choose us <LucideCornerRightDown class="size-5" />
            </span>
            <div class="w-full h-[1px] bg-slate-300"></div>
          </div>
          <div class="w-full grid grid-cols-3 gap-8">
            <LazyHomeCardWhyUs
              class="max-lg:col-span-3 col-span-1"
              v-for="item in keunggulan"
              :key="item.title"
              :icon="item.icon"
              :title="item.title"
              :description="item.description"
              :slogan="item.slogan"
              :number="item.number"
            />
          </div>

          <!-- <h4
            class="text-3xl font-medium text-primary leading-snug text-justify text-neutral-500"
          >
            PT Mechatronic Mitra Solusi menghadirkan
            <span class="font-bold underline text-black"> solusi terbaik </span>
            untuk otomasi industri. Kami berkomitmen memenuhi kebutuhan spesifik
            Anda dengan layanan yang andal dan efisien
          </h4> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconsCompareArrow from "@/icons/CompareArrow.vue";

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

const service = [
  {
    icon: LucideWrench,
    title: "Engineering Service",
    description:
      "Solusi lengkap untuk kebutuhan teknik mesin, listrik, pemeliharaan sistem, konsultasi, dan desain segel mekanis.",
    slogan: "Fast",
    number: "01",
  },
  {
    icon: SteelPipe,
    title: "Steel Works and Pipe Works",
    description:
      "Layanan fabrikasi dan pemasangan baja serta instalasi sistem perpipaan",
    slogan: "Steel and Pipe",
    number: "02",
  },
  {
    icon: LucideRefrigerator,
    title: "Plumbing and Refrigeration",
    description:
      "Instalasi, perbaikan, dan pemeliharaan sistem pipa air bersih/kotor serta sistem pendingin ruangan/industri.",
    slogan: " Pipe Protection",
    number: "03",
  },
  {
    icon: LucideHardHat,
    title: "Contractor and Supplier",
    description:
      "Penyedia jasa konstruksi dan pengadaan material/peralatan untuk berbagai proyek.",
    slogan: "Construction",
    number: "04",
  },
  {
    icon: LucideHeater,
    title: "Chiller and Heater",
    description:
      "Penjualan dan pemasangan unit pendingin (chiller) dan pemanas (heater) untuk kebutuhan industri dan komersial.",
    slogan: "Comfort Number One",
    number: "05",
  },
  {
    icon: LucideBrainCog,
    title: "Machine Maker",
    description:
      "Desain dan fabrikasi mesin sesuai kebutuhan spesifik industri.",
    slogan: "Your Needs",
    number: "06",
  },
];
</script>
