<template>
  <component :is="component" />
</template>

<script setup lang="ts">
const { query } = useRoute();

const component = computed(() => {
  return resolveComponent("Lazy" + query.component);
});
</script>

<style scoped></style>
