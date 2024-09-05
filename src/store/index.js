import Vue from 'vue'
import Vuex from 'vuex'

import FormStore from './Form'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    FormStore,
  }
})

Vue.prototype.$store = store

export default store