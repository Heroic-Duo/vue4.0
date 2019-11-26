// import axios from 'axios'
// import Cookies from 'js-cookie'
// import router from './../router'


//请求拦截器
axios.interceptors.request.use(function (config) {
  console.log('3333333333333333333');
  
  config.headers['authorization'] =`Bearer `+Cookies.get('username')
  if (config.method === 'post') {
    config.headers['Content-Type'] = 'application/json'
    //   config.headers['Content-Type'] = 'application/xxxx-form' //过滤成？&=格式
  }
  return config;
}, function (err) {
  return Promise.reject(err)
})
//响应拦截器
axios.interceptors.response.use(response => { //请求返回后先走这里才拿到数据
  console.log('44444444444444444444444444444');
  // Interface.reLogin(response)
  return response
}, err => {
  if (err.response) {
    switch (err.response.status) {
      case 401:
      Cookies.remove('username', { path: '/' });//可能是token过期，清除它
        router.replace({ //跳转到登录页面
          path: '/user/login',
          query: {
            redirect: router.currentRoute.fullPath
          } // 将跳转的路由path作为参数，登录成功后跳转到该路由
        });
    }
  }
  return Promise.reject(err.response)
  
})
