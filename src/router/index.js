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
      path: '/404',
      name: '找不到',
      meta: {
        title: '找不到'
      },
      component: () => import(/* webpackChunkName: "not404" */ "@/views/not404.vue"),
    },
  ]
});


export default router;
