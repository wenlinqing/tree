import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router= new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/game'
    },
    {
      path: '/game',
      name: 'game',
      component: resolve => require(['@/views/game'], resolve),
    }
  ]
})
export default router;