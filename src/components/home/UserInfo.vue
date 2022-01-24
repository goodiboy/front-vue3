<script setup lang="ts">
  import { useStore } from '@/store'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useStorage } from '@/utils/storage/storage'

  enum Command {
    SIGN_OUT = 'SIGN_OUT',
    INFO = 'INFO'
  }

  const storage = useStorage()
  const store = useStore()
  const router = useRouter()
  const isLogin = ref(store.getters['userInfoModule/isLogin'])
  const username = ref('')

  if (isLogin.value) {
    username.value = store.getters['userInfoModule/nickname']
  }

  const handleCommand = (command: Command) => {
    if (command !== Command.SIGN_OUT) return
    storage.removeItem('userInfo')
    router.replace({ name: 'Login' })
  }
</script>
<template>
  <div class="right">
    <el-dropdown v-if="isLogin" @command="handleCommand">
      <div class="menu-title">
        <el-badge :value="200" :max="99">
          <img src="@/assets/img/common/avatar.png" class="avatar" alt="头像" />
        </el-badge>
        <span class="text"> {{ username }} </span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :command="Command.INFO">个人信息</el-dropdown-item>
          <el-dropdown-item :command="Command.SIGN_OUT">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-button v-else type="text" style="color: #333" @click="router.push({ name: 'Login' })">
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

  .menu-title {
    display: flex;
    align-items: center;
    cursor: pointer;

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
      color: #333;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
</style>
