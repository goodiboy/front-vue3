<script setup lang="ts">
  // 弹窗显示对象
  import { nextTick, reactive, ref, toRefs, watch } from 'vue'
  import { ElForm } from 'element-plus'

  // 定义表单验证规则
  const rules = reactive({
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
  })

  // 如果row存在即时编辑状态，不存在就是新增状态
  const props = defineProps<{ dialogData: { show: boolean; row?: any }; menuList: any[] }>()
  const emit = defineEmits<{
    (e: 'close'): void
    (e: 'submit', formData: any): void
  }>()

  const { dialogData, menuList } = toRefs(props)

  const dialogForm = ref<InstanceType<typeof ElForm>>()
  // 新增用户对象
  const menuForm = reactive({
    parentId: null,
    menuType: 1,
    menuState: 1
  })

  watch(dialogData.value, () => {
    if (dialogData.value.show && dialogData.value.row) {
      nextTick(() => {
        // 需要在下一帧再初始化数据，要不然elementUI的reset方法回重置到赋值后的状态（原因是渲染太快了）
        Object.assign(menuForm, dialogData.value.row)
      })
    }
  })

  // 用户弹窗关闭
  const handleClose = () => {
    emit('close')
  }
  // 用户提交
  const handleSubmit = () => {
    dialogForm.value?.validate(async (valid) => {
      if (valid) {
        emit('submit', menuForm)
      } else {
        ElMessage.error('表单填写错误')
      }
    })
  }
</script>
<template>
  <!-- 增加用户弹窗 -->
  <el-dialog v-model="dialogData.show" title="用户新增" @close="dialogForm?.resetFields()">
    <el-form ref="dialogForm" :model="menuForm" label-width="100px" :rules="rules">
      <el-form-item label="父级菜单" prop="parentId">
        <el-cascader
          v-model="menuForm.parentId"
          :options="menuList"
          :props="{ checkStrictly: true, value: '_id', label: 'menuName' }"
          clearable
        />
        <span style="margin-left: 10px; color: #f56c6c">不选，则直接创建一级菜单</span>
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
      <el-form-item v-show="menuForm.menuType === 1" label="菜单图标" prop="icon">
        <el-input v-model="menuForm.icon" placeholder="请输入岗位" />
      </el-form-item>
      <el-form-item v-show="menuForm.menuType === 1" label="路由地址" prop="path">
        <el-input v-model="menuForm.path" placeholder="请输入路由地址" />
      </el-form-item>
      <el-form-item v-show="menuForm.menuType === 2" label="权限标识" prop="menuCode">
        <el-input v-model="menuForm.menuCode" placeholder="请输入权限标识" />
      </el-form-item>
      <el-form-item v-show="menuForm.menuType === 1" label="组件路径" prop="component">
        <el-input v-model="menuForm.component" placeholder="请输入组件路径" />
      </el-form-item>
      <el-form-item v-show="menuForm.menuType === 1" label="菜单状态" prop="menuState">
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
</template>
