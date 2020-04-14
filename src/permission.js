// import router from './router'
// import store from './store'
// import NProgress from 'nprogress' // Progress 进度条
// import 'nprogress/nprogress.css' // Progress 进度条样式

// // 导航守卫
// router.beforeEach((to, from, next) => {
//   NProgress.start() // 进度条
//   if (to.path === '/login') {
//     next() // 如果是登陆调转 直接放行
//     NProgress.done()
//   } else { // 如果不是去登陆页 先判断是否有token
//     // const tokenStr = window.sessionStorage.getItem('token') // 获取本地存储的token
//     // if (!tokenStr) { // 没有token则跳转登陆页
//     //   next('/login')
//     //   NProgress.done()
//     // } else { // 如果有 则放行
//     //   next()
//     //   NProgress.done() // 关闭进度条
//     // }
//     const tokenStr = store.state.username // 获取工号
//     if (tokenStr == '') { // 没有token则跳转登陆页
//       next('/login')
//       NProgress.done()
//     } else { // 如果有 则放行
//       next()
//       NProgress.done() // 关闭进度条
//     }
//   }
// })
