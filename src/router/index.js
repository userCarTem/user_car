import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import HomePage from '@/pages/HomePage'
import MySelf from '@/pages/MySelf'
import Search from '@/pages/HomePageSearch'
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
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/home-page',
      name: 'HomePage',
      component: HomePage,
      meta: {
        title: '首页'
      },
      children: [
        {
          path: '/search',
          name: 'Search',
          component: Search,
          meta: {
            title: '首页'
          }
        },
        {
          path: '/myself',
          name: 'Myself',
          component: MySelf,
          meta: {
            title: '我'
          }
        }
      ]
    }
  ]
})
