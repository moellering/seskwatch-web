import Vue from 'vue'
import Vuex from 'vuex'

import App from './App.vue'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    sessions: {
      loading: false,
      error: null,
      data: [],
    },
  },
  mutations: {
    fetchSessionsDone (state, sessions) {
      state.sessions.loading = false
      state.sessions.error = null
      state.sessions.data = sessions
    },
    fetchSessionsStart (state) {
      state.sessions.loading = true
      state.sessions.error = null
    },
    fetchSessionsError (state, err) {
      state.sessions.loading = false
      state.sessions.error = err
    },
  },
  actions: {
    fetchSessions ({commit}) {
      commit("fetchSessionsStart")
      fetch("/api/sessions").then((res) => {
        if (res.ok) {
          res.json().then((jsonData) => {
            commit("fetchSessionsDone", jsonData)
          })
        } else {
          commit("fetchSessionsError", res.statusText)
        }
      }, (err) => {
        commit("fetchSessionsError", err)
      })
    }
  }
})

new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app')
