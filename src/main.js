import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import inputFilter from './utils/index'
import './assets/style/index.less'
import axios from 'axios'
import common from './utils/common'
import qs from 'qs'
import './permission'
import 'default-passive-events'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/markPoint'
import 'echarts/lib/component/legend'
// import 'echarts/lib/component/dataZoom'
// import 'echarts/lib/component/polar'
// import 'echarts/lib/component/legend'
import 'echarts/lib/component/title.js'
import animate from 'animate.css'
Vue.use(animate)
Vue.component('chart', ECharts)
import {
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Button,
  Icon,
  Card,
  Row,
  Form,
  FormItem,
  Input,
  Col,
  Carousel,
  CarouselItem,
  Container,
  Header,
  Main,
  Footer,
  Timeline,
  TimelineItem,
  Link,
  Divider,
  Image,
  Drawer

} from 'element-ui';

Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Button);
Vue.use(Drawer);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Link);
Vue.use(Divider);
Vue.use(Image);

import './mock'
import 'element-ui/lib/theme-chalk/display.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);
import 'swiper/css/swiper.css';


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
  store,
  render: h => h(App)
}).$mount('#app')
