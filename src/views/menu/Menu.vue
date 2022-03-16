<script setup lang="ts">
  import { onMounted, reactive, ref } from 'vue'
  import { deleteMenu, getMenuList, operateMenu } from '@/api/menu'
  import MenuDialog from '@/components/menu/MenuDialog.vue'
  import QueryForm from '@/components/public/table-frame/Form.vue'
  import ListTable from '@/components/public/table-frame/Table.vue'
  import dayjs from 'dayjs'
  import { FormConfig, TableConfig } from '@/components/public/table-frame/types'
  import { DialogTypeEnum, MenuState, MenuType } from '@/types/menu'

  const queryFormData = reactive({
    menuState: MenuState.ENABLE
  })
  const menuList = ref<MenuType[]>([])

  const dialogData = reactive<{ show: boolean; type: DialogTypeEnum; row?: MenuType }>({
    show: false,
    type: DialogTypeEnum.CREATE
  })

  onMounted(() => {
    getMenus()
  })

  const getMenus = async () => {
    const res = await getMenuList(queryFormData)
    menuList.value = res.data
    console.log(res)
  }

  const handleSubmit = async (formData: MenuType) => {
    if (dialogData.type === DialogTypeEnum.CREATE) {
      delete formData._id
    }
    await operateMenu(formData)
    getMenus()
    dialogData.show = false
  }

  const handleAdd = (row?: MenuType) => {
    let parentId: null | string[] = null
    if (row) {
      parentId = []
      if (row.parentId) {
        parentId.push(...row.parentId)
      }
      if (row._id) {
        parentId.push(row._id)
      }
    }
    dialogData.row = { parentId } as MenuType
    dialogData.type = DialogTypeEnum.CREATE
    dialogData.show = true
  }
  const handleEdit = (row?: MenuType) => {
    dialogData.row = row
    dialogData.type = DialogTypeEnum.EDIT
    dialogData.show = true
  }
  const handleDel = async (row: MenuType) => {
    if (!row._id) return
    await deleteMenu(row._id)
    getMenus()
  }

  const handleQuery = () => {
    getMenus()
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
        { value: 1, label: '启用' },
        { value: 2, label: '禁用' }
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
        formatter(row: MenuType, column: number, value: number) {
          return (
            {
              1: '启用',
              2: '禁用'
            } as any
          )[value]
        }
      },
      {
        label: '创建时间',
        prop: 'created',
        formatter(row: MenuType, column: number, value: string): string {
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
