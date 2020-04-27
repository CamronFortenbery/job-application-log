import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "Job Application Log",
    loggedIn: false,
    user: {
        username: "",
        password: "",
    },
  },
  mutations: {
    changeLoggedIn(state, val) {
      state.loggedIn = val;
    },
    changeUsername(state, val) {
      state.user.username = val;
    },
    changePassword(state, val) {
      state.user.password = val;
    },
  },
  actions: {
  },
  modules: {
  }
})
