import { reactive, ref } from 'vue'
import { ElForm, ElMessage } from 'element-plus'
import { RuleItem } from 'async-validator'
import { LoginForm } from '@/types/login'

const useFormRules = () => {
  const refForm = ref<InstanceType<typeof ElForm>>()
  const formData = reactive<LoginForm>({} as LoginForm)

  // 验证密码是否一致
  const validatePass = (rule: RuleItem, value: any, callback: any) => {
    if (!refForm.value) return
    if (value === '') {
      callback(new Error('请输入密码'))
    } else {
      if (formData.password2 !== '') {
        refForm.value.validateField('password2', callback())
      }
      callback()
    }
  }

  // 验证密码是否一致
  const validatePass2 = (rule: RuleItem, value: any, callback: any) => {
    if (value === '') {
      callback(new Error('请再次输入密码'))
    } else if (value !== formData.password) {
      callback(new Error('两次输入密码不一致!'))
    } else {
      callback()
    }
  }

  // 表单规则
  const rules = {
    username: [{ type: 'email', required: true, trigger: 'blur', message: '请输入邮箱用户名' }],
    nickname: [{ required: true, trigger: 'blur', message: '请输入昵称' }],
    captcha: [{ required: true, trigger: 'blur', message: '请输入验证码' }],
    password: [{ validator: validatePass, required: true, trigger: 'blur' }],
    password2: [{ validator: validatePass2, required: true, trigger: 'blur' }]
  }

  // 表单验证
  const validate = async () => {
    return refForm.value?.validate().catch((err) => {
      ElMessage.error('表单填写错误')

      console.log(err)
      throw err
    })
  }

  return {
    formData,
    rules,
    refForm,
    validate
  }
}

export default useFormRules
