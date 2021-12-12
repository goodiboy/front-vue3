<script setup lang="ts">
  const hidden = false
</script>
<template>
  <div class="right">
    <el-button v-if="hidden" type="text" style="color: #fff"> 登录 / 注册 </el-button>
    <el-popover
      v-else
      placement="bottom"
      title="Title"
      :width="200"
      trigger="click"
      content="this is content, this is content, this is content"
    >
      <template #reference>
        <el-button type="text">clear、宙</el-button>
      </template>
    </el-popover>
  </div>
</template>
<style scoped lang="scss">
  @import './header';
</style>
