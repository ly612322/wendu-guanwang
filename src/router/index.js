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
    path: '/plan',
    component: layout,
    meta: {
      keepAlive: true
    },
    children: [{
      path: '/plan',
      component: () => import('../views/audition/plan')
    }]
  },
  {
    path: '/logic',
    component: layout,
    meta: {
      keepAlive: true
    },
    children: [{
      path: '/logic',
      component: () => import('../views/audition/logic')
    }]
  },
  {
    path: '/math',
    component: layout,
    meta: {
      keepAlive: true
    },
    children: [{
      path: '/math',
      component: () => import('../views/audition/math')
    }]
  },
  {
    path: '/english',
    component: layout,
    meta: {
      keepAlive: true
    },
    children: [{
      path: '/english',
      component: () => import('../views/audition/english')
    }]
  },
  {
    path: '/write',
    component: layout,
    meta: {
      keepAlive: true
    },
    children: [{
      path: '/write',
      component: () => import('../views/audition/write')
    }]
  },
  {
    path: '/oneOnone',
    component: layout,
    meta: {
      keepAlive: true
    },
    children: [{
      path: '/oneOnone',
      component: () => import('../views/audition/oneOnone')
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
