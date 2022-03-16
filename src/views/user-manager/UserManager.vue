<script setup lang="ts">
  import QueryForm from '@/components/user-manager/QueryForm.vue'
  import UserListTable from '@/components/user-manager/UserListTable.vue'
  import UserDialog from '@/components/user-manager/UserDialog.vue'
  import { reactive, ref } from 'vue'
  import type { UserInfo, UserQueryForm } from '@/types/userinfo'
  import { DialogTypeEnum } from '@/types/common'

  const userTable = ref<{ getListData: () => void }>()

  const user = reactive<UserQueryForm>({
    state: 1
  })

  const dialogData = reactive<{ show: boolean; row?: UserInfo; type: DialogTypeEnum }>({
    show: false,
    type: DialogTypeEnum.CREATE
  })

  const handleQuery = () => {
    userTable.value?.getListData()
  }

  const handleOpenDialog = (row?: UserInfo) => {
    if (row) {
      dialogData.type = DialogTypeEnum.EDIT
    } else {
      dialogData.type = DialogTypeEnum.CREATE
    }
    dialogData.show = true
    dialogData.row = row
  }

  const handleSubmit = () => {
    handleQuery()
    dialogData.show = false
  }
</script>
<template>
  <div class="user-manage">
    <!-- 搜索模块 -->
    <query-form v-model="user" @query="handleQuery" />
    <!-- 用户列表模块 -->
    <user-list-table ref="userTable" :user="user" @open-dialog="handleOpenDialog" />
    <!-- 用户弹窗 -->
    <user-dialog
      v-model:dialog-data="dialogData"
      @close="dialogData.show = false"
      @submit="handleSubmit"
    />
  </div>
</template>

<style scoped lang="scss">
  //
</style>
