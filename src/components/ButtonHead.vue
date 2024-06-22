<script setup lang="ts">
const prop = defineProps(["title"]);
</script>
<template>
  <button>{{ title }}</button>
</template>
s
<style scoped>
button {
  background: linear-gradient(black, gray);
  color: white;
  border-radius: 5px;

  &&:hover {
    background: linear-gradient(rgba(0, 0, 0, 0.85), rgba(255, 255, 255, 0.75));
    color: black;
  }
}
</style>
