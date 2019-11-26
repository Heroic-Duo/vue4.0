import {
  getSearh
} from './../../../../api/withClients'
import axios from 'axios'
import Cookie from 'js-cookie'

export default {
  // getSearchData (state, route) {
  //   getSearh({
  //     params: {
  //       name: state.searchValue
  //     }
  //   }).then(res => {
  //     let data = res.data.data
  //     console.log('11', res.data.data)
  //     state.searchTransfer = data.map((vlaue) => {
  //       return {
  //         value: vlaue,
  //         label: vlaue.name
  //       }
  //     })
  //   }).catch(err => {
  //     console.log('555555555', err)
  //   })
  // },
  remoteMethod (state, query) {
    
    // if (query !== '') {
    //   axios.get('/api/index/searh/searh', {
    //     params: {
    //       name: query
    //     }
    //   }).then(res => {
    //     console.log(res.data.data)

    //     if (res.data.status == true) {
    //       state.searchInformationShow = true
    //       let data = res.data.data
    //       setTimeout(() => {
    //         state.searchInformationShow = false
    //         state.searchTransfer = data.map(item => {
    //           return {
    //             value: item,
    //             label: item.name
    //           }
    //         })
    //         state.setSearchData = state.searchTransfer.filter(
    //           item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
    //         )
    //       }, 200)
    //     } else {

    //     }
    //   })
    // } else {
    //   state.setSearchData = []
    // }
  },
  // remoteMethodSearch (state, query) {
  //   if (query !== '') {
  //     state.searchInformationShow = true
  //     setTimeout(() => {
  //       state.searchInformationShow = false
  //       state.setSearchData = state.searchTransfer.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1)
  //     }, 200)
  //   } else {
  //     state.setSearchData = []
  //   }
  // },
  // setSearchInformation (state, value) {
  //   state.searchInformation = state.setSearchData.map(item => {
  //     if (item.label === value) {
  //       return item.value
  //     } else {
  //       return 0
  //     }
  //   })
  // }
}
