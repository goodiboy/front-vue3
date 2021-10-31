import { defineComponent, onBeforeMount, ref } from 'vue'
import PublicController from '@/api/PublicController'

export default defineComponent({
  name: 'Captcha',
  setup() {
    const captchaImg = ref<JSX.Element>()
    onBeforeMount(async () => {
      await getCaptcha()
    })

    const getCaptcha = async () => {
      const res = await PublicController.getCaptcha()
      captchaImg.value = res.data.data
    }

    return () => (
      <span class="flex" style="cursor:pointer" v-html={captchaImg.value} onClick={getCaptcha} />
    )
  }
})
