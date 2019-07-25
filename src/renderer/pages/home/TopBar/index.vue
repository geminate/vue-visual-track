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
  export default {
    name: 'TopBar',
    data () {
      return {
        url: 'https://github.com/' // 输入框中的地址
      }
    },
    methods: {

      // 触发页面跳转
      goUrl () {
        this.$refs.urlInput.blur()
        this.$emit('inputUrlChange', this.url)
      },

      changeUrl (url) {
        this.url = url
      }
    }
  }
</script>

<style lang="less" scoped>
  @import './index.less';
</style>
