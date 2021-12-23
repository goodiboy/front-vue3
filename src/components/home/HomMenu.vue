<script setup lang="ts">
  import { Search } from '@element-plus/icons'
</script>
<template>
  <div class="home-menu">
    <ul class="left-menu">
      <li class="menu-item">首页</li>
      <li class="menu-item">提问</li>
      <li class="menu-item">分享</li>
      <li class="menu-item">讨论</li>
      <li class="menu-item">建议</li>
      <li class="menu-item">公告</li>
      <li class="menu-item">动态</li>
      <li class="line"></li>
      <li class="menu-item">我的发帖</li>
      <li class="menu-item">我的收藏</li>
    </ul>
    <div class="right-btn">
      <el-icon class="search-btn">
        <search />
      </el-icon>
      <el-button color="#009688" style="color: white">发布新帖</el-button>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .home-menu {
    display: flex;
    justify-content: space-between;
    height: 50px;
    padding-right: 30px;
    padding-left: 10px;
    background: #fff;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);

    .left-menu {
      display: flex;

      > li {
        padding: 0 20px;
        line-height: 50px;
      }

      .menu-item {
        cursor: pointer;

        &:hover {
          color: $text-active-color;
        }
      }

      .line {
        &::after {
          display: inline-block;
          width: 1px;
          height: 15px;
          vertical-align: middle;
          content: '';
          background: #e2e2e2;
        }
      }
    }

    .right-btn {
      display: flex;
      align-items: center;

      .search-btn {
        margin-right: 30px;
        font-size: 25px;
        cursor: pointer;
        border: 0;

        &:hover {
          color: $text-active-color;
        }
      }
    }
  }
</style>
