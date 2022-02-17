<script setup lang="ts">
  import { onMounted, reactive, ref } from 'vue'
  import { getMenuList } from '@/api/menu'
  import MenuDialog from '@/components/menu/MenuDialog.vue'
  import QueryForm from '@/components/public/table-frame/Form.vue'
  import ListTable from '@/components/public/table-frame/Table.vue'
  import dayjs from 'dayjs'
  import { FormConfig, TableConfig } from '@/types/table-frame'

  const queryFormData = reactive({
    menuState: 1
  })
  const menuList = ref([])

  const dialogData = reactive<{ show: boolean; row?: any }>({
    show: false
  })

  const getMenus = async () => {
    const res = await getMenuList()
    menuList.value = res.data
    console.log(res)
  }

  onMounted(() => {
    getMenus()
  })

  const handleSubmit = () => {
    handleQuery()
    dialogData.show = false
  }

  const handleAdd = (a?: any) => {
    dialogData.row = { parentId: a.parentId }
    dialogData.show = true
    console.log('handleAdd')
    // todo
  }
  const handleEdit = (a?: any) => {
    dialogData.row = a
    dialogData.show = true
    console.log('handleEdit')
    // todo
  }
  const handleDel = (row: any) => {
    console.log(row)
  }

  const handleQuery = () => {
    // todo
  }

  // 查询表单配置
  const formConfig: FormConfig[] = [
    {
      type: 'input',
      label: '菜单名称',
      prop: 'menuName'
    },
    {
      type: 'select',
      label: '菜单状态',
      prop: 'menuState',
      option: [
        { value: 1, label: '正常' },
        { value: 2, label: '停用' }
      ]
    }
  ]

  // 表格配置
  const tableConfig: TableConfig = {
    tree: {
      props: { children: 'children' },
      key: '_id'
    },
    action: [
      {
        type: 'primary',
        label: '新增',
        handle: handleAdd
      }
    ],
    columns: [
      {
        label: '菜单名称',
        prop: 'menuName',
        width: 150
      },
      {
        label: '图标',
        prop: 'icon'
      },
      {
        label: '菜单类型',
        prop: 'menuType',
        formatter(row: any, column: any, value: any) {
          return (
            {
              1: '菜单',
              2: '按钮'
            } as any
          )[value]
        }
      },
      {
        label: '权限标识',
        prop: 'menuCode'
      },
      {
        label: '路由地址',
        prop: 'path'
      },
      {
        label: '组件路径',
        prop: 'component'
      },
      {
        label: '菜单状态',
        prop: 'menuState',
        width: 90,
        formatter(row: any, column: any, value: any) {
          return (
            {
              1: '正常',
              2: '停用'
            } as any
          )[value]
        }
      },
      {
        label: '创建时间',
        prop: 'createTime',
        formatter(row: any, column: number, value: string): string {
          return dayjs(value).format('YYYY-MM-DD HH:mm:ss')
        }
      },
      {
        fixed: 'right',
        label: '操作',
        width: '220',
        template: [
          {
            type: 'button',
            style: 'primary',
            label: '新增',
            handle: handleAdd
          },
          {
            type: 'button',
            label: '编辑',
            handle: handleEdit
          },
          {
            type: 'button',
            style: 'danger',
            label: '删除',
            handle: handleDel
          }
        ]
      }
    ]
  }
</script>
<template>
  <div class="user-manage">
    <!-- 搜索模块 -->
    <query-form v-model="queryFormData" :form-config="formConfig" @query="handleQuery" />
    <!-- 列表模块 -->
    <list-table ref="userTable" :data-list="menuList" :table-config="tableConfig" />
    <menu-dialog
      v-model:dialog-data="dialogData"
      :menu-list="menuList"
      @close="dialogData.show = false"
      @submit="handleSubmit"
    />
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

  .query-form {
    padding: 18px 18px 0;
    background-color: #fff;
    border-radius: 5px;
  }
</style>
