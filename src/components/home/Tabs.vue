<script setup lang="ts">
  import { withDefaults } from 'vue'
  interface Props {
    isClick?: boolean
    tabList: string[]
  }

  const props = withDefaults(defineProps<Props>(), {
    isClick: true
  })
</script>
<template>
  <ul class="tabs">
    <slot>
      <li v-for="(item, index) of props.tabList" :key="index">
        <span class="tab-item" :class="{ 'is-click': props.isClick }">{{ item }}</span>
      </li>
    </slot>
  </ul>
</template>

<style scoped lang="scss">
  .tabs {
    display: flex;
    padding: 0 15px;
    line-height: 50px;
    border-bottom: 1px dotted #e9e9e9;

    > li + li::before {
      display: inline-block;
      width: 1px;
      height: 15px;
      margin: 0 8px;
      vertical-align: text-bottom;
      content: '';
      background: #e9e9e9;
    }

    .tab-item {
      padding: 0 8px;
      color: #666;

      &.is-click:hover {
        color: $text-active-color;
        cursor: pointer;
      }
    }
  }
</style>
