import {
  getUserData,
  seteuserData
} from '@/api/withClients'
import Cookie from 'js-cookie'

export default {
  // 获取用户信息
  getUser(state) {
    // if (Cookie.get('user')) {
    if (sessionStorage.getItem('user')||Cookie.get('user')) {
     
      state.data =JSON.parse(Cookie.get('user'));
     
      console.log(state.data.lenght,'pppppppppp')
      // state.userData = JSON.parse(sessionStorage.getItem('user'))
      // console.log( JSON.parse(Cookie.get('usda'))) 
      // JSON.parse(Cookie.get('usda'));
    } else {
      getUserData({
        params: {
          name: Cookie.get('user')
        }
      }).then(res => {
        state.userData = res.data.data
        Cookie.set('usda', res.data.data, {
          expires: 0.1,
          path: '/'
        })
        state.infoUser = true
      }).catch(err => {
        console.log(err)
      })
    }
  },
  // 获取用户信息后 封装信息变量名
  getUsermaterial(state) {
    if (Cookie.get('usda')) {
      state.infoUser = true
      state.userData = JSON.parse(Cookie.get('usda'))
      state.materialManx = state.userData.material[0]
      if (state.materialManx.icon) {
        state.material.icon = state.materialManx.icon
      }
      if (state.materialManx.phone) {
        state.material.phone = state.materialManx.phone
      }
      if (state.materialManx.age) {
        state.material.age = state.materialManx.age
      }
      if (state.materialManx.name) {
        state.material.Name = state.materialManx.name
      }
      if (state.materialManx.sex) {
        state.material.sex = state.materialManx.sex
      }
      if (state.materialManx.field) {
        state.material.field = state.materialManx.field
      }
      if (state.materialManx.interest) {
        state.material.interest = state.materialManx.interest
      }
      if (state.materialManx.signature) {
        state.material.signature = state.materialManx.signature
      }
      if (state.materialManx.introduce) {
        state.material.introduce = state.materialManx.introduce
      }
      if (state.materialManx.birthday) {
        state.material.birthday = state.materialManx.birthday
      }
      if (state.materialManx.idenname) {
        state.material.idenname = state.materialManx.idenname
      }
      if (state.materialManx.idennumber) {
        state.material.idennumber = state.materialManx.idennumber
      } 
    }
  },
  //设置资料
  setUsermaterial(state, data) {
    
    seteuserData({
      params: {
        name: Cookie.get('user'),
        material: data ,
        // file: data.file
      }
    }).then(res => {
      state.update = true
      Cookie.remove('usda')
      state.infoUser = true
      state.materialManx = ''
      state.userData = ''
      
      Cookie.set('usda', res.data.data, {
        expires: 0.1,
        path: '/'
      })
      
    }).catch(err => {
      console.log(err)
      state.update = false
    })
    
  }
}
