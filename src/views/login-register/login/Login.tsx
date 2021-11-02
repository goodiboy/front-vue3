import { defineComponent } from 'vue'
import '../style.scss'
import Captcha from '@/components/public/captcha/Captcha'
import { useRouter } from 'vue-router'
import useFormRules from '@/views/login-register/use-form-rules'
export default defineComponent({
  name: 'Login',
  setup() {
    const router = useRouter()
    const { rules, formData, refForm } = useFormRules()

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
                <Captcha />
              </div>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">登陆</el-button>
              <el-button onClick={handleToRegister}>去注册</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    )
  }
})