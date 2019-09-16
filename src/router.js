import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/test/:id',
      name: 'test',
      component: () => import(/* webpackChunkName: "about" */ './views/TestPage.vue')
    },
    {
      path: '/admin-create/:id',
      name: 'adminCreate',
      component: () => import(/* webpackChunkName: "adminCreate" */ './views/admin/AdminCreate.vue')
    }
  ]
})
