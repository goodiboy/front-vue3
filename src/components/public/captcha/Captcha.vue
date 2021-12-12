<script setup lang="ts">
  import { defineExpose, onBeforeMount, ref } from 'vue'
  import { getCaptcha } from '@/api/common'

  const captcha = ref<SVGElement>()
  const captchaId = ref('')
  const captchaText = ref('')
  onBeforeMount(async () => {
    await getCaptchaData()
  })
  const getCaptchaData = async () => {
    const res = await getCaptcha()
    captcha.value = res.captcha
    captchaId.value = res.captchaId
    captchaText.value = res.captchaText
  }
  defineExpose({
    captchaId,
    captchaText
  })
</script>
<template>
  <span class="captcha, flex" style="cursor: pointer" @click="getCaptchaData" v-html="captcha"
/></template>
<style scoped lang="scss">
  .captcha svg {
    display: block;
    width: 100%;
  }
</style>
