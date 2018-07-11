import Vue from 'vue'
import Vuex from 'vuex'

import api from '../api'
import * as types from './mutations-types'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: '',
    statusJson: [],
    mockJson: []
  },
  actions: {
    defaultAction({ commit }, param) {},
    async getStatus({ commit }) {
      const response = await api.getStatus()
      commit(types.GETSTATUS, response.data)
    },
    async getMock({ commit }) {
      const response = await api.getMock()
      commit(types.GETMOCK, response.data)
    }
  },
  mutations: {
    [types.DEFAULTMUTATIONS](state, response) {
      state.id = 1
    },
    [types.GETSTATUS](state, response) {
      state.statusJson = response.data
    },
    [types.GETMOCK](state, response) {
      state.mockJson = response.data
    }
  },
  getter: {
    getterId: state => {
      return state.id
    }
  }
})
