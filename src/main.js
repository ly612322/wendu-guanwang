import Vue from 'vue'
import App from './App.vue'
import router from './router'
import inputFilter from './utils/index'
import './assets/style/index.less'
import './assets/style/index.css'
import axios from 'axios'
import common from './utils/common'
import qs from 'qs'
import './permission'
import 'default-passive-events'
import animate from 'animate.css'
Vue.use(animate)
import './assets/style/hover.css'

import './mock'
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);
import 'swiper/css/swiper.css';
import pagefooter from "./components/footer/footer.vue"
import sidebar from "./components/sidebar/sidebar.vue"


import {
  Button,
  Row,
  Col,
  Layout,
  Menu,
  Drawer,
  Carousel,
  Timeline,
  FormModel,
  Select,
  Input,
  Divider,
  Statistic,
  Card,
  List,
  Avatar,
  Tabs,
  Icon,
  BackTop,
  Popover

} from 'ant-design-vue';
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Drawer)
Vue.use(Carousel)
Vue.use(Timeline);
Vue.use(FormModel);
Vue.use(Select);
Vue.use(Input);
Vue.use(Divider);
Vue.use(Statistic);
Vue.use(Card);
Vue.use(List);
Vue.use(Avatar);
Vue.use(Tabs);
Vue.use(Icon);
Vue.use(BackTop);
Vue.use(Popover);
Vue.component("pagefooter", pagefooter)
Vue.component("sidebar", sidebar)



// 配置请求根路径
// axios.defaults.baseURL = 'http://10.1.10.1234'
// 使用拦截器 在请求头中加入token
// axios.interceptors.request.use(config => {
//   config.headers.Authorization = window.sessionStorage.getItem('token')
//   // 最后必须return config
//   return config
// })

// if (process.env.NODE_ENV === 'development') { // 开发环境
//   axios.defaults.baseURL = '/api'
// } else if (process.env.NODE_ENV === 'production') { // 生产环境
//   axios.defaults.baseURL = 'http://10.1.10.211'
// }

Vue.prototype.common = common // 公共方法
Vue.prototype.$qs = qs
Vue.prototype.$http = axios

Vue.use(inputFilter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


