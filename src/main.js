// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import Mui from 'vue-awesome-mui'
import 'vue-awesome-mui/mui/examples/hello-mui/css/icons-extra.css'
import {
  XButton,
  XInput,
  Group,
  Flexbox,
  FlexboxItem,
  Divider,
  Tabbar,
  TabbarItem,
  Cell,
  XHeader,
  Icon,
  CheckIcon,
  Checklist,
  CellBox,
  ViewBox,
  Datetime,
  DatetimePlugin,
  Confirm
} from 'vux'

Vue.config.productionTip = false
Vue.use(DatetimePlugin)
Vue.use(Vuex)
Vue.use(Mui)
Vue.component('xHeader', XHeader)
Vue.component('group', Group)
Vue.component('xButton', XButton)
Vue.component('xInput', XInput)
Vue.component('flexbox', Flexbox)
Vue.component('flexboxItem', FlexboxItem)
Vue.component('divider', Divider)
Vue.component('tabbar', Tabbar)
Vue.component('tabbarItem', TabbarItem)
Vue.component('cell', Cell)
Vue.component('icon', Icon)
Vue.component('check-icon', CheckIcon)
Vue.component('checklist', Checklist)
Vue.component('cell-box', CellBox)
Vue.component('view-box', ViewBox)
Vue.component('datetime', Datetime)
Vue.component('confirm', Confirm)

/* eslint-disable no-new */
let title = localStorage.getItem('user_car_title')
const store = new Vuex.Store({
  state: {
    type: '',
    title,
    isAssessmentList: false,
    isSharingList: false,
    isCancelImg: true
  },
  mutations: {
    tabbarType (state, payload) {
      state.type = payload
    },
    titleTyle (state, payload) {
      localStorage.setItem('user_car_title', payload)
      state.title = payload
    },
    AssessmentList (state, payload) {
      state.isAssessmentList = payload
    },
    SharingList (state, payload) {
      state.isSharingList = payload
    },
    CancelImg (state, payload) {
      state.isCancelImg = payload
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
