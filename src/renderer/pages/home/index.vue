<template>
  <div class="home-page">

    <!-- 顶部地址输入框 -->
    <top-bar ref="topBar" @inputUrlChange="inputUrlChange"></top-bar>

    <div class="page-container">

      <!-- Webview -->
      <viewer :webviewUrl="webviewUrl" @webviewUrlChange="webviewUrlChange" :selecting="selecting"></viewer>

      <!-- 中部按钮组 -->
      <btn-container @toggleSelect="toggleSelect"></btn-container>

      <!-- 右侧列表 -->
      <event-list></event-list>
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
    data () {
      return {
        webviewUrl: '', // webview 页面地址
        selecting: false // 是否正在选取元素
      }
    },
    methods: {

      // 输入框地址改变事件
      inputUrlChange (webviewUrl) {
        this.webviewUrl = webviewUrl
      },

      // webview 地址改变事件
      webviewUrlChange (webviewUrl) {
        this.$refs.topBar.changeUrl(webviewUrl)
      },

      // 切换 Dom 选择
      toggleSelect (selecting) {
        this.selecting = selecting
      }

    }
  }
</script>

<style lang="less" scoped>
  @import "./index.less";
</style>
