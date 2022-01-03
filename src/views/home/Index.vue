<script setup lang="ts">
  import HomeMenu from '@/components/home/HomeMenu.vue'

  console.log('index')
</script>
<template>
  <div class="root-home">
    <home-menu />
    <router-view class="home-main" />
  </div>
</template>
<style scoped lang="scss">
  .home-main {
    width: $main-width;
    margin: 15px auto 0;
    overflow: hidden;
  }
</style>
