import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../views/layout/index';
Vue.use(VueRouter)

const routes = [{
    path: '',
    name: 'index',
    redirect: '/home',
    component: layout,
    meta: {
      keepAlive: true
    },
    children: [{
      path: '/home',
      component: () => import('../views/home/home')
    }]
  },
  {
    path: '/zStuRecruit',
    component: layout,
    meta: {
      keepAlive: true
    },
    children: [{
      path: '/zStuRecruit',
      component: () => import('../views/course/zStuRecruit')
    }]
  },
  {
    path: '/xStuRecruit',
    component: layout,
    meta: {
      keepAlive: true
    },
    children: [{
      path: '/xStuRecruit',
      component: () => import('../views/course/xStuRecruit')
    }]
  },
  {
    path: '/teacherList',
    component: layout,
    meta: {
      keepAlive: true
    },
    children: [{
      path: '/teacherList',
      component: () => import('../views/teacherList/index')
    }]
  },
  {
    path: '/teachService',
    component: layout,
    meta: {
      keepAlive: true
    },
    children: [{
      path: '/teachService',
      component: () => import('../views/teachService/index')
    }]
  },
  {
    path: '/glnews',
    component: layout,
    meta: {
      keepAlive: true
    },
    children: [{
      path: '/glnews',
      component: () => import('../views/glnews/index')
    }]
  },
  {
    path: '/audition',
    component: layout,
    meta: {
      keepAlive: true
    },
    children: [{
      path: '/audition',
      component: () => import('../views/audition/index')
    }]
  },

  {
    path: '/about',
    component: layout,
    meta: {
      keepAlive: true
    },
    children: [{
      path: '/about',
      component: () => import('../views/about/index')
    }]
  },

]

const router = new VueRouter({
  routes
})

export default router
