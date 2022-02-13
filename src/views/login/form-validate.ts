import { reactive, Ref, ref } from 'vue'
import type { LoginForm } from '@/types/login'
import type { ElForm } from 'element-plus'
import type { CaptchaType } from '@/types/common'
import type { FormItemRule } from 'element-plus/es/components/form/src/form.type'
import type { InternalRuleItem, Value } from 'async-validator/dist-types/interface'

const formValidate = (refCaptcha: Ref<CaptchaType | undefined>) => {
  const refForm = ref<InstanceType<typeof ElForm>>()
  const formData = reactive<LoginForm>({} as LoginForm)

  // 验证密码是否一致
  const validatePass = (
    rule: InternalRuleItem,
    value: Value,
    callback: (error?: string | Error) => void
  ) => {
    if (!refForm.value) return
    if (!value?.trim()) {
      callback(new Error('请输入密码'))
    } else {
      if (formData.password2 !== '') {
        refForm.value.validateField('password2', () => {
          /*验证后的函数回调*/
        })
      }
      callback()
    }
  }

  // 验证密码是否一致
  const validatePass2 = (
    rule: InternalRuleItem,
    value: Value,
    callback: (error?: string | Error) => void
  ) => {
    if (!value?.trim()) {
      callback(new Error('请再次输入密码'))
    } else if (value !== formData.password) {
      callback(new Error('两次输入密码不一致!'))
    } else {
      callback()
    }
  }

  // 校验验证码是否正确
  const validatorCaptcha = (
    rule: InternalRuleItem,
    value: Value,
    callback: (error?: string | Error) => void
  ) => {
    if (!value?.trim()) {
      callback(new Error('请输入验证码'))
    } else if (value?.trim() !== refCaptcha.value?.captchaText) {
      callback(new Error('验证码不正确'))
    } else {
      callback()
    }
  }

  // 表单规则
  const rules: { [key: string]: FormItemRule[] } = {
    username: [{ type: 'email', required: true, trigger: 'blur', message: '请输入邮箱用户名' }],
    nickname: [{ required: true, trigger: 'blur', message: '请输入昵称' }],
    captcha: [{ validator: validatorCaptcha, required: true, trigger: 'blur' }],
    password: [{ validator: validatePass, required: true, trigger: 'blur' }],
    password2: [{ validator: validatePass2, required: true, trigger: 'blur' }]
  }

  // 表单验证
  const validate = async () => {
    if (!refCaptcha.value) {
      throw Error('没有拿到验证码信息')
    }
    formData.captchaId = refCaptcha.value?.captchaId
    return refForm.value?.validate()?.catch((err) => {
      ElMessage.error('表单填写错误')
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

export default formValidate
