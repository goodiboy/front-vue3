<script setup lang="ts">
  import { ref, toRaw } from 'vue'
  import { useRouter } from 'vue-router'
  import Captcha from '@/components/public/captcha/Captcha.vue'
  import formValidate from '@/views/login/form-validate'
  import { forget } from '@/api/login'
  import { CaptchaType } from '@/types/common'

  const router = useRouter()
  const refCaptcha = ref<CaptchaType>()
  const { rules, formData, refForm, validate } = formValidate(refCaptcha)

  const handleForget = async () => {
    if (!refCaptcha.value) {
      throw Error('没有拿到验证码信息')
    }
    await validate()
    const res = await forget(toRaw(formData))
    ElMessage.success(res.msg)
  }

  // 跳转登录页面
  const handleToLogin = () => {
    router.push({ name: 'Login' })
  }

  // 跳转注册页面
  const handleToRegister = () => {
    router.push({ name: 'Register' })
  }
</script>
<template>
  <div class="login-page">
    <div class="login-container">
      <h1>重置密码</h1>
      <el-form ref="refForm" :model="formData" :rules="rules" class="form-box" label-width="75px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formData.username" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="验证码" prop="captcha">
          <div class="flex-align-center">
            <el-input v-model="formData.captcha" type="text" style="width: 120px">
              <template #suffix>
                <span class="time-down"></span>
              </template>
            </el-input>
            <Captcha ref="refCaptcha" />
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleForget"> 重置密码 </el-button>
          <el-button @click="handleToRegister"> 去注册 </el-button>
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
