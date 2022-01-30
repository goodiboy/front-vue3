<script setup lang="ts">
  // 初始化用表单对象
  import { reactive, ref } from 'vue'
  import { UserSelectForm, UserState } from '@/types/userManager'
  import { ElForm } from 'element-plus'

  const user = reactive<UserSelectForm>({
    state: UserState.all
  })

  const refForm = ref<InstanceType<typeof ElForm>>()

  const stateList = [
    {
      value: UserState.all,
      label: '所有'
    },
    {
      value: UserState.working,
      label: '在职'
    },
    {
      value: UserState.quit,
      label: '离职'
    },
    {
      value: UserState.trial,
      label: '试用期'
    }
  ]

  const handleReset = () => {
    refForm.value?.resetFields()
  }
  const handleQuery = () => {
    // todo
  }
</script>
<template>
  <div class="query-form">
    <el-form ref="refForm" :inline="true" :model="user">
      <el-form-item label="用户ID" prop="userId">
        <el-input v-model="user.userId" placeholder="请输入用户ID" />
      </el-form-item>
      <el-form-item label="用户名称" prop="userName">
        <el-input v-model="user.userName" placeholder="请输入用户名称" />
      </el-form-item>
      <el-form-item label="状态" prop="state">
        <el-select v-model="user.state">
          <el-option
            v-for="item of stateList"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleQuery">查询</el-button>
        <el-button @click="handleReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
  .query-form {
    padding: 18px 18px 0;
    background-color: #fff;
    border-radius: 5px;
  }
</style>
