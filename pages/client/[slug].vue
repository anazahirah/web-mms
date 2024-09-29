<template>
  <div class="flex w-full flex-col gap-8 items-center">
    <div
      class="pt-8 max-md:px-8 w-full max-w-xl mx-auto flex items-center justify-between"
    >
      <NuxtLink
        to="/"
        class="relative inline-block cursor-pointer before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0 before:w-0 before:bg-[#FAD004] hover:before:h-[1px] hover:before:w-full before:duration-300 before:ease-in-out"
      >
        Home
      </NuxtLink>

      <NuxtLink
        to="/about"
        class="relative inline-block cursor-pointer before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0 before:w-0 before:bg-[#FAD004] hover:before:h-[1px] hover:before:w-full before:duration-300 before:ease-in-out"
      >
        About Us
      </NuxtLink>
    </div>
    <div
      class="w-full grid grid-cols-2 items-start justify-center max-w-screen-xl mx-auto max-md:py-10 py-24 max-md:px-8 px-24"
    >
      <div class="flex flex-col gap-6 max-md:col-span-2 col-span-1">
        <NavBreadCrumbNav class="text-primary" variant="primary" />
        <div class="p-8 border border-zinc-100 max-md:w-full w-3/4 rounded-xl">
          <img :src="data?.['image-url']" alt="" />
        </div>
      </div>
      <div
        class="flex flex-col item-start justify-start gap-8 max-md:col-span-2 col-span-1"
      >
        <div class="flex flex-col gap-2 max-md:text-center">
          <h4 class="font-bold max-md:text-base text-2xl">Jenis Layanan</h4>
          <span>{{ data?.layanan }}</span>
        </div>
        <Separator />
        <div class="flex flex-col gap-2 max-md:text-center">
          <h4 class="font-bold max-md:text-base text-2xl">Tahun</h4>
          <span>{{ data?.tahun }}</span>
        </div>
        <Separator />
        <article>
          <ContentRenderer :value="data!">
            <template #empty>
              <p>No content found.</p>
            </template>
          </ContentRenderer>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "blog",
});
const route = useRoute();
console.log(route.path);
const { data } = await useAsyncData("page-data", () =>
  queryContent("client")
    .where({ flag: route.path.split("/")[2] })
    .findOne()
);
</script>

<style>
article h1 {
  @apply text-neutral-600 text-5xl font-bold pb-4 capitalize;
}

article h2 {
  @apply text-white text-3xl font-semibold pb-4 tracking-wide capitalize;
}

article pre {
  @apply text-white p-10  bg-card rounded-md  my-10 overflow-auto;
}

article p {
  @apply text-[#989899]  pt-2 pb-16 font-normal leading-relaxed;
}

article blockquote {
  @apply text-white text-xl font-bold border-t-[1px] border-b-[1px] text-center  my-4;
}

article ol {
  @apply text-white list-decimal space-y-4 py-6;
}

article ol li {
  @apply underline underline-offset-1;
}
</style>
