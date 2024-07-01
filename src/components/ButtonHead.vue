<script setup lang="ts">
import { defineProps } from "vue";

const prop = defineProps({
  title: String,
});
</script>
<!-- buttonHead.vue -->
<template>
  <button>{{ prop.title }}</button>
</template>

<style scoped>
button {
  background: linear-gradient(black, gray);
  color: white;
  border-radius: 5px;

  &:hover {
    background: linear-gradient(rgba(0, 0, 0, 0.85), rgba(255, 255, 255, 0.75));
    color: black;
  }
}
</style>
