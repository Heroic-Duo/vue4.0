import Vue from "vue";
import VueRouter from "vue-router";
// import xuejia from "./xuejia";

Vue.use(VueRouter);


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      meta: {
        title: 'index'
      },
      component: () => import(/* webpackChunkName: "about" */ "@/views/index.vue"),
    },
    {
      path: '/daojia',
      name: 'daojia',
      meta: {
        title: '道家'
      },
      component: () => import(/* webpackChunkName: "daojia" */ "@/views/xuejia/daojia.vue"),
      
    },
    {
      path: '/daojia/list',
      name: 'daoJiaList',
      meta: {
        title: '道家列表'
      },
      component: () => import(/* webpackChunkName: "daojia" */ "@/views/xuejia/daojia/list.vue"),
  
    },
    {
      path: '/daojia/data',
      name: 'daoJiaDetails',
      meta: {
        title: '道家详情'
      },
      component: () => import(/* webpackChunkName: "daojia" */ "@/views/xuejia/daojia/details.vue"),
  
    },
    {
      path: '/rujia',
      name: 'rujia',
      meta: {
        title: '儒家'
      },
      component: () => import(/* webpackChunkName: "rujia" */ "@/views/xuejia/rujia.vue"),
      
    },
    {
      path: '/rujia/list',
      name: 'ruJiaList',
      meta: {
        title: '儒家列表'
      },
      component: () => import(/* webpackChunkName: "rujia" */ "@/views/xuejia/rujia/list.vue"),
      
    },
    {
      path: '/rujia/data',
      name: 'ruJiaDetails',
      meta: {
        title: '儒家详情'
      },
      component: () => import(/* webpackChunkName: "rujia" */ "@/views/xuejia/rujia/details.vue"),
  
    },
    {
      path: '/shiliao',
      name: 'shiliao',
      meta: {
        title: '食疗'
      },
      component: () => import(/* webpackChunkName: "rujia" */ "@/views/shiwu/shiliao.vue"),
      
    },
    {
      path: '/shiliao/data',
      name: 'ruJiaDetails',
      meta: {
        title: '食疗'
      },
      component: () => import(/* webpackChunkName: "rujia" */ "@/views/shiwu/shiliao/index.vue"),
      
    },
    {
      path: '/hua',
      name: '国画',
      meta: {
        title: '国画'
      },
      component: () => import(/* webpackChunkName: "not404" */ "@/views/qqsh/hua.vue"),
    },
    {
      path: '/wenDa',
      name: '问答',
      meta: {
        title: '问答'
      },
      component: () => import(/* webpackChunkName: "not404" */ "@/views/cijiao/wenda.vue"),
    },
    {
      path: '/register',
      name: '注册',
      meta: {
        title: '注册'
      },
      component: () => import(/* webpackChunkName: "not404" */ "@/views/user/register.vue"),
    },
    {
      path: '/login',
      name: '登录',
      meta: {
        title: '登录'
      },
      component: () => import(/* webpackChunkName: "not404" */ "@/views/user/login.vue"),
    },
    {
      path: '/forget',
      name: '找回',
      meta: {
        title: '找回'
      },
      component: () => import(/* webpackChunkName: "not404" */ "@/views/user/forget.vue"),
    },
    {
      path: '/user',
      name: '用户',
      meta: {
        title: '用户',
        requireAuth: true
      },
      component: () => import(/* webpackChunkName: "not404" */ "@/views/user/index.vue"),
    },
    {
      path: '/404',
      name: '找不到',
      meta: {
        title: '找不到'
      },
      component: () => import(/* webpackChunkName: "not404" */ "@/views/not404.vue"),
    },
  ]
});
router.beforeEach((to, from, next) => {
  const titles = to.meta.title ? `养生传承堂-${to.meta.title}` : '养生养身先养心'
  window.document.title = titles
  if (to.matched.length === 0) { //如果未匹配到路由
      from.name ? next({ name: from.name }) : next('/') //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else {
      next() //如果匹配到正确跳转
  }
  if (to.matched.some(res => res.meta.requireAuth)) { // 验证是否需要登陆    
      if (Vue.prototype.$Cookie.get('user')) { // 查询本地存储信息是否已经登陆  

          next()
      } else {
          next({
              path: '/login', // 未登录则跳转至login页面       
              query: {
                  redirect: to.fullPath
              }  // 登陆成功后回到当前页面，这里传值给login页面,to.fullPath为当前点击的页面
          })
      }
  } else {
      next()
  }
  Vue.prototype.$LoadingBar.start();
  next();
})

export default router;
