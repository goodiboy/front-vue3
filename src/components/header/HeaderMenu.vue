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
    <el-col :span="20">
      <Left />
    </el-col>
    <el-col :span="4">
      <Right />
    </el-col>
  </el-row>
</template>
<style scoped lang="scss">
  @import './header';
</style>
