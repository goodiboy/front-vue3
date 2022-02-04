<script setup lang="ts">
  import QueryForm from '@/components/user-manager/QueryForm.vue'
  import UserListTable from '@/components/user-manager/UserListTable.vue'
  import UserDialog from '@/components/user-manager/UserDialog.vue'
  import { reactive, ref } from 'vue'
  import type { UserQueryForm } from '@/types/userinfo'

  const userTable = ref<{ getListData: () => void }>()

  const user = reactive<UserQueryForm>({
    state: 0
  })

  const handleQuery = (a: any) => {
    console.log(a)
    userTable.value?.getListData()
  }
</script>
<template>
  <div class="user-manage">
    <!-- 搜索模块 -->
    <query-form v-model="user" @query="handleQuery" />
    <!-- 用户列表模块 -->
    <user-list-table ref="userTable" :user="user" />
    <!-- 用户弹窗 -->
    <user-dialog />
  </div>
</template>

<style scoped lang="scss">
  //
</style>
