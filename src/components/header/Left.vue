<script setup lang="ts">
  import { ref } from 'vue'
  import { ChatDotRound, Expand, Help } from '@element-plus/icons'
  import { headerStyle } from '@/assets/config-style/variable'

  const activeIndex = ref('1')
</script>
<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    :background-color="headerStyle.bgColor"
    :text-color="headerStyle.leftTextColor"
    :active-text-color="headerStyle.leftActiveTextColor"
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
  .menu-icon {
    margin-top: -2px;
    margin-right: 5px;
  }
</style>
