import { defineComponent, onBeforeMount, ref } from 'vue'
import { getCaptcha } from '@/api/common'
import style from './captcha.module.scss'
export default defineComponent({
  name: 'Captcha',
  setup(props, { expose }) {
    const captchaImg = ref<JSX.Element>()
    const captchaId = ref('')

    onBeforeMount(async () => {
      await getCaptchaData()
    })

    const getCaptchaData = async () => {
      const res = await getCaptcha()
      captchaImg.value = res.data
      captchaId.value = res.id
    }

    expose({
      captchaId
    })

    return () => (
      <span
        class={[style.captcha, 'flex']}
        style="cursor:pointer"
        v-html={captchaImg.value}
        onClick={getCaptchaData}
      />
    )
  }
})
