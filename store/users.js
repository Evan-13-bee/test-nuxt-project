export const state = () => ({
  users: []
})

export const getters = {
  users: (state) => state.users
}

export const mutations = {
  setUsers(state, {users}) {
    state.users = users
  }
}
export const actions = {
  async loadUsers({commit}) {
    const users = await this.$axios.get('https://jsonplaceholder.typicode.com/users') 
    commit('setUsers', {users: users.data})
  }
}