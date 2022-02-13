<script setup lang="ts">
  // 弹窗显示对象
  import { nextTick, reactive, ref, toRefs, watch } from 'vue'
  import type { Role, UserInfo } from '@/types/userinfo'
  import { ElForm } from 'element-plus'
  import { getDeptList, getSystemRoleList, operateUser } from '@/api/users'

  // 定义表单验证规则
  const rules = reactive({
    username: [{ type: 'email', required: true, trigger: 'blur', message: '请输入邮箱用户名' }],
    nickname: [{ required: true, message: '请输入昵称', trigger: 'blur' }],
    mobile: [
      { required: true, pattern: /1\d{10}/, message: '请输入正确的手机号格式', trigger: 'blur' }
    ],
    roleList: [{ required: true, message: '请选择用户系统角色', trigger: 'blur' }],
    deptId: [{ required: true, message: '请选择所属部门', trigger: 'blur' }]
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

  //  所有角色列表
  const roleList = ref<Role[]>([])
  // 部门列表
  const deptList = ref()

  const getSystemRoles = async () => {
    const res = await getSystemRoleList()
    roleList.value = res.data
  }

  const getDept = async () => {
    const res = await getDeptList()
    deptList.value = res.data
    console.log(res)
  }

  // 这个dialogData本来就是ref，上面解构的时候加多了一层toRefs，这里watch需要.value
  const unWatchFirstOpen = watch(dialogData.value, (newVal) => {
    if (newVal.show) {
      getSystemRoles()
      getDept()
      unWatchFirstOpen()
    }
  })

  watch(dialogData.value, () => {
    if (dialogData.value.show && dialogData.value.row) {
      nextTick(() => {
        // 需要在下一帧再初始化数据，要不然elementUI的reset方法回重置到赋值后的状态（原因是渲染太快了）
        Object.assign(userForm, dialogData.value.row)
      })
    }
  })

  // 用户弹窗关闭
  const handleClose = () => {
    emit('close')
  }
  // 用户提交
  const handleSubmit = async () => {
    // 如果row不存在，即是新建，要把之前遗留的id删除掉，后端是根据是否有id进行判断是新增还是编辑
    if (!dialogData.value.row) {
      delete userForm._id
    }
    await operateUser(userForm)
    emit('submit')
  }
</script>
<template>
  <!-- 增加用户弹窗 -->
  <el-dialog v-model="dialogData.show" title="新增用户" @close="dialogForm?.resetFields()">
    <el-form ref="dialogForm" :model="userForm" label-width="100px" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input
          v-model="userForm.username"
          placeholder="请输入用户名"
          :disabled="!!dialogData.row"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="昵称" prop="nickname">
        <el-input
          v-model="userForm.nickname"
          placeholder="请输入昵称"
          :disabled="!!dialogData.row"
        />
      </el-form-item>
      <el-form-item label="手机号" prop="mobile">
        <el-input v-model="userForm.mobile" placeholder="请输入手机号" />
      </el-form-item>
      <el-form-item label="系统管理员" required prop="mobile">
        <el-switch v-model="userForm.admin" />
      </el-form-item>
      <el-form-item label="岗位" required prop="job">
        <el-select v-model="userForm.job" placeholder="请选择用户岗位" style="width: 100%">
          <el-option
            v-for="item in roleList"
            :key="item._id"
            :value="item._id"
            :label="item.roleName"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="状态" required prop="state">
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
