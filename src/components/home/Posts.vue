<script setup lang="ts">
  import { Bell, ChatLineRound } from '@element-plus/icons'
</script>
<template>
  <div class="posts">
    <router-link to="" class="avatar">
      <img src="@/assets/img/common/avatar.png" />
    </router-link>
    <div class="content">
      <div class="title">
        <div class="flex-align-center">
          <span class="classify">分享</span>
          <h3 class="ellipsis">基于 Element-plus 的极简社区页面模版</h3>
        </div>
        <span class="tag">置顶</span>
      </div>
      <div class="dynamic flex-center-between">
        <div class="left flex-align-center">
          <span class="name">goodiboy</span>
          <span class="time">刚刚</span>
          <span class="heat-number flex-align-center">
            <el-icon class="icon"><bell /></el-icon>
            <span>60</span>
          </span>
        </div>
        <span class="comment flex-align-center">
          <el-icon class="icon"><chat-line-round /></el-icon>
          <span>60</span>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .posts {
    display: flex;
    padding: 15px 0;
  }

  .avatar {
    flex-shrink: 0;
    margin-right: 15px;

    img {
      display: block;
      width: 45px;
      height: 45px;
      border-radius: 2px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;

    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .classify {
        height: 16px;
        padding: 0 5px;
        margin-right: 10px;
        font-size: 12px;
        line-height: 16px;
        color: $text-active-color;
        background: none;
        border: 1px solid $text-active-color;
      }

      h3 {
        padding-right: 15px;
        font-size: 16px;
      }

      .tag {
        height: 20px;
        padding: 0 6px;
        margin-left: 5px;
        font-size: 12px;
        line-height: 20px;
        color: #fff;
        background-color: #393d49;
        border-radius: 2px;
      }
    }

    .dynamic {
      font-size: 13px;
      color: $dark-text-color;

      .left {
        > span {
          margin-right: 15px;
        }
      }

      .icon {
        margin-right: 5px;
        font-size: 16px;
      }
    }
  }
</style>
