<script setup lang="ts">
  import HomeLeft from '@/components/home/HomeLeft.vue'

  console.log('home')
</script>
<template>
  <div class="home">
    <home-left />
    <div class="right">1</div>
  </div>
</template>

<style scoped lang="scss">
  .home {
    display: flex;
    justify-content: space-between;
  }

  .right {
    flex: 1;
    background: #fff;
  }
</style>
