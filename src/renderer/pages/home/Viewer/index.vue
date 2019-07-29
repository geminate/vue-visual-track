<!-- Webview -->
<template>
  <div class="viewer">

    <!-- 浏览器标题栏 -->
    <div class="header">
      <div class="back" v-if="canGoBack" @click="goBack"><</div>
      <h1>{{title}}</h1>
      <div class="forward" v-if="canGoForward" @click="goForward">></div>
    </div>


    <!-- 浏览器内容 -->
    <webview ref="webview"
             nodeintegration
             class="webview"
             src="http://localhost:8081/#/"
             @dom-ready="onDomReady"
             @console-message="onConsoleMessage"
             @ipc-message="onIpcMessage"
             @page-title-updated="onPageTitleUpdate"
             @did-navigate-in-page="onDidNavigateInPage"
    >
    </webview>

  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import URL from 'url'
  import insertJs from './insert.jsraw'
  // import insertJs from './insert'
  import electron from 'electron'
  import IPC from '@/../IPC.js'

  export default {
    name: 'Viewer',
    data () {
      return {
        canGoBack: false,
        canGoForward: false,
        title: ''
      }
    },
    computed: {
      ...mapState(['webviewUrl', 'selecting'])
    },
    watch: {
      // DOM 选取状态
      selecting () {
        let insert = ''
        if (this.selecting) {
          insert = 'selectPlugin.startSelect()'
        } else {
          insert = 'selectPlugin.stopSelect()'
        }
        this.$refs.webview.executeJavaScript(insert)
      },

      webviewUrl ({url, change}) {
        change && this.$refs.webview.loadURL(url)
      }
    },
    methods: {
      ...mapMutations(['setWebviewUrl']),

      // 初始化
      init () {
        electron.ipcRenderer.on(IPC.PRESS_CTRL_Q, (e) => { // 主进程监控到按键按下后发送至渲染进程，渲染进程再发送到 webview 内
          this.selecting && this.$refs.webview.executeJavaScript('selectPlugin.select()')
        })
      },

      // webview 返回的消息
      onIpcMessage ({channel}) {
        const url = URL.parse(this.$refs.webview.getURL()).hash
        const obj = {
          level: '1',
          page: url,
          selector: channel
        }
        this.$emit('addEvent', obj)
      },

      // Webview 加载完成回调
      onDomReady () {
        this.$refs.webview.executeJavaScript(insertJs)
      },

      onDidNavigateInPage ({url}) {
        this.setWebviewUrl({url, change: false})
        this.canGoBack = this.$refs.webview.canGoBack()
        this.canGoForward = this.$refs.webview.canGoForward()
      },

      // Webview 控制台收到消息回调
      onConsoleMessage ({message}) {
        console.log(message)
      },

      // 页面标题改变事件
      onPageTitleUpdate () {
        this.title = this.$refs.webview.getTitle()
      },

      // Webview 前进
      goForward () {
        this.$refs.webview.goForward()
      },

      // Webview 后退
      goBack () {
        this.$refs.webview.goBack()
      }
    },
    mounted () {
      this.init()
    }
  }
</script>

<style lang="less" scoped>
  @import "./index.less";
</style>
