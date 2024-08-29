<template>
  <div
    id="product"
    class="w-[90%] mx-auto rounded-md flex bg-[#2b4e87]/30 border border-[#FAD003]"
  >
    <div class="w-1/2 h-full overflow-hidden">
      <img
        :src="products[indexProducts].image"
        :alt="products[indexProducts].title"
        class="object-cover w-full h-full grayscale"
      />
    </div>

    <div class="w-1/2 my-auto pl-4 pr-14 text-secondary flex flex-col gap-4">
      <h3 class="text-5xl font-bold">
        {{ products[indexProducts].title }}
      </h3>
      <p class="text-base text-neutral-400 lg:h-32">
        {{ products[indexProducts].description }}
      </p>
      <div class="flex gap items-center justify-end gap-4">
        <Button
          @click="indexProducts--"
          :disabled="indexProducts === 0"
          variant="secondary"
          size="icon"
          ><IconCaretLeft />
        </Button>
        <Button
          @click="indexProducts++"
          :disabled="indexProducts === products.length - 1"
          variant="secondary"
          size="icon"
          ><IconCaretRight />
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface DetailProduct {
  title: string;
  description: string;
  image: string;
}

type Product = DetailProduct[];

const indexProducts = ref(0);
defineProps<{ products: Product }>();
</script>
