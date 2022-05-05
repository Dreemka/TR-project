import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main' , redirect: true},
    component: () => import('../views/hub/List.vue')
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
    meta: {layout: 'main'},
    component: () => import('../views/hub/List.vue'),
  },
  {
    path: '/list/:folderId-:hubId',
    name: 'folder',
    meta: {layout: 'main'},
    component: () => import('../views/hub/List.vue'),
    props: (route) => ({
      folderId: route.params.folderId,
      hubId: route.params.hubId,
    }),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to , from , next) => {
  const requireAuth = to.matched.some(record => record.meta.redirect)
  if (requireAuth) {
    next('/list')
  } else {
    next()
  }
});


export default router
