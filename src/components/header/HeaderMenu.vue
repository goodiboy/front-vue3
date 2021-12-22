<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import Right from './Right.vue'
  import Left from './Left.vue'
  import { computed } from 'vue'
  import { headerStyle } from '@/assets/theme'
  const route = useRoute()
  const disableHeader = computed(() => route.meta?.disableHeader)
</script>
<template>
  <div v-if="!disableHeader" class="header">
    <Left />
    <Right />
  </div>
</template>
<style scoped lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    height: 60px;
    padding-right: 30px;
    padding-left: 10px;
    background: v-bind('headerStyle.bgColor');

    .menu-icon {
      margin-top: -2px;
      margin-right: 5px;
    }
  }
</style>
