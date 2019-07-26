<template>
  <div class="home-page">

    <!-- 顶部地址输入框 -->
    <top-bar ref="topBar"></top-bar>

    <div class="page-container">

      <!-- Webview -->
      <viewer ref="webview" @addEvent="addEvent"></viewer>

      <!-- 中部按钮组 -->
      <btn-container></btn-container>

      <!-- 右侧列表 -->
      <event-list ref="eventList"></event-list>

    </div>
  </div>
</template>

<script>
  import TopBar from './TopBar'
  import Viewer from './Viewer'
  import BtnContainer from './BtnContainer'
  import EventList from './EventList'

  export default {
    name: 'index',
    components: {TopBar, Viewer, BtnContainer, EventList},
    methods: {

      // 添加事件
      addEvent (data) {
        this.$refs.eventList.showModal(data)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "./index.less";
</style>
