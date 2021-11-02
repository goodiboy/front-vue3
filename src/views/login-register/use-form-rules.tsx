import { reactive, ref } from 'vue'
import { ElForm } from 'element-plus'
import { RuleItem } from 'async-validator'

const useFormRules = () => {
  const refForm = ref<InstanceType<typeof ElForm>>()
  const formData = reactive({
    username: '',
    password: '',
    password2: '',
    captcha: ''
  })
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
  const validatePass2 = (rule: RuleItem, value: any, callback: any) => {
    if (value === '') {
      callback(new Error('请再次输入密码'))
    } else if (value !== formData.password) {
      callback(new Error('两次输入密码不一致!'))
    } else {
      callback()
    }
  }
  const rules = {
    password: [{ validator: validatePass, trigger: 'blur' }],
    password2: [{ validator: validatePass2, trigger: 'blur' }]
  }
  return {
    formData,
    rules,
    refForm
  }
}

export default useFormRules
