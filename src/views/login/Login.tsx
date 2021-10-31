import { defineComponent, reactive } from 'vue'
import './login.scss'
import Captcha from '@/components/public/captcha/Captcha'
export default defineComponent({
  name: 'Login',
  setup() {
    const loginForm = reactive({
      username: '',
      password: '',
      captcha: ''
    })

    return () => (
      <div class="login-page">
        <div class="login-container">
          <h1>用户登陆</h1>
          <el-form className="form-box" label-width="70px" status-icon>
            <el-form-item label="用户名" prop="username">
              <el-input v-model={loginForm.username} type="text" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model={loginForm.password} type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item label="验证码" prop="captcha">
              <div class="flex flex-align-center">
                <el-input
                  v-model={loginForm.captcha}
                  type="text"
                  autocomplete="off"
                  style="width:120px"
                />
                <Captcha />
              </div>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">登陆</el-button>
              <el-button>注册</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    )
  }
})
