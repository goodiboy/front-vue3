<script setup lang="ts">
  import { onMounted, reactive, ref } from 'vue'
  import { getUserList } from '@/api/users'
  import { UserListParams, UserState } from '@/types/userInfo'
  import type { UserInfo, UserQueryForm } from '@/types/userInfo'
  import type { PageType } from '@/types/common'
  import dayjs from 'dayjs'
  import { formatterParams } from '@/utils/utils'

  // 定义动态表格-格式
  const columns = [
    {
      type: 'selection',
      prop: 'selection',
      width: 55
    },
    {
      label: '用户ID',
      prop: '_id'
    },
    {
      label: '用户名',
      prop: 'username'
    },
    {
      label: '昵称',
      prop: 'nickname'
    },
    {
      label: '用户角色',
      prop: 'admin',
      formatter(row: UserInfo, column: number, value: boolean) {
        return value ? '管理员' : '普通用户'
      }
    },
    {
      label: '用户状态',
      prop: 'state',
      formatter(row: UserInfo, column: number, value: UserState) {
        return {
          1: '在职',
          2: '离职',
          3: '试用期'
        }[value]
      }
    },
    {
      label: '注册时间',
      prop: 'createTime',
      formatter(row: UserInfo, column: number, value: string): string {
        return dayjs(value).format('YYYY-MM-DD HH:mm:ss')
      }
    },
    {
      label: '最后登录时间',
      prop: 'lastLoginTime',
      formatter(row: UserInfo, column: number, value: string): string {
        return dayjs(value).format('YYYY-MM-DD HH:mm:ss')
      }
    }
  ]

  const userList = ref<UserInfo[]>()
  //初始化用户分页对象
  const pager = reactive<PageType>({
    pageNum: 1,
    pageSize: 10,
    total: 0
  })

  const props = defineProps<{ user: UserQueryForm }>()
  const getListData = async () => {
    const params = formatterParams<UserListParams>(
      {
        ...props.user,
        ...pager
      },
      ['total']
    )
    const res = await getUserList(params)
    userList.value = res.data.list
    pager.total = res.data.page.total
  }

  const emit = defineEmits<{
    (e: 'openDialog', row?: UserInfo): void
  }>()

  onMounted(() => {
    getListData()
  })

  const handleCreate = () => {
    emit('openDialog')
  }
  const handlePatchDel = () => {
    //todo
  }
  const handleSelectionChange = () => {
    //todo
  }
  const handleEdit = (row: UserInfo) => {
    emit('openDialog', row)
  }
  const handleDel = (a: any) => {
    //todo
  }
  const handleCurrentChange = (page: number) => {
    pager.pageNum = page
    getListData()
  }

  defineExpose({
    getListData
  })
</script>
<template>
  <div class="base-table">
    <div class="action">
      <el-button type="primary" @click="handleCreate">新增</el-button>
      <el-button type="danger" @click="handlePatchDel">批量删除</el-button>
    </div>
    <el-table :data="userList" @selection-change="handleSelectionChange">
      <el-table-column v-for="item in columns" :key="item.prop" v-bind="item"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDel(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页功能 -->
    <el-pagination
      class="pagination"
      background
      layout="prev, pager, next"
      :total="pager.total"
      :page-size="pager.pageSize"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>
<style scoped lang="scss">
  .base-table {
    margin-top: 20px;
    margin-bottom: 20px;
    background: #fff;
    border-radius: 5px;

    .action {
      padding: 20px;
      background: #fff;
      border-bottom: 1px solid #ece8e8;
      border-radius: 5px 5px 0 0;
    }

    .pagination {
      justify-content: flex-end;
      padding: 10px;
    }
  }
</style>
