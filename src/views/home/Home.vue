<script setup lang="ts">
  import HomeLeft from '@/components/home/HomeLeft.vue'
  import HomeRight from '@/components/home/HomeRight.vue'

  console.log('home')
</script>
<template>
  <div class="home">
    <home-left />
    <home-right />
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
