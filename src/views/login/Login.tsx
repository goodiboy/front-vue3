import { defineComponent, ref, toRaw } from 'vue'
import './style.scss'
import Captcha from '@/components/public/captcha/Captcha'
import { useRouter } from 'vue-router'
import useFormRules from '@/views/login/use-form-rules'
import { login } from '@/api/login'
import { ElMessage } from 'element-plus'
export default defineComponent({
  name: 'Login',
  setup() {
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

    const handleToRegister = () => {
      router.push({ name: 'Register' })
    }

    return () => (
      <div class="login-page">
        <div class="login-container">
          <h1>用户登陆</h1>
          <el-form
            model={formData}
            rules={rules}
            ref={refForm}
            className="form-box"
            label-width="75px"
            status-icon
          >
            <el-form-item label="用户名" prop="username">
              <el-input v-model={formData.username} type="text" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model={formData.password} type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item label="验证码" prop="captcha">
              <div class="flex flex-align-center">
                <el-input
                  v-model={formData.captcha}
                  type="text"
                  autocomplete="off"
                  style="width:120px"
                />
                <Captcha ref={refCaptcha} />
              </div>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" onClick={handleLogin}>
                登陆
              </el-button>
              <el-button onClick={handleToRegister}>去注册</el-button>
            </el-form-item>
          </el-form>
          <el-button type="text" onClick={} style="color:#fff; float:right; margin-right:20px">
            找回密码
          </el-button>
        </div>
      </div>
    )
  }
})
