import Vue from 'vue'
import Vuex from 'vuex'
import tab from './modules/tab'
import getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  /**模块 */
  modules: {
    tab
  }
})
