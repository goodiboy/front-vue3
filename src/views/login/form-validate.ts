import { reactive, ref } from 'vue'
import type { RuleItem } from 'async-validator'
import type { LoginForm } from '@/types/login'
import type { ElForm } from 'element-plus'

const formValidate = () => {
  const refForm = ref<InstanceType<typeof ElForm>>()
  const formData = reactive<LoginForm>({} as LoginForm)

  // 验证密码是否一致
  const validatePass = (rule: RuleItem, value: string | undefined, callback: any) => {
    if (!refForm.value) return
    if (!value?.trim()) {
      callback(new Error('请输入密码'))
    } else {
      if (formData.password2 !== '') {
        refForm.value.validateField('password2', callback())
      }
      callback()
    }
  }

  // 验证密码是否一致
  const validatePass2 = (rule: RuleItem, value: string | undefined, callback: any) => {
    console.log(formData)
    if (!value?.trim()) {
      callback(new Error('请再次输入密码'))
    } else if (value !== formData.password) {
      callback(new Error('两次输入密码不一致!'))
    } else {
      callback()
    }
  }

  // 校验验证码是否正确
  const validatorCaptcha = (rule: RuleItem, value: string | undefined, callback: any) => {
    console.log(value, formData)
    if (!value?.trim()) {
      callback(new Error('请输入验证码'))
    } else if (value?.trim() !== formData.captchaText) {
      callback(new Error('验证码不正确'))
    } else {
      callback()
    }
  }

  // 表单规则
  const rules = {
    username: [{ type: 'email', required: true, trigger: 'blur', message: '请输入邮箱用户名' }],
    nickname: [{ required: true, trigger: 'blur', message: '请输入昵称' }],
    captcha: [{ validator: validatorCaptcha, required: true, trigger: 'blur' }],
    password: [{ validator: validatePass, required: true, trigger: 'blur' }],
    password2: [{ validator: validatePass2, required: true, trigger: 'blur' }]
  }

  // 表单验证
  const validate = async (captchaId?: string, captchaText?: string) => {
    if (!captchaId || !captchaText) {
      throw Error('没有拿到验证码信息')
    }
    console.log(formData)
    formData.captchaText = captchaText
    formData.captchaId = captchaId

    return refForm.value
      ?.validate()
      ?.catch((err) => {
        ElMessage.error('表单填写错误')
        throw err
      })
      .finally(() => {
        delete formData.captchaText // 表单验证完之后删除这个校验属性，不传到后端
      })
  }

  return {
    formData,
    rules,
    refForm,
    validate
  }
}

export default formValidate
