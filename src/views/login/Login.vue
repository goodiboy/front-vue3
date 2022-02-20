<script setup lang="ts">
  import { ref, toRaw } from 'vue'
  import { useRouter } from 'vue-router'
  import Captcha from '@/components/public/captcha/Captcha.vue'
  import formValidate from '@/views/login/form-validate'
  import { login } from '@/api/login'
  import type { CaptchaType } from '@/types/common'
  import { useStorage } from '@/utils/storage/storage'

  const storage = useStorage()
  const refCaptcha = ref<CaptchaType>()
  const router = useRouter()
  const { rules, formData, refForm, validate } = formValidate(refCaptcha)

  // 登录
  const handleLogin = async () => {
    await validate()
    const res = await login(toRaw(formData))
    ElMessage.success('登陆成功')
    storage.setItem('userInfo', res.data, 86400) // 一天 = 60 * 60 * 24 = 86400
    router.replace({ name: 'Home' })
  }

  // 跳转注册页面
  const handleToRegister = () => {
    router.push({ name: 'Register' })
  }

  // 跳转密码找回页面
  const handleToForget = () => {
    router.push({ name: 'Forget' })
  }
</script>
<template>
  <div class="login-page">
    <div class="login-container">
      <h1>用户登陆</h1>
      <el-form ref="refForm" :model="formData" :rules="rules" class="form-box" label-width="75px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formData.username" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password" type="password" autocomplete="new-password" />
        </el-form-item>
        <el-form-item label="验证码" prop="captcha">
          <div class="flex-align-center">
            <el-input
              v-model="formData.captcha"
              type="text"
              autocomplete="off"
              style="width: 120px; color: #fff"
            />
            <Captcha ref="refCaptcha" />
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin"> 登陆 </el-button>
          <el-button @click="handleToRegister">去注册</el-button>
        </el-form-item>
      </el-form>
      <el-button type="text" class="forget-btn" @click="handleToForget"> 重置密码 </el-button>
    </div>
  </div>
</template>
<style scoped lang="scss">
  @import './style';

  .forget-btn {
    float: right;
    margin-right: 20px;
    color: #fff;
  }
</style>
