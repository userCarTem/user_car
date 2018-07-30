import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import HomePage from '@/pages/HomePage'
import MySelf from '@/pages/MySelf'
import Search from '@/pages/HomePageSearch'
import Commodity from '@/pages/Commodity'
import userManagement from '@/pages/userManagement'
import OffLinePhoto from '@/pages/OffLinePhoto'
import Information from '@/pages/Information'
import HaveBeenPut from '@/pages/HaveBeenPut'
import Manufactor from '@/pages/Manufactor'
import CarName from '@/pages/CarName'
import NotInStorage from '@/pages/NotInStorage'
import BrandSelection from '@/pages/BrandSelection'
import VehicleEntry from '@/pages/VehicleEntry'
import RapidAssessment from '@/pages/RapidAssessment'
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
        },
        {
          path: '/information',
          name: 'information',
          component: Information,
          meta: {
            title: '信息确认'
          }
        },
        {
          path: '/havebeenput',
          name: 'havebeenput',
          component: HaveBeenPut,
          meta: {
            title: '已入库车辆'
          }
        },
        {
          path: '/manufactor',
          name: 'manufactor',
          component: Manufactor,
          meta: {
            title: '厂家选择'
          }
        },
        {
          path: '/carname',
          name: 'carname',
          component: CarName,
          meta: {
            title: '车名选择'
          }
        },
        {
          path: '/notinstorage',
          name: 'notinstorage',
          component: NotInStorage,
          meta: {
            title: '未入库车辆查询'
          }
        },
        {
          path: '/brandselection',
          name: 'brandselection',
          component: BrandSelection,
          meta: {
            title: '品牌选择'
          }
        },
        {
          path: '/vehicleEntry',
          name: 'vehicleEntry',
          component: VehicleEntry,
          meta: {
            title: '车辆信息录入'
          }
        },
        {
          path: '/rapidassessment',
          name: 'RapidAssessment',
          component: RapidAssessment,
          meta: {
            title: '简易基本信息'
          }
        }
      ]
    }
  ]
})
