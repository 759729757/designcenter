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
//英语的部分
import enIndex from '@/pages/en/index'
import enAbout from '@/pages/en/about/about'
import enServer from '@/pages/en/server'
import enNews from '@/pages/en/news'
import enTeacher from '@/pages/en/teachers'
import enDetail from '@/pages/en/detail'
import enLeader from '@/pages/en/leader'
import enWeiyuan from '@/pages/en/weiyuan'
import enteachers from '@/pages/en/teachers'
import enWeiyuandetail from '@/pages/en/weiyuanDetail'
import enteacherDetail from '@/pages/en/teachersDetail'
import enYanjiu from '@/pages/en/yanjiu'
import ennewsDetail from '@/pages/en/newsDetail'
import enyanjiu1 from '@/encomponents/yanjiu/yanjiu1'
import enyanjiu2 from '@/encomponents/yanjiu/yanjiu2'
import enyanjiu3 from '@/encomponents/yanjiu/yanjiu3'
import enabout2 from '@/pages/en/about/about2'
import enabout3 from '@/pages/en/about/about3'
import enabout4 from '@/pages/en/about/about4'
import enzhaosheng from '@/pages/en/zhaosheng'

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
    },
    //英文部分
    {
      path: '/en',
      name: 'enIndex',
      component: enIndex
    },
    {
      path: '/enzhaosheng',
      name: 'enzhaosheng',
      component: enzhaosheng
    },
    {
      path: '/enteacherDetail',
      name: 'enteacherDetail',
      component: enteacherDetail
    },
    {
      path: '/enteachers',
      name: 'enteachers',
      component: enteachers
    },
    {
      path: '/enabout4',
      name: 'enabout4',
      component: enabout4
    },
    {
      path: '/enabout3',
      name: 'enabout3',
      component: enabout3
    },
    {
      path: '/enabout2',
      name: 'enabout2',
      component: enabout2
    },
    {
      path: '/enyanjiu1',
      name: 'enyanjiu1',
      component: enyanjiu1
    },
    {
      path: '/enyanjiu2',
      name: 'enyanjiu2',
      component: enyanjiu2
    },
    {
      path: '/enyanjiu3',
      name: 'enyanjiu3',
      component: enyanjiu3
    },
    {
      path: '/enyanjiu',
      name: 'enyanjiu',
      component: enYanjiu
    },
    {
      path: '/ennewsDetail',
      name: 'ennewsDetail',
      component: ennewsDetail
    },
    {
      path: '/enweiyuanDetail',
      name: 'enweiyuanDetail',
      component: enWeiyuandetail
    },
    {
      path: '/enweiyuan',
      name: 'enweiyuan',
      component: enWeiyuan
    },
    {
      path: '/enleader',
      name: 'enleader',
      component: enLeader
    },
    {
      path: '/enabout',
      name: 'enabout',
      component: enAbout
    },
    {
      path: '/enserver',
      name: 'enserver',
      component: enServer
    },
    {
      path: '/ennews',
      name: 'ennews',
      component: enNews
    },
    {
      path: '/enteacher',
      name: 'enteacher',
      component: enTeacher
    },
    {
      path: '/endetail',
      name: 'endetail',
      component: enDetail
    },


  ]
})
