<!-- 右侧事件列表 -->
<template>
  <div class="event-list">
    <div class="btn-container">
      <i class="fa fa-plus" @click="showModal"></i>
      <i class="fa fa-trash"></i>
      <i class="fa fa-pencil"></i>
      <i class="fa fa-floppy-o right"></i>
    </div>

    <event-modal ref="eventModal"></event-modal>
  </div>
</template>

<script>
  import EventModal from './EventModal'

  export default {
    name: 'Viewer',
    components: {EventModal},
    methods: {

      // 展示事件弹框
      showModal (data) {
        this.$refs.eventModal.showModal(data)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "./index.less";
</style>
