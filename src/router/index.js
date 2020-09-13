import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import About from '@/pages/about'
import Server from '@/pages/server'
import News from '@/pages/news'
import Teacher from '@/pages/teachers'
import Detail from '@/pages/detail'
import Leader from '@/pages/leader'
import Weiyuan from '@/pages/weiyuan'
import Weiyuandetail from '@/pages/weiyuanDetail'
import Yanjiu from '@/pages/yanjiu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/yanjiu',
      name: 'yanjiu',
      component: Yanjiu
    },
    {
      path: '/weiyuanDetail',
      name: 'weiyuanDetail',
      component: Weiyuandetail
    },
    {
      path: '/weiyuan',
      name: 'weiyuan',
      component: Weiyuan
    },
    {
      path: '/leader',
      name: 'leader',
      component: Leader
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/server',
      name: 'server',
      component: Server
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: Teacher
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }


  ]
})
