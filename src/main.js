import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Cookie from 'js-cookie'
import axios from 'axios'
// import ViewUI from 'view-design';
import ViewUI from './components/models/viewDesign/index'
import 'view-design/dist/styles/iview.css';
import './assets/css/nav.css'

Vue.use(ViewUI);

Vue.prototype.$Cookie = Cookie

Vue.prototype.$axios = axios


router.beforeEach((to, from, next) => {
  Vue.prototype.$LoadingBar.start();
  next();
});
// router.afterEach((to) => {
//   ViewUI.LoadingBar.start();
//   // Vue.prototype.$LoadingBar.finish();
// })
// router.afterEach(route => {
//   ViewUI.LoadingBar.finish();
// });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
