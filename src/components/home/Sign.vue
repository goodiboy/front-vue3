<script setup lang="ts">
  import TabItem from '@/components/public/Tabs/TabItem.vue'
  import { ref } from 'vue'
  const paneSignActive = ref('签到')
</script>
<template>
  <tabs v-model="paneSignActive" :is-click="true" color="#01aaed" active="#333">
    <tab-item label="签到" />
    <tab-item label="说明" />
    <tab-item label="活跃榜" />
    <template #right>
      <div class="sign">已连续签到<span>16</span>天</div>
    </template>
  </tabs>
</template>

<style scoped lang="scss">
  .sign {
    color: $dark-text-color;

    span {
      color: $height-light-color;
    }
  }
</style>
