<!-- 顶部地址栏导航 -->
<template>
  <div class="top-bar">
    <el-input ref="urlInput" placeholder="请输入页面地址" v-model="url" class="url-input" @keyup.enter.native="goUrl">
      <div slot="prepend">页面地址：</div>
      <div slot="append" @click="goUrl" class="confirm-btn">→</div>
    </el-input>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    name: 'TopBar',
    data () {
      return {
        url: '' // 输入框中的地址
      }
    },
    computed: {
      ...mapState(['webviewUrl'])
    },
    watch: {

      // webview 路由变化时需要同步修改输入框的值
      webviewUrl () {
        this.url = this.webviewUrl.url
      }
    },
    methods: {
      ...mapMutations(['setWebviewUrl']),

      // 触发页面跳转
      goUrl () {
        this.$refs.urlInput.blur()
        this.setWebviewUrl({url: this.url, change: true})
      }
    },
    mounted () {
      this.url = this.webviewUrl.url
    }
  }
</script>

<style lang="less" scoped>
  @import './index.less';
</style>
