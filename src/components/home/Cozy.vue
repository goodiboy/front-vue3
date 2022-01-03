<script setup lang="ts">
  import TabItem from '@/components/public/Tabs/TabItem.vue'
</script>
<template>
  <tabs :is-click="false">
    <tab-item label="温馨通道" />
  </tabs>
  <ul class="cozy-link ellipsis">
    <li v-for="item of 5" :key="item">
      <router-link to="" class="link-item ellipsis">
        温馨通道温馨通道温馨通道温馨通道温馨通道温馨通道温馨通道
      </router-link>
    </li>
  </ul>
</template>

<style scoped lang="scss">
  .cozy-link {
    box-sizing: border-box;
    width: 100%;
    padding: 10px 15px 10px 30px;

    > li {
      list-style-type: disc;
    }

    .link-item {
      display: block;
      line-height: 26px;
      color: #01aaed;
      text-decoration: none;
    }
  }
</style>
