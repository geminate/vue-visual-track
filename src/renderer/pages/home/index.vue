<template>
  <div class="home-page">
    <webview id="foo" src="https://www.github.com/" style="display:inline-flex; width:414px; height:736px"></webview>
    <button @click="startSelect">start select</button>
    <button @click="stopSelect">end select</button>
  </div>
</template>

<script>
  import insertJs from './insert'

  export default {
    name: 'index',
    data () {
      return {
        webview: null
      }
    },
    methods: {

      init () {
        this.webview = document.querySelector('webview')
        this.webview.addEventListener('dom-ready', () => {
          this.webview.executeJavaScript(insertJs)
        })
      },

      startSelect () {
        const insert = 'selectPlugin.startSelect()'
        this.webview.executeJavaScript(insert)
      },

      stopSelect () {
        const insert = 'selectPlugin.stopSelect()'
        this.webview.executeJavaScript(insert)
      }
    },
    mounted () {
      this.init()
    }
  }
</script>

<style lang="less" scoped>
  .home-page {
    width: 100vw;
    height: 100vh;
    background: wheat;
  }
</style>
