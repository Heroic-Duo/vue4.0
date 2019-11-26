export default {
  getUser: ({
    commit
  }) => {
    commit('getUser')
  },
  getUsermaterial: ({
    commit
  }) => {
    commit('getUsermaterial')
  },
  setUsermaterial: ({
    commit
  },data) => {
    commit('setUsermaterial',data)
  },
}
