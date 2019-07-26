import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    webviewUrl: 'http://localhost:8080/#/loan/CompanyLoan', // webview 当前URL
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
