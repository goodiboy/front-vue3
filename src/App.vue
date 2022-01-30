<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import { ElConfigProvider } from 'element-plus'
  import run from './utils/run'
  run()
</script>
<template>
  <el-config-provider size="small">
    <router-view></router-view>
  </el-config-provider>
</template>
