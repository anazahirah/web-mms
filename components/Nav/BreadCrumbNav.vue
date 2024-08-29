<template>
  <Breadcrumb class="hidden md:flex">
    <BreadcrumbList>
      <template v-for="(item, index) in splitRoute" :key="index">
        <BreadcrumbItem class="text-white">
          <BreadcrumbLink as-child>
            {{ item }}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator
          v-if="index < splitRoute.length - 1"
          class="stroke-white"
        />
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>

<script setup lang="ts">
const route = useRoute();
const splitRoute = computed(() => {
  return useBreadCrumb(route.path);
});
</script>
