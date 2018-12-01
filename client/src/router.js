import Vue from 'vue'
import Router from 'vue-router'
import CarouselPage from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: CarouselPage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/new-shift',
      name: 'new-shift',
      component: () => import(/* webpackChunkName: "shift" */ './views/NewShift.vue')
    },
    {
      path: '/create-employee',
      name: 'create-employee',
      component: () => import(/* webpackChunkName: "shift" */ './views/NewEmployee.vue')
    }
  ]
})
