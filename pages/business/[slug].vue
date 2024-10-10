<template>
  <div class="flex flex-col gap-10 w-3/4 mx-auto items-center justify-center">
    <div class="w-full sm:w-auto">
      <Carousel
        class="relative w-full max-w-md"
        @init-api="(val: any) => (emblaMainApi = val)"
      >
        <CarouselContent>
          <CarouselItem v-for="image in images" :key="image">
            <div class="p-1">
              <Card>
                <CardContent
                  class="flex aspect-square items-center justify-center p-6"
                >
                  <img :src="image" class="w-full h-full object-cover" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Carousel
        class="relative w-full max-w-md"
        @init-api="(val: any) => (emblaThumbnailApi = val)"
      >
        <CarouselContent class="flex gap-1 ml-0">
          <CarouselItem
            v-for="(image, index) in images"
            :key="index"
            class="pl-0 basis-1/4 cursor-pointer"
            @click="onThumbClick(index)"
          >
            <div
              class="p-1"
              :class="index === selectedIndex ? '' : 'opacity-50'"
            >
              <Card class="overflow-hidden">
                <img :src="image" class="w-full h-full object-cover" />
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>

    <article class="prose lg:prose-xl">
      <ContentRenderer :value="data!">
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentRenderer>
    </article>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});
import { watchOnce } from "@vueuse/core";
import { type CarouselApi } from "@/components/ui/carousel";
import { dataCarousel } from "@/constant/data";
const route = useRoute();
const flagData = route.path.split("/")[2];

const emblaMainApi = ref<CarouselApi>();
const emblaThumbnailApi = ref<CarouselApi>();
const selectedIndex = ref(0);

function onSelect() {
  if (!emblaMainApi.value || !emblaThumbnailApi.value) return;
  selectedIndex.value = emblaMainApi.value.selectedScrollSnap();
  emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap());
}

function onThumbClick(index: number) {
  if (!emblaMainApi.value || !emblaThumbnailApi.value) return;
  emblaMainApi.value.scrollTo(index);
}

watchOnce(emblaMainApi, (emblaMainApi) => {
  if (!emblaMainApi) return;

  onSelect();
  emblaMainApi.on("select", onSelect);
  emblaMainApi.on("reInit", onSelect);
});

const images = dataCarousel.find((item) => item.flag === flagData)?.images;

const { data } = await useAsyncData("page-data", () =>
  queryContent("business").where({ flag: flagData }).findOne()
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
  list-style-position: inside;
}

article ol li {
  text-decoration: none;
}
article ol ol {
  list-style-type: lower-alpha;
}
</style>
