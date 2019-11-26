import axios from 'axios'
import Cookies from 'js-cookie'
import router from '@/router'


 const URL = '/api';

// 自定义判断元素类型JS
const toType = (obj) => {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};

// 参数过滤函数
const filterNull = (o) => {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key];
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim();
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key]);
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key]);
    }
  }
  return o;
};

const service = axios.create();


//请求拦截器
service.interceptors.request.use(function (config) {
  console.log('>---<'); 
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
service.interceptors.response.use(response => {
  return response
}, err => {
    if (err.response) {
    switch (err.response.status) {
        case 401:
        Cookies.remove('username', { path: '/' });//可能是token过期，清除它
        router.replace({ //跳转到登录页面
            path: '/login',
            query: {
            redirect: router.currentRoute.fullPath
            } // 将跳转的路由path作为参数，登录成功后跳转到该路由
        });
    }
    }
    return Promise.reject(err.response)
})


export default ({m = 'GET', u = '', p = {}}) => {
  if (p) {
    p = filterNull(p);
  }
  return new Promise( (resolve, reject) => {
    service({
      method: m,
      url: u,
      data: m === 'POST' || m === 'PUT' ? p : null,
      params: m === 'GET' || m === 'DELETE' ? p : null,
      baseURL: URL,
      withCredentials: false,
      // timeout: 30000
    }).then( res => {
         if (res.data.status === true) {
           resolve(res);
         } else {
           console.log(u, '<--->', res.data.status);
           throw new Error(res.data.message)
         }
    }).catch( err => {
      if (reject) {
        reject(err);
      } else {
        console.log(u, '<--->api error, HTTP CODE: ' + err.response.status);
      }
    });
  });
};
