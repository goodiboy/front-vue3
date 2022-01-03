<script setup lang="ts">
  import Cozy from '@/components/home/Cozy.vue'
  import Sign from '@/components/home/Sign.vue'
</script>
<template>
  <div class="home-right">
    <div class="pane">
      <cozy />
    </div>
    <div class="pane">
      <sign />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .home-right {
    width: 415px;
  }

  .pane {
    background: #fff;

    & + .pane {
      margin-top: 10px;
    }
  }
</style>
