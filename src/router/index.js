import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import HomePage from '@/pages/HomePage'
import MySelf from '@/pages/MySelf'
import Search from '@/pages/HomePageSearch'
import Commodity from '@/pages/Commodity'
import userManagement from '@/pages/userManagement'
import OffLinePhoto from '@/pages/OffLinePhoto'
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
        },
        {
          path: '/commodity',
          name: 'Commodity',
          component: Commodity,
          meta: {
            title: '商品化信息'
          }
        },
        {
          path: '/userManagement',
          name: 'userManagement',
          component: userManagement,
          meta: {
            title: '用户信息管理'
          }
        },
        {
          path: '/offlinephoto',
          name: 'offlinephoto',
          component: OffLinePhoto,
          meta: {
            title: '车辆信息'
          }
        }
      ]
    }
  ]
})
