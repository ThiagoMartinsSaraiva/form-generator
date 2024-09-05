/* eslint-disable no-unused-vars */
export default {
  namespaced: true,
  state: {
    currentField: 0,
    fields: [],
    head: {},
    style: {},
    options: {},
  },
  getters: {
    getFiedlCount(state) {
      return state.fields.length
    },
    getCurrentField(state) {
      return state.currentField
    },
  },
  mutations: {
    PREVIOUS_QUESTION(state) {
      if (state.currentField == 0) {
        return
      }

      state.currentField--
    },
    NEXT_QUESTION(state) {
      if (state.currentField == state.fields.length - 1) {
        return 
      } 

      state.currentField++
    },
  },
  actions: {
    async nextQuestion({ commit }, _) {
      console.log('chamou o action')
      await commit('NEXT_QUESTION')
      return true
    },
    async previousQuestion({ commit }, _) {
      await commit('PREVIOUS_QUESTION')
      return true
    },
  },
}