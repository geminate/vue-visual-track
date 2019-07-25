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
             :src="webviewUrl"
             @dom-ready="onDomReady"
             @did-navigate="onDidNavigate"
             @console-message="onConsoleMessage"
             @ipc-message="onIpcMessage"
             @page-title-updated="onPageTitleUpdate"
    >
    </webview>
  </div>
</template>

<script>
  import insertJs from './insert'
  import electron from 'electron'
  import IPC from '@/../IPC.js'

  export default {
    name: 'Viewer',
    props: ['webviewUrl', 'selecting'],
    data () {
      return {
        canGoBack: false,
        canGoForward: false,
        title: ''
      }
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
      }
    },
    methods: {

      // 初始化
      init () {
        electron.ipcRenderer.on(IPC.PRESS_CTRL_Q, (e) => { // 主进程监控到按键按下后发送至渲染进程，渲染进程再发送到 webview 内
          this.$refs.webview.executeJavaScript('selectPlugin.select()')
        })
      },

      onIpcMessage ({channel}) {
        console.log(channel)
      },

      // Webview 加载完成回调
      onDomReady () {
        this.$refs.webview.executeJavaScript(insertJs)
        const webContents = this.$refs.webview.getWebContents()
        webContents.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1')
        webContents.enableDeviceEmulation({
          screenPosition: 'mobile',
          screenSize: {width: 414, height: 736},
          viewSize: {width: 414, height: 736}
        })
      },

      // Webview 页面跳转完成回调
      onDidNavigate ({url}) {
        this.$emit('webviewUrlChange', url)
        this.canGoBack = this.$refs.webview.canGoBack()
        this.canGoForward = this.$refs.webview.canGoForward()
      },

      // Webview 控制台收到消息回调
      onConsoleMessage ({message}) {
        console.log(message)
      },

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
