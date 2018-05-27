/**
 * Import Dependency
 */
import Vue from 'vue'
import Vuex from 'vuex'

/**
 * Root Scope of VUEX
 */
import { state, actions, mutations } from './root'

/**
 * Module Scope of VUEX
 */
/**
 * Config
 */
Vue.use(Vuex)

/**
 * Export
 */
export default new Vuex.Store({
  state,
  actions,
  mutations,
  strict: true
})
