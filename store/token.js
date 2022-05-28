export const state = () => ({
  token: null
})

export const getters = {
  hasToken: (state) => state.token
}

export const mutations = {
  setToken(state, password) {
    if (password === 'admin') {
      state.token = password
    }else {
      state.token = false
    }
  },
  clearToken(state) {
    state.token = null
  }
}

export const actions = {
  login({ commit }, { password }) {
    commit('setToken', password)
  },

  logout({ commit }) {
    commit('clearToken')
  },

}