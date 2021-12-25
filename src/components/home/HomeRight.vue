<script setup lang="ts"></script>
<template>
  <div class="home-right">
    <div class="pane">
      <tabs :is-click="false" :tab-list="['温馨通道']" />
      <ul class="cozy-link ellipsis">
        <li v-for="item of 5" :key="item">
          <router-link to="" class="link-item ellipsis"
            >温馨通道温馨通道温馨通道温馨通道温馨通道温馨通道温馨通道</router-link
          >
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
</style>
