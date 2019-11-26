export default {
  getMenu: ({
    commit
  }) => {
    commit('getMenu')
  },
  /**
   * 道家养生
   */
  getMenuDaojia: ({
    commit
  }) => {
    commit('getMenuDaojia')
  },
  getListDaojia: ({
    commit
  }, data) => {
    commit('getListDaojia', data)
  },
  /**
   * 儒家养生
   */
  getMenuRujia: ({
    commit
  }) => {
    commit('getMenuRujia')
  },
  getListRujia: ({
    commit
  }, route) => {
    commit('getListRujia', route)
  },
  getdataRujia: ({
    commit
  }, route) => {
    commit('getdataRujia', route)
  },
  /**
   * 中养经典
   */
  getMenuJingdian: ({
    commit
  }) => {
    commit('getMenuJingdian')
  },
  getlistJingdian: ({
    commit
  }, route) => {
    commit('getlistJingdian', route)
  },
  getdataJingdian: ({
    commit
  }, route) => {
    commit('getdataJingdian', route)
  },
  getMenushiLiao: ({
    commit
  }) => {
    commit('getMenushiLiao')
  },
  getdatashiLiao: ({
    commit
  }, route) => {
    commit('getdatashiLiao', route)
  },
  getMenuQin: ({
    commit
  }) => {
    commit('getMenuQin')
  },
  getlistQin: ({
    commit
  }, route) => {
    commit('getlistQin', route)
  },
  getdataQin: ({
    commit
  }, route) => {
    commit('getdataQin', route)
  },
  getMenuQi: ({
    commit
  }) => {
    commit('getMenuQi')
  },
  getdatauQi: ({
    commit
  }, route) => {
    commit('getdatauQi', route)
  },
  getMenuShu: ({
    commit
  }) => {
    commit('getMenuShu')
  },
  getdataShu: ({
    commit
  }, route) => {
    commit('getdataShu', route)
  },
  getMenuHua: ({
    commit
  }) => {
    commit('getMenuHua')
  },
  getdataHua: ({
    commit
  }, route) => {
    commit('getdataHua', route)
  },
  getMenuZhenci: ({
    commit
  }) => {
    commit('getMenuZhenci')
  },
  getdataZhenci: ({
    commit
  }, route) => {
    commit('getdataZhenci', route)
  },
  getMenuGuasha: ({
    commit
  }) => {
    commit('getMenuGuasha')
  },
  getdataGuasha: ({
    commit
  },route) => {
    commit('getdataGuasha',route)
  },
  getMenuHuoguan: ({
    commit
  }) => {
    commit('getMenuHuoguan')
  },
  getMenuAijiu: ({
    commit
  }) => {
    commit('getMenuAijiu')
  },
  getdataAijiu: ({
    commit
  },route) => {
    commit('getdataAijiu',route)
  },
  
}
