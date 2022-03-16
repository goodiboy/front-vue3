<script setup lang="ts">
  import { Setting } from '@element-plus/icons'
  import { MenuType } from '@/types/menu'

  const props = defineProps<{ menuList: MenuType[] }>()
</script>
<template>
  <template v-for="item of props.menuList">
    <el-sub-menu v-if="item.children?.length" :key="item._id" :index="item._id">
      <template #title>
        <el-icon><setting /></el-icon>
        <span>{{ item.menuName }}</span>
      </template>
      <tree-menu :menu-list="item.children" />
    </el-sub-menu>
    <el-menu-item v-else :key="item._id" :index="item.path">
      {{ item.menuName }}
    </el-menu-item>
  </template>
</template>

<style scoped lang="scss">
  //
</style>
