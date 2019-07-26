<!-- 中部按钮组 -->
<template>
  <div class="btn-container">
    <i class="fa fa-mouse-pointer" :class="{active:selecting}" @click="toggleSelecting"></i>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    name: 'BtnContainer',
    computed: {
      ...mapState(['selecting'])
    },
    methods: {
      ...mapMutations(['toggleSelecting'])
    }
  }
</script>

<style lang="less" scoped>
  @import "./index.less";
</style>
