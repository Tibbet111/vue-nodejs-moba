import Vue from 'vue'
import App from './App.vue'
import './assets/scss/style.scss'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/iconfont/iconfont.css'
import Card from './components/card.vue'
import ListCard from './components/ListCard.vue'
import axios from 'axios'


Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.component('m-card',Card)
Vue.component('m-list-card',ListCard)

Vue.prototype.$http = axios.create({
  baseURL:'http://localhost:3000/web/api'
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
