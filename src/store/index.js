import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
// import searh from './modules/searh'
// import Menu from './modules/Menu'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    imgUrl: '//img.pipacoding.com/assets/pc/assistantTeacher/'
  },
  mutations: {
    //
  },
  actions: {

  },
  getters: {
    imgUrl (state) {
      return state.imgUrl
    }
  },
  modules: {
    user
  }
})

export default store
