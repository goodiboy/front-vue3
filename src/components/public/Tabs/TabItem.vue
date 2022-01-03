<script setup lang="ts">
  import { inject } from 'vue'
  import type { TabProps } from '@/components/public/Tabs/type'

  const props = defineProps<{ label?: string }>()

  const tabProps = inject('tabs') as TabProps
  const tabUpdate = inject('update') as (val?: string) => void

  const handleClick = () => {
    if (!tabProps.isClick) return
    tabUpdate(props.label)
  }
</script>
<template>
  <div class="tab-item" @click="handleClick">
    <span
      class="content"
      :class="{ 'is-click': tabProps.isClick, active: props.label === tabProps.modelValue }"
    >
      {{ props.label }}
    </span>
  </div>
</template>

<style scoped lang="scss">
  .content {
    padding: 0 8px;
    color: v-bind('tabProps.color');

    &.active {
      color: v-bind('tabProps.active');
    }

    &.is-click:not(.active):hover {
      color: v-bind('tabProps.hoverColor');
      cursor: pointer;
    }
  }

  .tab-item + .tab-item::before {
    display: inline-block;
    width: 1px;
    height: 15px;
    margin: 0 8px;
    vertical-align: text-bottom;
    content: '';
    background: #e9e9e9;
  }
</style>
