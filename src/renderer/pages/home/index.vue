<template>
  <div class="home-page">

    <!-- 顶部地址输入框 -->
    <el-input placeholder="请输入页面地址" v-model="url" class="url-input">
      <template slot="prepend">页面地址：</template>
      <template slot="append">→</template>
    </el-input>


    <div class="page-container">

      <!-- Webview -->
      <div class="webview-container">
        <div class="webview-header">
          <div class="back"><</div>
          <h1>TITLE</h1>
          <div class="forward">></div>
        </div>
        <webview class="webview" :src="url"></webview>
      </div>

      <!-- 中部按钮组 -->
      <div class="btn-container">
        <i class="fa fa-mouse-pointer" :class="{active:selecting}" @click="toggleSelect"></i>
      </div>

      <!-- 右侧列表 -->
      <div class="event-container">
        1234 TODO
      </div>
    </div>

  </div>
</template>

<script>
  import insertJs from './insert'

  export default {
    name: 'index',
    data () {
      return {
        webview: null, // webview 对象
        url: 'https://www.github.com/', // 页面地址
        selecting: false // 是否正在选取元素
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

      // 切换 Dom 选择
      toggleSelect () {
        let insert = ''
        if (this.selecting) {
          insert = 'selectPlugin.stopSelect()'
        } else {
          insert = 'selectPlugin.startSelect()'
        }
        this.selecting = !this.selecting
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
