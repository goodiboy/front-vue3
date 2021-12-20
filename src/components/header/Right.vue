<script setup lang="ts">
  import { useStore } from '@/store'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const store = useStore()
  const router = useRouter()
  const isLogin = ref(store.getters['userInfoModule/isLogin'])
  const username = ref('')

  if (isLogin.value) {
    username.value = store.getters['userInfoModule/nickname']
  }
</script>
<template>
  <div class="right">
    <el-menu v-if="isLogin" class="el-menu" default-active="1" mode="horizontal" :ellipsis="false">
      <el-sub-menu index="1">
        <template #title>
          <div class="menu-title">
            <img src="@/assets/img/common/avatar.png" class="avatar" alt="头像" />
            <span class="text"> {{ username }} </span>
          </div>
        </template>
        <el-menu-item>个人信息</el-menu-item>
      </el-sub-menu>
    </el-menu>

    <el-button v-else type="text" style="color: #fff" @click="router.push({ name: 'Login' })">
      登录 / 注册
    </el-button>
  </div>
</template>
<style scoped lang="scss">
  .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    color: #fff;
  }

  .el-menu {
    justify-content: flex-end;
    width: 150px;
    background: $header-bg-color;

    :deep(.el-sub-menu__title) {
      background-color: inherit; // 不使用el-menu的属性配置，是为了统一使用全局的颜色，方便更改
      border-bottom: 0;

      &:hover {
        background-color: inherit;
      }

      .el-sub-menu__icon-arrow {
        font-size: 14px;
        color: #fff;
      }
    }
  }

  .menu-title {
    display: flex;
    align-items: center;

    .avatar {
      flex-shrink: 0;
      width: 30px;
      height: 30px;
      overflow: hidden;
      border-radius: 50%;
    }

    .text {
      max-width: 100px;
      margin-left: 10px;
      overflow: hidden;
      color: #fff;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
</style>
