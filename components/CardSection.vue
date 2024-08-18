<template>
  <div class="flex w-full flex-col gap-4 h-64">
    <component :is="icon" class="size-6" />
    <h4 class="text-2xl font-medium text-primary leading-snug tracking-wide">
      {{ title }}
    </h4>
    <p class="text-sm text-muted-foreground leading-snug tracking-wide">
      {{ description }}
    </p>
    <div class="flex flex-col w-full mt-auto gap-2">
      <div class="flex justify-between">
        <span class="text-slate-300"> {{ number }}</span>
        <span class="text-slate-300">{{ slogan }}</span>
      </div>
      <div class="w-full h-[1px] bg-slate-300"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FunctionalComponent } from "vue";

defineProps<{
  icon: FunctionalComponent;
  title: string;
  description: string;
  slogan: string;
  number: string;
}>();
</script>
