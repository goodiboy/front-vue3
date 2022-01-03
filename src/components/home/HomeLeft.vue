<script setup lang="ts"></script>
<template>
  <div class="home-left">
    <div class="pane">
      <tabs :is-click="false">
        <tab-item label="置顶" />
      </tabs>
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
