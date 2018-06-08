// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

import Mui from 'vue-awesome-mui'
import 'vue-awesome-mui/mui/examples/hello-mui/css/icons-extra.css'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(Mui)
/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    type: ''
  },
  mutations: {
    tabbarType (state, payload) {
      state.type = payload.type
    }
  }
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
