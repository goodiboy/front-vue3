<script setup lang="ts"></script>
<template>
  <div class="home-left">
    <div class="left-tabs">
      <slot>
        <span class="tab-item">置顶</span>
      </slot>
    </div>
    <posts />
  </div>
</template>

<style scoped lang="scss">
  .home-left {
    width: 775px;
    padding: 0 15px;
    margin-right: 20px;
    background: #fff;
  }

  .left-tabs {
    line-height: 50px;

    .tab-item {
      padding: 0 8px;
    }
    border-bottom: 1px dotted #e9e9e9;
  }
</style>
