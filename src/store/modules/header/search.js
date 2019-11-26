import {
  searchData
} from './../../../api/header/search'

const Search = {
  state: {
    searchValue: '',
    setSearchData: [
      {
        value: '',
        label: ''
      }
    ],
    searchInformation: '',
    searchInformationShow: false,
    searchTransfer: []
  },
  mutations: {
    getSearchData (state, route) {
      searchData({
        state: null,
        params: null
      }).then(res => {
        let data = res.data.data
        console.log('11', res.data.data)
        state.searchTransfer = data.map((vlaue) => {
          return {
            value: vlaue,
            label: vlaue.name
          }
        })
      }).catch(err => {
        console.log('555555555', err)
      })
    },
    remoteMethodSearch (state, query) {
      if (query !== '') {
        state.searchInformationShow = true
        setTimeout(() => {
          state.searchInformationShow = false
          state.setSearchData = state.searchTransfer.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1)
        }, 200)
      } else {
        state.setSearchData = []
      }
    },
    setSearchInformation (state, value) {
      state.searchInformation = state.setSearchData.map(item => {
        if (item.label === value) {
          return item.value
        } else {
          return 0
        }
      })
    }
  },
  actions: {
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
    }
  },
  getters: {
    searchValue (state) {
      return state.searchValue
    },
    setSearchData (state) {
      return state.setSearchData
    },
    searchInformation (state) {
      return state.searchInformation
    },
    searchInformationShow (state) {
      return state.searchInformationShow
    }
  }
}
export default Search
