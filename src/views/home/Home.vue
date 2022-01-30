<script setup lang="ts">
  import { Setting, Fold } from '@element-plus/icons'
  import { ref } from 'vue'

  const isCollapse = ref(false)

  const toggleSideMenu = () => {
    isCollapse.value = !isCollapse.value
  }
</script>
<template>
  <div class="home">
    <div class="basic-layout">
      <div :class="['nav-side', isCollapse ? 'fold' : 'unfold']">
        <!-- 系统logo -->
        <div class="logo">
          <img src="@/assets/img/common/logo.png" alt="" />
          <span>Manager</span>
        </div>
        <!-- 导航菜单 -->
        <el-menu
          default-active="2"
          background-color="#001529"
          text-color="#fff"
          router
          :collapse="isCollapse"
          class="nav-menu"
        >
          <!--el-submenu父菜单  -->
          <el-sub-menu index="1">
            <template #title>
              <el-icon><setting /></el-icon>
              <span>系统管理</span>
            </template>
            <!--el-menu-item子菜单  -->
            <el-menu-item index="/user">用户管理 </el-menu-item>
            <el-menu-item index="1-2"> 菜单管理 </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><setting /></el-icon>
              <span>审批管理</span>
            </template>
            <!--el-menu-item子菜单  -->
            <el-menu-item index="2-1">休假申请</el-menu-item>
            <el-menu-item index="2-2">待我审批</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div>
      <div class="content-right">
        <div class="nav-top">
          <div class="nav-left">
            <el-icon class="menu-fold" @click="toggleSideMenu"><fold /></el-icon>
            <div class="bread">面包屑</div>
          </div>
          <user-info />
        </div>
        <div class="wrapper">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .basic-layout {
    display: flex;

    /**  左侧导航样式  **/
    .nav-side {
      flex-grow: 0;
      //transition: width 0.5s;
      width: 200px;
      //100vh 自动计算高度
      height: 100vh;
      overflow-y: auto;
      color: #fff;
      background-color: #001529;
      transition: width 0.5s;

      .logo {
        display: flex;
        align-items: center;
        height: 50px;
        font-size: 18px;

        img {
          width: 32px;
          height: 32px;
          margin: 0 16px;
        }
      }

      .nav-menu {
        height: calc(100vh - 50px);
        border-right: none;
      }
      // 合并左侧菜单
      &.fold {
        width: 64px;
      }
      // 展开左侧菜单
      &.unfold {
        width: 200px;
      }
    }

    /** 右侧页面内容样式 **/
    .content-right {
      flex: 1;

      /** 右侧导航内容样式 **/
      .nav-top {
        display: flex;
        justify-content: space-between;
        height: 50px;
        padding: 0 20px;
        line-height: 50px;
        border-bottom: 1px solid #ddd;

        .nav-left {
          display: flex;
          align-items: center;

          .menu-fold {
            margin-right: 15px;
            font-size: 18px;
            cursor: pointer;
          }
        }
      }

      /**  内容样式  **/
      .wrapper {
        //100vh 自动计算高度
        height: calc(100vh - 50px);
        padding: 20px;
        background: #eef0f3;
      }
    }
  }
</style>
