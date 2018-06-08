import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import HomePage from '@/pages/HomePage'
import MySelf from '@/pages/MySelf'
Vue.use(Router)

export default new Router({
  // routes: [
  //   {
  //     path: '/'
  //   }
  // ]
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home-page',
      name: 'HomePage',
      component: HomePage,
      children: [
        {
          path: '/myself',
          name: 'Myself',
          component: MySelf
        }
      ]
    }
  ]
})
