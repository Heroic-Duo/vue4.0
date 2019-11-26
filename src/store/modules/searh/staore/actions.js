export default {
  getSearchData: ({
    commit
  }, route) => {
    commit('getSearchData', route)
  },
  remoteMethodSearch: ({
    commit
  }, query) => {
    commit('remoteMethodSearch', query)
  },
  setSearchInformation: ({
    state,
    commit
  }, value) => {
    state.searchInformation = []
    commit('setSearchInformation', value)
  },
  remoteMethod: ({
    commit
  }, query) => {
    commit('remoteMethod', query)
  },
}
