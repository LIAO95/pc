import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Tupian from '@/pages/tupian/Tu.vue'

Vue.use(Router)

export default new Router({
  routes: [{
	path: '/',
	name: 'Home',
	component: Home
  },{
	path: '/tupian',
	name: 'Tupian',
	component: Tupian
  }]
})
