import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Tupian from '@/pages/tupian/Tu.vue'
import test from '@/pages/aboutus/About.vue'
import show from '@/pages/show/show.vue'
import target from '@/pages/show/target.vue'
import number from '@/pages/show/number.vue'
import face from '@/pages/show/face.vue'
import video_c from '@/pages/video/video_c.vue'
import video_d from '@/pages/video/video_d.vue'



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
  },{
	path: '/aboutus',
	name: 'aboutus',
	component: test
  },{
	path: '/show',
	name: 'show',
	component: show
  },{
	path: '/target',
	name: 'target',
	component: target
  },{
	path: '/number',
	name: 'number',
	component: number
  },{
	path: '/face',
	name: 'face',
	component: face
  },{
	path: '/video_c',
	name: 'video_c',
	component: video_c
  },{
	path: '/video_d',
	name: 'video_d',
	component: video_d
  }]
})
