<template>
  <div class="bg-[#012B6F] w-full py-24 mt-32 flex flex-col gap-32">
    <div class="flex flex-col gap-4 w-[90%] mx-auto">
      <h2 class="text-5xl font-semibold text-white">
        Every Machine Your Business Needs
      </h2>
      <p class="text-lg text-neutral-400">
        From electrical to mechanical , we have the best solutions for your
        needs
      </p>
    </div>

    <CardProduct :products="products" />
  </div>
</template>

<script setup lang="ts">
const products = [
  {
    title: "Mechanical",
    description:
      "Butuh solusi fabrikasi logam yang lengkap dan terpercaya? Kami ahlinya! Mulai dari tangki, pipa, trolley, meja, kabinet, rak, hingga silent box, light box, jig, dan roll, semuanya bisa kami buat sesuai kebutuhan Anda. Material stainless steel atau mild steel? Keduanya bisa kami tangani dengan kualitas terbaik. Jangan ragu, percayakan proyek fabrikasi logam Anda pada kami!",
    image: "/Mechanical.png",
  },
  {
    title: "Electrical",
    description:
      "Dapatkan solusi lengkap untuk kebutuhan listrik dan otomatisasi Anda bersama kami! Kami menyediakan panel listrik berkualitas tinggi, batre litirum, sistem otomasi canggih yang dapat disesuaikan dengan kebutuhan Anda, power plant efisien untuk memenuhi kebutuhan energi Anda, serta kartu elektronik dan digital mutakhir yang siap mendukung inovasi Anda. Wujudkan proyek impian Anda dengan teknologi terbaik dari kami!",
    image: "/Electrical.png",
  },
  {
    title: "Special Purpose Machine",
    description:
      "Tingkatkan efisiensi dan presisi produksi Anda dengan Special Purpose Machine kami! Lengkap dengan conveyor, oven, pendingin, chiller, kontrol suhu air, cold storage, hingga mesin press, kami siap menyesuaikan solusi terbaik untuk kebutuhan industri Anda.",
    image: "/SpecialPurposeMachine.png",
  },
  {
    title: "Ducting",
    description:
      "Ducting dan plumbing bukan hanya tentang pipa dan saluran, tapi tentang menciptakan lingkungan yang nyaman, sehat, dan efisien. Kami hadir untuk memastikan udara segar selalu mengalir, air bersih selalu tersedia, dan sistem pembuangan berjalan lancar. Dengan pengalaman dan keahlian kami, hunian dan bisnis Anda akan merasakan perbedaannya.",
    image: "/Ducting.png",
  },
];
</script>
