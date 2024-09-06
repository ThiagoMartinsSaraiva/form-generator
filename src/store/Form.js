export default {
  namespaced: true,
  state: {
    currentField: 0,
    fields: [],
    thankyouFields: [],
    head: {},
    style: {},
    options: {},
    loading: false,
    formData: {},
    thankyou: false,
    selectedThankyou: null,
  },
  getters: {
    getFiedlCount(state) {
      return state.fields.length
    },
    getCurrentField(state) {
      return state.currentField
    },
    getFields(state) {
      return state.fields
    },
    getThankyouFields(state) {
      return state.thankyouFields
    },
    getState(state) {
      return state
    },
    isLastField(state) {
      const writeInput = state.fields.filter(f => f.type !== 'thankyou')
      return state.currentField === writeInput.length - 1
    },
    isLoading(state) {
      return state.loading
    },
    getFormData(state) {
      return state.formData
    },
    isThankyou(state) {
      return state.thankyou
    },
    getSelectedThankyou(state) {
      return state.selectedThankyou
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
      if (state.currentField === state.fields.length - 1) {
        return 
      } 
      state.currentField++
    },
    UPDATE_FIELDS(state, fields) {
      state.fields = fields
    },
    UPDATE_THANKYOU_FIELDS(state, thankyouFields) {
      state.thankyouFields = thankyouFields
    },
    UPDATE_HEAD(state, head) {
      state.head = head
    },
    UPDATE_STYLE(state, style) {
      state.style = style
    },
    UPDATE_OPTIONS(state, options) {
      state.options = options
    },
    SET_LOADING(state, loading) {
      state.loading = loading
    },
    SET_FORM_DATA(state, { field, value }) {
      state.formData[field] = value
    },
    SET_THANKYOU_FIELDS(state, thankyouFields) {
      state.thankyouFields = thankyouFields
    },
    SET_SELECTED_THANKYOU(state, selectedThankyou) {
      state.selectedThankyou = selectedThankyou
    }
  },
  actions: {
    async setThankyouFields({ commit }, thankyouFields) {
      commit('SET_THANKYOU_FIELDS', thankyouFields)
    },
    async setSelectedThankyou({ commit }, selectedThankyou) {
      commit('SET_SELECTED_THANKYOU', selectedThankyou)
    },
    async nextQuestion({ commit }) {
      commit('NEXT_QUESTION')
      return true
    },
    async previousQuestion({ commit }) {
      commit('PREVIOUS_QUESTION')
      return true
    },
    async updateFields({ commit }, fields) {
      commit('UPDATE_FIELDS', fields)
    },
    async updateHead({ commit }, head) {
      commit('UPDATE_HEAD', head)
    },
    async updateStyle({ commit }, style) {
      commit('UPDATE_STYLE', style)
    },
    async updateOptions({ commit }, options) {
      commit('UPDATE_OPTIONS', options)
    },
    async submitItem({ commit, dispatch }, { field, value }) {
      try {

        commit('SET_LOADING', true)
        commit('SET_FORM_DATA', { field, value })
        await fetch('https://webhook.site/855b44b1-6394-4e81-ac69-8421d969e838', {
          method: 'POST',
          body: JSON.stringify({
            [field]: value
          })
        })

      } catch {
        console.error('failed to submit form')
      } finally {
        commit('SET_LOADING', false)
        dispatch('nextQuestion')
      }
    }
  },
}