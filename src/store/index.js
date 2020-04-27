import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

import { isEmpty } from 'lodash'

// import persistedState from '~/plugins/persistedState'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    // admin,
    // pay,
    // lotto,
    // reposal,
    // '3rdGames': games,
  },

  state: {
    user: {
      ip: '127.0.0.1',
    },
    title: '',
  },

  getters: {
    ip: () => state => state.user.ip,
  },

  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setState(state, { key, value }) {
      state[key] = value
    },
  },

  actions: {
    getUser({ commit, state: { user } }, callback = () => {}) {
      return Vue.http.post('user/find-info').then(({ data }) => {
        const result = { ...user, ...data }
        commit('setUser', result)
        callback(result)
      })
    },
    async getRechargeNote({ commit }) {
      try {
        const value = (await Vue.http.post('user/get-recharge-log', {})).data
        let rechargeContent = {}
        let hasBetAmountGoal = true
        let currentPercent = 0
        if ( value.goal_bet_amount && value.goal_bet_amount != 0 ) {// eslint-disable-line
          const calper = (Math.floor((value.total_bet_amount / value.goal_bet_amount) * 10000)) / 100
          currentPercent = calper > 100 ? 100 : calper
        } else {
          hasBetAmountGoal = false
          currentPercent = 100
        }

        rechargeContent = {
          currentRecharged: (value.total_saving_balance * 1).toFixed(4),
          currentLimit: (value.goal_bet_amount * 1).toFixed(4),
          currentPercent,
          gameTypes: value.types,
          hasBetAmountGoal,
        }
        commit('setState', { key: 'rechargeContent', value: rechargeContent })
      } catch (err) {
        console.error(err)
      }
    },
  },

  // plugins: [createPersistedState(persistedState)],
})

store.registerModule('base', {
  state: {
    pageLoading: false,
  },
  mutations: {
    updatePageStatus(state, payload) {
      state.pageLoading = payload.pageLoading
    },
  },
})

export default store
