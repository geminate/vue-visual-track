<!-- Webview -->
<template>
  <div class="viewer">
    <div class="header">
      <div class="back"><</div>
      <h1>TITLE</h1>
      <div class="forward">></div>
    </div>
    <webview ref="webview" class="webview" :src="webviewUrl" @dom-ready="onDomReady"
             @will-navigate="onWillNavigate"></webview>
  </div>
</template>

<script>
  import insertJs from './insert'

  export default {
    name: 'Viewer',
    props: ['webviewUrl', 'selecting'],
    data () {
      return {}
    },
    watch: {
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

      onWillNavigate ({url}) {
        this.$emit('webviewUrlChange', url)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "./index.less";
</style>
