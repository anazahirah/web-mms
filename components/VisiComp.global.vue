<template>
  <article class="prose lg:prose-xl">
    <ContentRenderer :value="data!">
      <template #empty>
        <p>No content found.</p>
      </template>
    </ContentRenderer>
  </article>
</template>

<script setup lang="ts">
const { data } = await useAsyncData("page-data", () =>
  queryContent("about").where({ title: "Visi" }).findOne()
);
</script>

<style>
article h1 {
  @apply text-neutral-600 text-5xl font-bold pb-4 capitalize;
}

article h2 {
  @apply text-[#4A4A4A] text-3xl font-semibold pb-4 tracking-wide capitalize;
}

article pre {
  @apply text-white p-10  bg-card rounded-md  my-10 overflow-auto;
}

article p {
  @apply text-[#4A4A4A]  pt-2 pb-4 font-normal leading-relaxed text-justify;
}

article blockquote {
  @apply text-white text-xl font-bold border-t-[1px] border-b-[1px] text-center  my-4;
}

article ol {
  @apply text-[#4A4A4A] list-decimal space-y-4 py-6;
}

article ol li {
  @apply underline underline-offset-1;
}
</style>
