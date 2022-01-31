<script setup lang="ts">
  // 弹窗显示对象
  import { reactive, ref } from 'vue'

  // 定义表单验证规则
  const rules = reactive({
    userName: [
      {
        required: true,
        message: '请输入用户名称',
        trigger: 'blur'
      }
    ],
    userEmail: [
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
  // 弹窗显示对象
  const showModal = ref(true)

  // 新增用户对象
  const userForm = reactive({
    userName: '',
    state: 3
  })

  //  所有角色列表
  const roleList = ref([])
  // 定义用户操作行为
  const action = ref('create')
  // 部门列表
  const deptList = ref([])
  // 用户弹窗关闭
  const handleClose = () => {
    showModal.value = false
  }
  // 用户提交
  const handleSubmit = () => {
    showModal.value = false
  }
</script>
<template>
  <!-- 增加用户弹窗 -->
  <el-dialog v-model="showModal" title="新增用户">
    <el-form ref="dialogForm" :model="userForm" label-width="100px" :rules="rules">
      <el-form-item label="用户名" prop="userName">
        <el-input
          v-model="userForm.userName"
          placeholder="请输入用户名称"
          :disabled="action === 'edit'"
        />
      </el-form-item>
      <el-form-item label="用户邮箱" prop="userEmail">
        <el-input
          v-model="userForm.userEmail"
          placeholder="请输入用户邮箱"
          :disabled="action === 'edit'"
        >
          <!-- 插槽 -->
          <template #append> qq.com</template>
        </el-input>
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
