<script setup lang="ts">
  import { ref, toRaw } from 'vue'
  import { useRouter } from 'vue-router'
  import formValidate from '@/views/login/form-validate'
  import { register } from '@/api/login'
  import Captcha from '@/components/public/captcha/Captcha.vue'
  import { useStorage } from '@/utils/storage/storage'
  import { CaptchaType } from '@/types/common'

  const storage = useStorage()
  const router = useRouter()
  const refCaptcha = ref<CaptchaType>()
  const { rules, formData, refForm, validate } = formValidate(refCaptcha)

  // 跳转登录页面
  const handleToLogin = () => {
    router.push({ name: 'Login' })
  }

  // 注册
  const handleRegister = async () => {
    if (!refCaptcha.value) {
      throw Error('没有拿到验证码信息')
    }
    await validate()
    const res = await register(toRaw(formData))
    storage.setItem('userInfo', res.data, 86400) // 一天 = 60 * 60 * 24 = 86400
    router.replace({ name: 'Home' })
  }
</script>

<template>
  <div class="login-page">
    <div class="login-container">
      <h1>用户注册</h1>
      <el-form ref="refForm" :model="formData" :rules="rules" class="form-box" label-width="100px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formData.username" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="昵称" prop="nickname">
          <el-input v-model="formData.nickname" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="确认密码" prop="password2">
          <el-input v-model="formData.password2" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="验证码" prop="captcha">
          <div class="flex-align-center">
            <el-input
              v-model="formData.captcha"
              type="text"
              autocomplete="off"
              style="width: 120px"
            />
            <Captcha ref="refCaptcha" />
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleRegister"> 注册 </el-button>
          <el-button @click="handleToLogin">去登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style scoped lang="scss">
  @import './style';
</style>
