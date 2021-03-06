import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Tupian from '@/pages/tupian/Tu.vue'
import show from '@/pages/show/show.vue'
import target from '@/pages/show/target.vue'
import number from '@/pages/show/number.vue'
import face from '@/pages/show/face.vue'
import video_c from '@/pages/video/video_c.vue'
import video_d from '@/pages/video/video_d.vue'
import text_e from '@/pages/text/text_e.vue'
import text_r from '@/pages/text/text_r.vue'
import about_us from '@/pages/about/about_us.vue'
import voice_v from '@/pages/voice/voice_v.vue'
import voice_v1 from '@/pages/voice/voice_v1.vue'
import voice_v2 from '@/pages/voice/voice_v2.vue'



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
  },{
	path: '/text_e',
	name: 'text_e',
	component: text_e
  },{
	path: '/text_r',
	name: 'text_r',
	component: text_r
  },{
	path: '/about_us',
	name: 'about_us',
	component: about_us
  },{
	path: '/voice_v',
	name: 'voice_v',
	component: voice_v
  },{
	path: '/voice_v1',
	name: 'voice_v1',
	component: voice_v1
  },{
	path: '/voice_v2',
	name: 'voice_v2',
	component: voice_v2
  }]
})
