<!-- 右侧事件列表 -->
<template>
  <div class="event-list">

    <!-- 顶部按钮组 -->
    <div class="btn-container">
      <i class="fa fa-plus" @click="showModal"></i>
      <i class="fa fa-trash"></i>
      <i class="fa fa-pencil"></i>
      <i class="fa fa-floppy-o right"></i>
    </div>

    <!-- 事件列表 -->
    <div class="event-container">

      <div class="event-item" v-for="(item,i) in eventList">
        <div class="info-item">
          <label>事件级别：</label><span>区域级</span>
        </div>
        <div class="info-item">
          <label>页面地址：</label><span>{{item.page}}</span>
        </div>
        <div class="info-item">
          <label>选择器：</label><span>{{item.selector}}</span>
        </div>
        <div class="info-item">
          <label>事件类型：</label><span>1</span>
        </div>
      </div>
    </div>

    <!-- 添加弹框 -->
    <event-modal ref="eventModal" @saveEvent="saveEvent"></event-modal>
  </div>
</template>

<script>
  import EventModal from './EventModal'

  export default {
    name: 'Viewer',
    components: {EventModal},
    data () {
      return {
        eventList: [] // 事件列表
      }
    },
    methods: {

      // 展示事件弹框
      showModal (data) {
        this.$refs.eventModal.showModal(data)
      },

      // 添加事件
      saveEvent (data) {
        this.eventList.push(data)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "./index.less";
</style>
