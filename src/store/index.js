import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "Job Application Log",
    loggedIn: false,
    jobs: [
      {
        company: "Amazon Web Services",
        title: "Software Engineer - Lambda",
        dateApplied: "01/01/2020",
        value: 33,
        status: "",
        color: "blue"
      },
      {
        company: "Apple",
        title: "Android Engineer",
        dateApplied: "01/25/2020",
        value: 33,
        status: "",
        color: "blue"
      },
      {
        company: "Google",
        title: "Glorified Pencil Pushers",
        dateApplied: "02/02/2020",
        value: 100,
        status: "Rejected",
        color: "red"
      },
      {
        company: "Facebook",
        title: "Illegal Data Miners",
        dateApplied: "02/05/2020",
        value: 100,
        status: "Rejected",
        color: "red"
      }
    ]
  },
  mutations: {
    changeLoggedIn(state, val) {
      state.loggedIn = val;
    }
  },
  actions: {
  },
  modules: {
  }
})
