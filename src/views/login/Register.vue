<script setup lang="ts">
  import { ref, toRaw } from 'vue'
  import { useRouter } from 'vue-router'
  import useFormRules from '@/views/login/use-form-rules'
  import { register } from '@/api/login'
  import Captcha from '@/components/public/captcha/Captcha'
  import { ElMessage } from 'element-plus'

  const router = useRouter()
  const refCaptcha = ref()
  const { rules, formData, refForm, validate } = useFormRules()
  const handleToLogin = () => {
    router.push({ name: 'Login' })
  }
  const handleRegister = async () => {
    await validate()
    formData.captchaId = refCaptcha.value?.captchaId
    await register(toRaw(formData))
    ElMessage.success('注册成功')
  }
</script>

<template>
  <div class="login-page">
    <div class="login-container">
      <h1>用户注册</h1>
      <el-form
        ref="refForm"
        :model="formData"
        :rules="rules"
        class="form-box"
        label-width="100px"
        status-icon
      >
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
          <div class="flex flex-align-center">
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
