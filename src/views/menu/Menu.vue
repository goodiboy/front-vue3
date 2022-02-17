<script setup lang="ts">
  import { onMounted, reactive, ref } from 'vue'
  import { getMenuList } from '@/api/menu'
  import QueryForm from '@/components/public/table-frame/Form.vue'
  import ListTable from '@/components/public/table-frame/Table.vue'
  import { UserInfo } from '@/types/userinfo'
  import dayjs from 'dayjs'
  import { FormConfig, TableConfig } from '@/types/table-frame'

  const queryFormData = reactive({
    menuState: 1
  })
  const menuList = ref([])

  const getMenus = async () => {
    const res = await getMenuList()
    menuList.value = res.data
    console.log(res)
  }

  onMounted(() => {
    getMenus()
  })

  const handleAdd = (a: any, b?: any) => {
    console.log('handleAdd')
    // todo
  }
  const handleEdit = (a: any) => {
    console.log('handleEdit')
    // todo
  }
  const handleDel = (a: any) => {
    console.log('handleDel')
    // todo
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
      },
      {
        type: 'danger',
        label: '批量删除',
        handle: handleDel
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
        formatter(row: UserInfo, column: number, value: string): string {
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

    <!--<el-dialog v-model="showModal" title="用户新增">-->
    <!--  <el-form ref="dialogForm" :model="menuForm" label-width="100px" :rules="rules">-->
    <!--    <el-form-item label="父级菜单" prop="parentId">-->
    <!--      <el-cascader-->
    <!--        v-model="menuForm.parentId"-->
    <!--        :options="menuList"-->
    <!--        :props="{ checkStrictly: true, value: '_id', label: 'menuName' }"-->
    <!--        clearable-->
    <!--      />-->
    <!--      <span>不选，则直接创建一级菜单</span>-->
    <!--    </el-form-item>-->
    <!--    <el-form-item label="菜单类型" prop="menuType">-->
    <!--      <el-radio-group v-model="menuForm.menuType">-->
    <!--        <el-radio :label="1">菜单</el-radio>-->
    <!--        <el-radio :label="2">按钮</el-radio>-->
    <!--      </el-radio-group>-->
    <!--    </el-form-item>-->
    <!--    <el-form-item label="菜单名称" prop="menuName">-->
    <!--      <el-input v-model="menuForm.menuName" placeholder="请输入菜单名称" />-->
    <!--    </el-form-item>-->
    <!--    <el-form-item v-show="menuForm.menuType == 1" label="菜单图标" prop="icon">-->
    <!--      <el-input v-model="menuForm.icon" placeholder="请输入岗位" />-->
    <!--    </el-form-item>-->
    <!--    <el-form-item v-show="menuForm.menuType == 1" label="路由地址" prop="path">-->
    <!--      <el-input v-model="menuForm.path" placeholder="请输入路由地址" />-->
    <!--    </el-form-item>-->
    <!--    <el-form-item v-show="menuForm.menuType == 2" label="权限标识" prop="menuCode">-->
    <!--      <el-input v-model="menuForm.menuCode" placeholder="请输入权限标识" />-->
    <!--    </el-form-item>-->
    <!--    <el-form-item v-show="menuForm.menuType == 1" label="组件路径" prop="component">-->
    <!--      <el-input v-model="menuForm.component" placeholder="请输入组件路径" />-->
    <!--    </el-form-item>-->
    <!--    <el-form-item v-show="menuForm.menuType == 1" label="菜单状态" prop="menuState">-->
    <!--      <el-radio-group v-model="menuForm.menuState">-->
    <!--        <el-radio :label="1">正常</el-radio>-->
    <!--        <el-radio :label="2">停用</el-radio>-->
    <!--      </el-radio-group>-->
    <!--    </el-form-item>-->
    <!--  </el-form>-->
    <!--  <template #footer>-->
    <!--    <span class="dialog-footer">-->
    <!--      <el-button @click="handleClose">取 消</el-button>-->
    <!--      <el-button type="primary" @click="handleSubmit">确 定</el-button>-->
    <!--    </span>-->
    <!--  </template>-->
    <!--</el-dialog>-->
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
