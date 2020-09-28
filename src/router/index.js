import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import About from '@/pages/about/about'
import Server from '@/pages/server'
import News from '@/pages/news'
import Teacher from '@/pages/teachers'
import Detail from '@/pages/detail'
import Leader from '@/pages/leader'
import Weiyuan from '@/pages/weiyuan'
import teachers from '@/pages/teachers'
import Weiyuandetail from '@/pages/weiyuanDetail'
import teacherDetail from '@/pages/teachersDetail'
import Yanjiu from '@/pages/yanjiu'
import newsDetail from '@/pages/newsDetail'
import yanjiu1 from '@/components/yanjiu/yanjiu1'
import yanjiu2 from '@/components/yanjiu/yanjiu2'
import yanjiu3 from '@/components/yanjiu/yanjiu3'
import about2 from '@/pages/about/about2'
import about3 from '@/pages/about/about3'
import about4 from '@/pages/about/about4'
import zhaosheng from '@/pages/zhaosheng'


Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/zhaosheng',
      name: 'zhaosheng',
      component: zhaosheng
    },
    {
      path: '/teacherDetail',
      name: 'teacherDetail',
      component: teacherDetail
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: teachers
    },
    {
      path: '/about4',
      name: 'about4',
      component: about4
    },
    {
      path: '/about3',
      name: 'about3',
      component: about3
    },
    {
      path: '/about2',
      name: 'about2',
      component: about2
    },
    {
      path: '/yanjiu1',
      name: 'yanjiu1',
      component: yanjiu1
    },
    {
      path: '/yanjiu2',
      name: 'yanjiu2',
      component: yanjiu2
    },
    {
      path: '/yanjiu3',
      name: 'yanjiu3',
      component: yanjiu3
    },
    {
      path: '/yanjiu',
      name: 'yanjiu',
      component: Yanjiu
    },
    {
      path: '/newsDetail',
      name: 'newsDetail',
      component: newsDetail
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
