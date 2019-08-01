<template>
  <el-dialog title="添加事件监控" :visible.sync="show" @closed="onClosed">

    <el-form :model="form" label-position="right" label-width="80px">

      <el-form-item label="事件级别">
        <el-select v-model="form.level" placeholder="请选择">
          <el-option label="区域级" value="1"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="页面地址">
        <el-input v-model="form.page" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="选择器">
        <el-input type="textarea" :rows="4" v-model="form.selector" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="事件类型">
        <el-select v-model="form.type" placeholder="请选择">
          <el-option label="点击次数" value="0"></el-option>
        </el-select>
      </el-form-item>

    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button @click="hideModal">取 消</el-button>
      <el-button type="primary" @click="saveEvent">确 定</el-button>
    </div>

  </el-dialog>
</template>

<script>
  export default {
    name: 'EventModal',
    data () {
      return {
        show: false,
        form: {
          level: '1', // 事件等级
          page: '', // 页面地址
          selector: '', // 选择器
          type: '0', // 时间类型
          id: ''
        }
      }
    },
    methods: {

      // 保存事件
      saveEvent () {
        this.$emit('saveEvent', this.form)
        this.hideModal()
      },

      // 展示模态框
      showModal (data) {
        this.form = {...this.form, ...data}
        this.show = true
      },

      // 隐藏模态框
      hideModal () {
        this.show = false
      },

      // 模态框隐藏回调
      onClosed () {
        this._data = Object.assign(this._data, this.$options.data())
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "./index.less";
</style>
