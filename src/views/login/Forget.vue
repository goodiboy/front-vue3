<script setup lang="ts">
  import { ref, toRaw } from 'vue'
  import { useRouter } from 'vue-router'
  import Captcha from '@/components/public/captcha/Captcha.vue'
  import formValidate from '@/views/login/form-validate'
  import { forget } from '@/api/login'

  const router = useRouter()
  const { rules, formData, refForm, validate } = formValidate()
  const refCaptcha = ref()

  const handleForget = async () => {
    if (!refCaptcha.value) {
      throw Error('没有拿到验证码信息')
    }
    await validate(refCaptcha.value.captchaId, refCaptcha.value.captchaText)
    delete formData.captchaText
    await forget(toRaw(formData))
    ElMessage.success('验证成功')
  }

  // 跳转登录页面
  const handleToLogin = () => {
    router.push({ name: 'Login' })
  }
</script>
<template>
  <div class="login-page">
    <div class="login-container">
      <h1>密码找回</h1>
      <el-form ref="refForm" :model="formData" :rules="rules" class="form-box" label-width="75px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formData.username" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="验证码" prop="captcha">
          <div class="flex flex-align-center">
            <el-input v-model="formData.captcha" type="text" style="width: 120px">
              <template #suffix>
                <span class="time-down"></span>
              </template>
            </el-input>
            <Captcha ref="refCaptcha" />
          </div>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" type="primary" @click="handleForget"> 确认 </el-button>
        </el-form-item>
      </el-form>
      <el-button
        type="text"
        style="float: right; margin-right: 20px; color: #fff"
        @click="handleToLogin"
      >
        去登录
      </el-button>
    </div>
  </div>
</template>
<style scoped lang="scss">
  @import './style';
</style>
