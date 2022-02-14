<script setup lang="ts">
  import { onMounted, reactive, ref } from 'vue'
  import { getMenuList } from '@/api/menu'

  const queryForm = reactive({
    menuState: 1
  })
  const menuList = ref([])
  const columns = [
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
      prop: 'createTime'
    }
  ]
  const showModal = ref(false)
  const menuForm = reactive({
    parentId: [null],
    menuType: 1,
    menuState: 1
  })
  // const action = ref('')
  const rules = {
    menuName: [
      {
        required: true,
        message: '请输入菜单名称',
        trigger: 'blur'
      },
      {
        min: 2,
        max: 10,
        message: '长度在2-8个字符',
        trigger: 'blur'
      }
    ]
  }

  const getMenus = async () => {
    const res = await getMenuList()
    menuList.value = res.data
    console.log(res)
  }

  onMounted(() => {
    getMenus()
  })

  const handleReset = (a: any) => {
    // todo
  }
  const handleAdd = (a: any, b?: any) => {
    // todo
  }
  const handleEdit = (a: any) => {
    // todo
  }
  const handleDel = (a: any) => {
    // todo
  }
  const handleClose = (a: any) => {
    // todo
  }
  const handleSubmit = (a: any) => {
    // todo
  }
</script>
<template>
  <div class="user-manage">
    <div class="query-form">
      <el-form ref="form" :inline="true" :model="queryForm">
        <el-form-item label="菜单名称" prop="menuName">
          <el-input v-model="queryForm.menuName" placeholder="请输入菜单名称" />
        </el-form-item>
        <el-form-item label="菜单状态" prop="menuState">
          <el-select v-model="queryForm.menuState">
            <el-option :value="1" label="正常"></el-option>
            <el-option :value="2" label="停用"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getMenus">查询</el-button>
          <el-button @click="handleReset('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="base-table">
      <div class="action">
        <el-button type="primary" @click="handleAdd(1)">新增</el-button>
      </div>
      <el-table :data="menuList" row-key="_id" :tree-props="{ children: 'children' }">
        <el-table-column v-for="item in columns" :key="item.prop" v-bind="item"> </el-table-column>
        <el-table-column label="操作" width="220">
          <template #default="scope">
            <el-button type="primary" size="small" @click="handleAdd(2, scope.row)">新增</el-button>
            <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button type="danger" size="small" @click="handleDel(scope.row._id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog v-model="showModal" title="用户新增">
      <el-form ref="dialogForm" :model="menuForm" label-width="100px" :rules="rules">
        <el-form-item label="父级菜单" prop="parentId">
          <el-cascader
            v-model="menuForm.parentId"
            :options="menuList"
            :props="{ checkStrictly: true, value: '_id', label: 'menuName' }"
            clearable
          />
          <span>不选，则直接创建一级菜单</span>
        </el-form-item>
        <el-form-item label="菜单类型" prop="menuType">
          <el-radio-group v-model="menuForm.menuType">
            <el-radio :label="1">菜单</el-radio>
            <el-radio :label="2">按钮</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="菜单名称" prop="menuName">
          <el-input v-model="menuForm.menuName" placeholder="请输入菜单名称" />
        </el-form-item>
        <el-form-item v-show="menuForm.menuType == 1" label="菜单图标" prop="icon">
          <el-input v-model="menuForm.icon" placeholder="请输入岗位" />
        </el-form-item>
        <el-form-item v-show="menuForm.menuType == 1" label="路由地址" prop="path">
          <el-input v-model="menuForm.path" placeholder="请输入路由地址" />
        </el-form-item>
        <el-form-item v-show="menuForm.menuType == 2" label="权限标识" prop="menuCode">
          <el-input v-model="menuForm.menuCode" placeholder="请输入权限标识" />
        </el-form-item>
        <el-form-item v-show="menuForm.menuType == 1" label="组件路径" prop="component">
          <el-input v-model="menuForm.component" placeholder="请输入组件路径" />
        </el-form-item>
        <el-form-item v-show="menuForm.menuType == 1" label="菜单状态" prop="menuState">
          <el-radio-group v-model="menuForm.menuState">
            <el-radio :label="1">正常</el-radio>
            <el-radio :label="2">停用</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClose">取 消</el-button>
          <el-button type="primary" @click="handleSubmit">确 定</el-button>
        </span>
      </template>
    </el-dialog>
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
