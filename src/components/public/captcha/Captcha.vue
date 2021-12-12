<script setup lang="ts">
  import { onBeforeMount, ref, defineExpose } from 'vue'
  import { getCaptcha } from '@/api/common'

  const captchaImg = ref<SVGElement>()
  const captchaId = ref('')

  onBeforeMount(async () => {
    await getCaptchaData()
  })

  const getCaptchaData = async () => {
    const res = await getCaptcha()
    captchaImg.value = res.data
    captchaId.value = res.id
  }
  defineExpose({
    captchaId
  })
</script>
<template>
  <span class="captcha, flex" style="cursor: pointer" @click="getCaptchaData" v-html="captchaImg"
/></template>
<style scoped lang="scss">
  .captcha svg {
    display: block;
    width: 100%;
  }
</style>
