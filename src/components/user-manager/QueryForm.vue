<script setup lang="ts">
  // 如果您使用 unplugin-element-plus 并且只使用组件 API，您需要手动导入样式。
  import 'element-plus/es/components/form/style/css' // auto-import不会自动引入组件的css
  // 初始化用表单对象
  import { ref, defineEmits, toRefs, defineProps } from 'vue'
  import { ElForm } from 'element-plus'
  import { UserQueryForm, UserState } from '@/types/userInfo'

  // const props = toRefs(defineProps<{ modelValue: UserQueryForm }>()) // defineProps编译宏无法传入toRefs函数内部，报错defineProps is not defined
  const props = defineProps<{ modelValue: UserQueryForm }>()
  const emit = defineEmits<{
    (e: 'query'): void
  }>()

  const { modelValue: user } = toRefs(props)

  const refForm = ref<InstanceType<typeof ElForm>>()

  const stateList = [
    {
      value: 0,
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
    emit('query')
  }
</script>
<template>
  <div class="query-form">
    <el-form ref="refForm" inline :model="user">
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
