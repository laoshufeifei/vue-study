import Vue from 'vue'
import Vuex, { mapGetters } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    g_counter: 666
  },
  modules: {
  },
  computed: mapGetters([
    'getGlobalCounter'
  ]),
  getters: {
    getGlobalCounter (state) {
      return state.g_counter
    }
  },
  actions: {
    incrementActions ({ commit, state }) {
      commit('incrementMutaions')
    }
  },
  mutations: {
    incrementMutaions (state) {
      state.g_counter++
    }
  }
})
