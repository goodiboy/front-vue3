<script setup lang="ts">
  const tabList = ['置顶']
</script>
<template>
  <div class="home-left">
    <tabs :is-click="false" :tab-list="tabList" />
    <posts v-for="item of 4" :key="item" />
  </div>
</template>

<style scoped lang="scss">
  .home-left {
    width: 775px;
    margin-right: 20px;
    background: #fff;
  }
</style>
