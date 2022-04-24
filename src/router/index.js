import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main' , auth: true},
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/list',
    name: 'list',
    meta: {layout: 'main', auth: true},
    component: () => import('../views/hub/List.vue'),
  },
  {
    path: '/list/:parentFolderId-:hubId-:name',
    name: 'folder',
    meta: {layout: 'main', auth: true},
    component: () => import('../views/hub/List.vue'),
    props: (route) => ({
      parentFolderId: route.params.parentFolderId,
      hubId: route.params.hubId,
      name: route.params.name,
    }),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to , from , next) => {
  const token = JSON.parse(localStorage.getItem('tokenData'))

  const requireAuth = to.matched.some(record => record.meta.auth)
  if ((token.expires_in < 1) && requireAuth) {
    next('/login')
  } else {
    next()
  }

})

export default router
