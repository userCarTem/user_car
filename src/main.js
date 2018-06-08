// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

import Mui from 'vue-awesome-mui'
import 'vue-awesome-mui/mui/examples/hello-mui/css/icons-extra.css'
let title = localStorage.getItem('user_car_title')
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(Mui)
/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    type: '',
    title
  },
  mutations: {
    tabbarType (state, payload) {
      state.type = payload
    },
    titleTyle (state, payload) {
      localStorage.setItem('user_car_title', payload)
      state.title = payload
    }
  }
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
