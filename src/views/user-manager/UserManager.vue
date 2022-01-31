<script setup lang="ts">
  import QueryForm from '@/components/user-manager/QueryForm.vue'
  import UserListTable from '@/components/user-manager/UserListTable.vue'
  import UserDialog from '@/components/user-manager/UserDialog.vue'
</script>
<template>
  <div class="user-manage">
    <!-- 搜索模块 -->
    <query-form />
    <!-- 用户列表模块 -->
    <user-list-table />
    <!-- 用户弹窗 -->
    <user-dialog />
  </div>
</template>

<style scoped lang="scss">
  //
</style>
