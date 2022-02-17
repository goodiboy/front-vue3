<script setup lang="ts">
  // 如果您使用 unplugin-element-plus 并且只使用组件 API，您需要手动导入样式。
  import 'element-plus/es/components/form/style/css' // auto-import不会自动引入组件的css
  // 初始化用表单对象
  import { ref, toRefs } from 'vue'
  import { ElForm } from 'element-plus'
  import { FormConfig } from '@/types/table-frame'

  // const props = toRefs(defineProps<{ modelValue: UserQueryForm }>()) // defineProps编译宏无法传入toRefs函数内部，报错defineProps is not defined
  const props = defineProps<{ modelValue: unknown; formConfig: FormConfig[] }>()
  const emit = defineEmits<{
    (e: 'query'): void
  }>()

  const { modelValue, formConfig } = toRefs(props)

  const refForm = ref<InstanceType<typeof ElForm>>()

  const handleReset = () => {
    refForm.value?.resetFields()
  }
  const handleQuery = () => {
    emit('query')
  }
</script>
<template>
  <div class="query-form">
    <el-form ref="refForm" inline :model="modelValue">
      <el-form-item
        v-for="item of formConfig"
        :key="item.prop"
        :label="item.label"
        :prop="item.prop"
      >
        <!-- 输入框类型 -->
        <template v-if="item.type === 'input'">
          <el-input
            v-model="modelValue[item.prop]"
            :placeholder="`请输入${item.label}`"
            @keyup.enter="handleQuery"
          />
        </template>
        <!-- 下拉框类型 -->
        <template v-if="item.type === 'select'">
          <el-select v-model="modelValue[item.prop]" @change="handleQuery">
            <el-option
              v-for="op of item.option"
              :key="op.value"
              :value="op.value"
              :label="op.label"
            />
          </el-select>
        </template>
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
