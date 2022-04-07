import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main'},
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/sectors',
    name: 'sectors',
    meta: {layout: 'main'},
    component: () => import('../views/Sectors.vue'),
  },
  {
    path: '/hub/list',
    name: 'list',
    meta: {layout: 'main'},
    component: () => import('../views/hub/List.vue'),
  },
  {
    path: '/acceptance',
    name: 'Acceptance',
    meta: {layout: 'QAQC'},
    component: () => import('../views/user/Acceptance.vue'),
  },
  {
    path: '/acceptance/Acceptance-:Id-:status',
    name: 'OneAcceptance',
    meta: {layout: 'QAQC'},
    component: () => import('../views/user/OneAcceptance.vue'),
  },
  {
    path: '/about',
    name: 'About',
    meta: {layout: 'main'},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
