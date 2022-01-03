<script setup lang="ts">
  import { provide, withDefaults, defineEmits } from 'vue'
  import { textActiveColor } from '@/assets/theme'
  interface TabProps {
    modelValue?: string
    isClick?: boolean
    hoverColor?: string
    color?: string
    active?: string
  }
  const props = withDefaults(defineProps<TabProps>(), {
    color: '#333',
    active: '#333',
    hoverColor: textActiveColor
  })

  const emit = defineEmits(['update:modelValue'])

  const update = (val: string) => {
    emit('update:modelValue', val)
  }

  provide('tabs', props)
  provide('update', update)
</script>
<template>
  <div class="tabs">
    <div class="flex">
      <slot> </slot>
    </div>
    <div>
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .tabs {
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    line-height: 50px;
    border-bottom: 1px dotted #e9e9e9;
  }
</style>
