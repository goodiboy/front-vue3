<script setup lang="ts">
  console.log('index')
</script>
<template>
  <div class="home">
    <div class="basic-layout">
      <div class="nav-side"></div>
      <div class="content-right">
        <div class="nav-top">
          <div class="bread">面包屑</div>
          <div class="user-info">
            <user-info />
          </div>
        </div>
        <div class="wrapper">
          <div class="main-page">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .basic-layout {
    position: relative;

    /**  左侧导航样式  **/
    .nav-side {
      position: fixed;
      width: 200px;
      //100vh 自动计算高度
      height: 100vh;
      overflow-y: auto;
      color: #fff;
      background-color: #001529;
      transition: width 0.5s;
    }

    /** 右侧页面内容样式 **/
    .content-right {
      margin-left: 200px;

      /** 右侧导航内容样式 **/
      .nav-top {
        display: flex;
        justify-content: space-between;
        height: 50px;
        padding: 0 20px;
        line-height: 50px;
        border-bottom: 1px solid #ddd;
      }

      /**  内容样式  **/
      .wrapper {
        //100vh 自动计算高度
        height: calc(100vh - 50px);
        padding: 20px;
        background: #eef0f3;

        .main-page {
          height: 100%;
          background: #fff;
        }
      }
    }
  }
</style>
