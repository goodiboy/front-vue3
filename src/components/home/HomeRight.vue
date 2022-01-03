<script setup lang="ts">
  import { ref } from 'vue'

  const paneSignActive = ref('签到')
</script>
<template>
  <div class="home-right">
    <div class="pane">
      <tabs :is-click="false">
        <tab-item label="温馨通道" />
      </tabs>
      <ul class="cozy-link ellipsis">
        <li v-for="item of 5" :key="item">
          <router-link to="" class="link-item ellipsis">
            温馨通道温馨通道温馨通道温馨通道温馨通道温馨通道温馨通道
          </router-link>
        </li>
      </ul>
    </div>
    <div class="pane">
      <tabs v-model="paneSignActive" :is-click="true" color="#01aaed" active="#333">
        <tab-item label="签到" />
        <tab-item label="说明" />
        <tab-item label="活跃榜" />
        <template #right>
          <div class="sign">已连续签到<span>16</span>天</div>
        </template>
      </tabs>
      <ul class="cozy-link ellipsis">
        <li v-for="item of 5" :key="item">
          <router-link to="" class="link-item ellipsis">
            温馨通道温馨通道温馨通道温馨通道温馨通道温馨通道温馨通道
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .home-right {
    width: 415px;
  }

  .pane {
    background: #fff;

    & + .pane {
      margin-top: 10px;
    }
  }

  .cozy-link {
    box-sizing: border-box;
    width: 100%;
    padding: 10px 15px 10px 30px;

    > li {
      list-style-type: disc;
    }

    .link-item {
      display: block;
      line-height: 26px;
      color: #01aaed;
      text-decoration: none;
    }
  }

  .sign {
    color: $dark-text-color;

    span {
      color: $height-light-color;
    }
  }
</style>
