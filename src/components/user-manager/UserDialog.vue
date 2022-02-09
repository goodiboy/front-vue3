<script setup lang="ts">
  // 弹窗显示对象
  import { nextTick, reactive, ref, toRefs, watchEffect } from 'vue'
  import { UserInfo } from '@/types/userinfo'
  import { ElForm } from 'element-plus'

  // 定义表单验证规则
  const rules = reactive({
    nickname: [
      {
        required: true,
        message: '请输入用户昵称',
        trigger: 'blur'
      }
    ],
    username: [
      {
        required: true,
        message: '请输入用户的邮箱',
        trigger: 'blur'
      }
    ],
    mobile: [
      {
        pattern: /1\d{10}/,
        message: '请输入正确的手机号格式',
        trigger: 'blur'
      }
    ],
    deptId: [
      {
        required: true,
        message: '请选择所属部门',
        trigger: 'blur'
      }
    ]
  })

  // 如果row存在即时编辑状态，不存在就是新增状态
  const props = defineProps<{ dialogData: { show: boolean; row?: UserInfo } }>()
  const emit = defineEmits<{
    (e: 'close'): void
    (e: 'submit'): void
  }>()

  const { dialogData } = toRefs(props)

  const dialogForm = ref<InstanceType<typeof ElForm>>()
  // 新增用户对象
  const userForm = reactive<UserInfo>({
    state: 3
  } as UserInfo)

  watchEffect(() => {
    if (props.dialogData.show && props.dialogData.row) {
      nextTick(() => {
        // 需要在下一帧再初始化数据，要不然elementUI的reset方法回重置到赋值后的状态（原因是渲染太快了）
        Object.assign(userForm, props.dialogData.row)
      })
    }
  })

  //  所有角色列表
  const roleList = ref([])
  // 部门列表
  const deptList = ref([])
  // 用户弹窗关闭
  const handleClose = () => {
    emit('close')
  }
  // 用户提交
  const handleSubmit = () => {
    // todo 提交数据
    emit('submit')
  }
</script>
<template>
  <!-- 增加用户弹窗 -->
  <el-dialog v-model="dialogData.show" title="新增用户" @close="dialogForm?.resetFields()">
    <el-form ref="dialogForm" :model="userForm" label-width="100px" :rules="rules">
      <el-form-item label="用户名" prop="userEmail">
        <el-input
          v-model="userForm.username"
          placeholder="请输入用户邮箱"
          :disabled="!!dialogData.row"
        >
          <!-- 插槽 -->
          <template #append> qq.com</template>
        </el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="userName">
        <el-input
          v-model="userForm.nickname"
          placeholder="请输入用户名称"
          :disabled="!!dialogData.row"
        />
      </el-form-item>
      <el-form-item label="手机号" prop="mobile">
        <el-input v-model="userForm.mobile" placeholder="请输入手机号" />
      </el-form-item>
      <el-form-item label="岗位" prop="job">
        <el-input v-model="userForm.job" placeholder="请输入岗位" />
      </el-form-item>
      <el-form-item label="状态" prop="state">
        <el-select v-model="userForm.state">
          <el-option :value="1" label="在职"></el-option>
          <el-option :value="2" label="离职"></el-option>
          <el-option :value="3" label="试用期"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="系统角色" prop="roleList">
        <el-select
          v-model="userForm.roleList"
          placeholder="请选择用户系统角色"
          multiple
          style="width: 100%"
        >
          <el-option
            v-for="item in roleList"
            :key="item._id"
            :value="item._id"
            :label="item.roleName"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="所属部门" prop="deptId">
        <!-- 级联选择器 -->
        <el-cascader
          v-model="userForm.deptId"
          placeholder="请选择所属部门"
          :options="deptList"
          :props="{ checkStrictly: true, value: '_id', label: 'deptName' }"
          clearable
          style="width: 100%"
        ></el-cascader>
      </el-form-item>
    </el-form>
    <!-- 确认取消按钮 插槽 -->
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
