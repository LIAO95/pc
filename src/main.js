// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import animated from 'animate.css' 
import 'swiper/swiper-bundle.css'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.css'
import './assets/css/sass/page.scss'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.use(animated)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
