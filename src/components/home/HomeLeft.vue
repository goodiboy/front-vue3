<script setup lang="ts">
  const tabList = ['置顶']
</script>
<template>
  <div class="home-left">
    <div class="pane">
      <tabs :is-click="false" :tab-list="tabList" />
      <posts v-for="item of 4" :key="item" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .home-left {
    flex-shrink: 0;
    width: 775px;
    margin-right: 10px;
    background: #fff;
  }

  .pane {
    background: #fff;
  }
</style>
