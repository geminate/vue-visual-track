import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    webviewUrl: {url: 'http://localhost:8081/#/', change: false}, // webview 当前URL / URL改变是否需要刷新webview
    selecting: false // 当前是否正在选择 DOM
  },
  getters: {},
  mutations: {

    setWebviewUrl (state, webviewUrl) {
      state.webviewUrl = webviewUrl
    },

    toggleSelecting (state) {
      state.selecting = !state.selecting
    }
  }
})
