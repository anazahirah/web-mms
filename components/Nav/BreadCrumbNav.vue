<template>
  <Breadcrumb class="hidden md:flex">
    <BreadcrumbList>
      <template v-for="(item, index) in splitRoute" :key="index">
        <BreadcrumbItem
          :class="{
            'text-secondary': variant === 'secondary',
            'text-primary': variant === 'primary',
          }"
        >
          <BreadcrumbLink as-child>
            {{ item }}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator
          v-if="index < splitRoute.length - 1"
          :class="{
            'stroke-primary': variant === 'primary',
            'stroke-secondary': variant === 'secondary',
          }"
        />
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: "primary" | "secondary";
  }>(),
  {
    variant: "primary",
  }
);
const route = useRoute();
const splitRoute = computed(() => {
  return useBreadCrumb(route.path);
});
</script>
