
const xuejia =
  {
    path: '/xuejia',
    name: 'xuejia',
    meta: {
      title: '学家'
    },
    component: () => import(/* webpackChunkName: "daojia" */ "@/views/xuejia/index.vue"),
    children: [
      {
        path: 'daojia',
        name: 'daojia',
        meta: {
          title: '道家'
        },
        component: () => import(/* webpackChunkName: "daojia" */ "@/views/xuejia/daojia.vue"),
        
      },
      {
        path: 'rujia',
        name: 'rujia',
        meta: {
          title: '儒家'
        },
        component: () => import(/* webpackChunkName: "rujia" */ "@/views/xuejia/rujia.vue"),
        
      }
    ]
  }
export default xuejia;
   
