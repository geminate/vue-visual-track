<!-- 中部按钮组 -->
<template>
  <div class="btn-container">
    <i class="fa fa-mouse-pointer" :class="{active:selecting}" @click="toggleSelect"></i>
  </div>
</template>

<script>
  export default {
    name: 'BtnContainer',
    data () {
      return {
        selecting: false // 是否正在选取元素
      }
    },
    methods: {

      // 切换 Dom 选择
      toggleSelect () {
        this.selecting = !this.selecting
        this.$emit('toggleSelect', this.selecting)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "./index.less";
</style>
