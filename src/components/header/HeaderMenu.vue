<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import Right from './Right.vue'
  import Left from './Left.vue'
  import { computed } from 'vue'
  const route = useRoute()
  const disableHeader = computed(() => route.meta?.disableHeader)
</script>
<template>
  <el-row v-if="!disableHeader" :gutter="20" class="header">
    <el-col :span="18">
      <Left />
    </el-col>
    <el-col :span="6">
      <Right />
    </el-col>
  </el-row>
</template>
<style scoped lang="scss">
  .header {
    height: 60px;
    padding-left: 30px;
    background: $header-bg-color;

    .menu-icon {
      margin-top: -2px;
      margin-right: 5px;
    }
  }
</style>
