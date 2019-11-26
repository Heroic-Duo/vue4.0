import {
  getMenu,
  getMenuDaojia,
  getMenuJingdian,
  getMenushiLiao,
  getMenuRujia,
  getMenuQin,
  getMenuQi,
  getMenuShu,
  getMenuHua,
  getMenuZhenci,
  getMenuGuasha,
  getMenuHuoguan,
  getMenuAijiu
} from './../../../../api/withClients'

export default {

  getMenu(state) {
    getMenu({
      params: {
        name: '导航PC'
      }
    }).then(res => {
      state.menu = res.data.data
    }).catch(err => {
      console.log(err)
    })
  },
  getMenuDaojia(state) {
    getMenuDaojia({
      params: {
        name: '道家养生'
      }
    }).then(res => {
      state.daojia = res.data.data
    }).catch(err => {
      console.log(err)
    })
  },
  getListDaojia(state, data) {
    // let name= this.$route.query.name s
    // console.log(route.query.name, '111111111111111')
    // console.log(route.params.name, '111111111111111')
    // console.log(data.value, '111111111111111')
    getMenuDaojia({
      params: {
        name: data.route.query.name
      }
    }).then(res => {
      state.daodata = res.data.data
    }).catch(err => {
      console.log(err)
    })
  },
  getMenuRujia(state) {
    getMenuRujia({
      params: {
        name: '儒家养生'
      }
    }).then(res => {
      state.rujia = res.data.data
    }).catch(err => {
      console.log(err)
    })
  },
  getListRujia(state, route) {
    getMenuRujia({
      params: {
        name: route.query.name
      }
    }).then(res => {
      state.rulist = res.data.data
    }).catch(err => {
      console.log(err)
    })
  },
  getdataRujia(state, route) {
    getMenuRujia({
      params: {
        name: route.query.name
      }
    }).then(res => {
      state.rudata = res.data.data
    }).catch(err => {
      console.log(err)
    })
  },
  getMenuJingdian(state) {
    getMenuJingdian({
      params: {
        name: '黄帝内经'
      }
    }).then(res => {
      state.jingdian = res.data.data
    }).catch(err => {
      console.log(err)
    })
  },
  getlistJingdian(state, route) {
    getMenuJingdian({
      params: {
        name: route.query.name
      }
    }).then(res => {
      state.jdlist = res.data.data
    }).catch(err => {
      console.log(err)
    })
  },
  getdataJingdian(state, route) {
    getMenuJingdian({
      params: {
        name: route.query.name
      }
    }).then(res => {
      state.jddata = res.data.data
    }).catch(err => {
      console.log(err)
    })
  },
  getMenushiLiao(state) {
    getMenushiLiao({
      params: {
        name: '食疗养生'
      }
    }).then(res => {
      state.shiliao = res.data.data
    }).catch(err => {
      console.log(err)
    })
  },
  getdatashiLiao(state, route) {
    getMenushiLiao({
      params: {
        name: route.query.name
      }
    }).then(res => {
      state.sldata = res.data.data
      if (state.sldata.pid === state.slCai) {
        state.slimgUrl = state.slimgCai
      }
      if (state.sldata.pid === state.slGuo) {
        state.slimgUrl = state.slimgGuo
      }
      if (state.sldata.pid === state.slNai) {
        state.slimgUrl = state.slimgNai
      }
      if (state.sldata.pid === state.slZa) {
        state.slimgUrl = state.slimgZa
      }
      if (state.sldata.pid === state.slLiao) {
        state.slimgUrl = state.slimgLiao
      }
      if (state.sldata.pid === state.slTa) {
        state.slimgUrl = state.slimgTa
      }
    }).catch(err => {
      console.log(err)
    })
  },
  getMenuQin(state) {
    getMenuQin({
      params: {
        name: '五音简介'
      }
    }).then(res => {
      state.qin = res.data.data
    }).catch(err => {
      console.log(err)
    })
  },
  getlistQin(state, route) {
    getMenuQin({
      params: {
        name: route.query.name
      }
    }).then(res => {
      state.qinlist = res.data.data
    }).catch(err => {
      console.log(err)
    })
  },
  getdataQin(state, route) {
    getMenuQin({
      params: {
        name: route.query.name
      }
    }).then(res => {
      state.qindata = res.data.data
    }).catch(err => {
      console.log(err)
    })
  },
  getMenuQi(state) {
    getMenuQi({
      params: {
        name: '棋类简介'
      }
    }).then(res => {
      state.qi = res.data.data
    }).catch(err => {
      console.log(err)
    })
  },
  getdatauQi(state, route) {
    getMenuQi({
      params: {
        name: route.query.name
      }
    }).then(res => {
      state.qidata = res.data.data
    }).catch(err => {
      console.log(err)
    })
  },
  getMenuShu(state) {
    getMenuShu({
      params: {
        name: '书法简介'
      }
    }).then(res => {
      state.shu = res.data.data
    }).catch(err => {
      console.log(err)
    })
  },
  getdataShu(state, route) {
    getMenuShu({
      params: {
        name: route.query.name
      }
    }).then(res => {
      state.shudata = res.data.data
    }).catch(err => {
      console.log(err)
    })
  },
  getMenuHua(state) {
    getMenuHua({
      params: {
        name: '国画简介'
      }
    }).then(res => {
      state.hua = res.data.data
    }).catch(err => {
      console.log(err)
    })
  },
  getdataHua(state, route) {
    getMenuHua({
      params: {
        name: route.query.name
      }
    }).then(res => {
      state.huadata = res.data.data
    }).catch(err => {
      console.log(err)
    })
  },
  getMenuZhenci(state) {
    getMenuZhenci({
      params: {
        name: '针刺养生'
      }
    }).then(res => {
      state.zhenci = res.data.data
    }).catch(err => {
      console.log(err)
    })
  },
  getdataZhenci(state, route) {
    getMenuZhenci({
      params: {
        name: route.query.name
      }
    }).then(res => {
      state.zcdata = res.data.data
    }).catch(err => {
      console.log(err)
    })
  },
  getMenuGuasha(state) {
    getMenuGuasha({
      params: {
        name: '刮痧养生'
      }
    }).then(res => {
      state.guasha = res.data.data
    }).catch(err => {
      console.log(err)
    })
  },
  getdataGuasha(state, route) {
    getMenuGuasha({
      params: {
        name: route.query.name
      }
    }).then(res => {
      state.gsdata = res.data.data
    }).catch(err => {
      console.log(err)
    })
  },
  getMenuHuoguan(state) {
    getMenuHuoguan({
      params: {
        name: '道家养生'
      }
    }).then(res => {
      state.huoguan = res.data.data
    }).catch(err => {
      console.log(err)
    })
  },
  getMenuAijiu(state) {
    getMenuAijiu({
      params: {
        name: '艾灸养生'
      }
    }).then(res => {
      state.aijiu = res.data.data
    }).catch(err => {
      console.log(err)
    })
  },
  getdataAijiu(state, route) {
    getMenuAijiu({
      params: {
        name: route.query.name
      }
    }).then(res => {
      state.ajdata = res.data.data
    }).catch(err => {
      console.log(err)
    })
  },
  
  /**
   *
   *
   * @param {[PoST 传值 接口 ]}
   */
  // setlistDataAPI (state) {
  //   setlistData({
  //     params: {
  //       id: '66666',
  //       userName: '',
  //       password: ''
  //     }
  //   }).then(res => {
  //     state.data = res.data.data
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }
}
