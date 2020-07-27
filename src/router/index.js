import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router= new Router({
  // mode:'history',friends
  routes: [
    {
      path: '/',
      redirect:'/start'
    },
    {
      path: '/start',
      name: 'start',
      component: resolve => require(['@/views/start'], resolve),
    },
    {
      path: '/game',
      name: 'game',
      component: resolve => require(['@/views/game'], resolve),
    },
    {
      path: '/friends',
      name: 'friends',
      component: resolve => require(['@/views/friends'], resolve),
    },
    {
      path: '/turntable',
      name: 'turntable',
      component: resolve => require(['@/views/turntable'], resolve),
    }
  ]
})
export default router;