<template>
	<div>
	  <home-header></home-header>
	  <tu-banner></tu-banner>
	  <about-us></about-us>
	</div>
</template>

<script>
import HomeHeader from './../home/components/Header.vue'
import TuBanner from './components/tubanner.vue'
import AboutUs from './components/about_us.vue'
export default{
	name:'about',
	components:{
		HomeHeader,
		TuBanner,
		AboutUs

	}
}
</script>

<style>
	
</style>