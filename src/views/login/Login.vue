<script setup lang="ts">
  import { ref, toRaw } from 'vue'
  import { useRouter } from 'vue-router'
  import Captcha from '@/components/public/captcha/Captcha'
  import useFormRules from '@/views/login/use-form-rules'
  import { login } from '@/api/login'
  import { ElMessage } from 'element-plus'

  const router = useRouter()
  const { rules, formData, refForm, validate } = useFormRules()
  const refCaptcha = ref()

  const handleLogin = async () => {
    await validate()
    formData.captchaId = refCaptcha.value?.captchaId
    await login(toRaw(formData))
    ElMessage.success('登陆成功')
  }
  const handleToRegister = () => {
    router.push({ name: 'Register' })
  }
</script>
<template>
  <div class="login-page">
    <div class="login-container">
      <h1>用户登陆</h1>
      <el-form
        ref="refForm"
        :model="formData"
        :rules="rules"
        class-name="form-box"
        label-width="75px"
        status-icon
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formData.username" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password" type="password" autocomplete="off" />
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
          <el-button type="primary" @click="handleLogin"> 登陆 </el-button>
          <el-button @click="handleToRegister">去注册</el-button>
        </el-form-item>
      </el-form>
      <el-button type="text" style="float: right; margin-right: 20px; color: #fff">
        找回密码
      </el-button>
    </div>
  </div>
</template>
<style scoped lang="scss">
  @import './style';
</style>
