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
    path: '/forgeAPISetting',
    name: 'forgeAPISetting',
    meta: {layout: 'Setting'},
    component: () => import('../views/settings/ForgeAPISetting.vue'),
  },
  {
    path: '/telegramAlertSetting',
    name: 'telegramAlertSetting',
    meta: {layout: 'Setting'},
    component: () => import('../views/settings/TelegramAlertSetting.vue'),
  },
  {
    path: '/projectSetting',
    name: 'projectSetting',
    meta: {layout: 'Setting'},
    component: () => import('../views/settings/ProjectSetting.vue'),
  },
  {
    path: '/userSetting',
    name: 'userSetting',
    meta: {layout: 'Setting'},
    component: () => import('../views/settings/UserSetting.vue'),
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
