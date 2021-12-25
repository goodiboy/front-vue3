<script setup lang="ts">
  console.log('index')
</script>
<template>
  <div class="root-home">
    <hom-menu />
    <router-view class="home-main" />
  </div>
</template>
<style scoped lang="scss">
  .home-main {
    width: $main-width;
    margin: 15px auto 0;
  }
</style>
