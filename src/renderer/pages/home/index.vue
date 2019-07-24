<template>
  <div class="home-page">

    <el-input placeholder="请输入页面地址" v-model="url">
      <template slot="prepend">页面地址：</template>
    </el-input>

    <div class="webview-container">
      <div class="webview-header"></div>
      <webview class="webview" :src="url"></webview>
    </div>

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
        webview: null, // webview 对象
        url: 'https://www.github.com/' // 页面地址
      }
    },
    methods: {

      // 页面初始化
      init () {
        this.webview = document.querySelector('webview')
        this.webview.addEventListener('dom-ready', () => {
          this.webview.executeJavaScript(insertJs)
        })

        this.webview.addEventListener('will-navigate', ({url}) => {
          this.url = url
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
  @import "./index.less";
</style>
