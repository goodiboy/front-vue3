<script setup lang="ts">
  import { ref } from 'vue'
  import { ChatDotRound, Expand, Help } from '@element-plus/icons'

  const activeIndex = ref('1')
</script>
<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="1">
      <div class="flex flex-align-center">
        <el-icon :size="20" class="menu-icon">
          <ChatDotRound />
        </el-icon>
        交流
      </div>
    </el-menu-item>
    <el-menu-item index="2">
      <div class="flex flex-align-center">
        <el-icon :size="20" class="menu-icon">
          <Expand />
        </el-icon>
        案例
      </div>
    </el-menu-item>
    <el-menu-item index="3">
      <div class="flex flex-align-center">
        <el-icon :size="20" class="menu-icon">
          <Help />
        </el-icon>
        框架
      </div>
    </el-menu-item>
  </el-menu>
</template>
<style scoped lang="scss">
  @import './header';
</style>
