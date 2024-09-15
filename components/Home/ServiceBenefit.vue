<template>
  <div class="bg-[#FAD003] w-full h-full relative overflow-hidden py-32">
    <div class="grid max-md:grid-rows-2 grid-cols-2 w-[90%] mx-auto">
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
        <NuxtLink to="/about/visi?component=VisiComp">
          <Button class="w-fit group"
            >Read More About Us
            <IconCaretRight
              class="size-5 ml-0 group-hover:ml-2 duration-300 ease-in-out opacity-0 group-hover:opacity-100"
          /></Button>
        </NuxtLink>
      </div>
      <div
        class="flex items-center justify-center max-md:w-full col-span-1 max-md:row-span-1 max-md:col-span-2 max-md:row-start-1"
      >
        <img
          src="/question-mark.png"
          alt="question mark 3D "
          class="w-full max-w-sm flex items-center justify-center"
        />
      </div>
    </div>
  </div>
</template>
