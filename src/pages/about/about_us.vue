<template>
	<div>
	  <home-header></home-header>
	  <tu-banner></tu-banner>
	  <about-text></about-text>
	</div>
</template>

<script>
import HomeHeader from './../home/components/Header.vue'
import TuBanner from './../tupian/components/tubanner.vue'
import AboutText from './components/about_text.vue'
export default{
	name:'show',
	components:{
		HomeHeader,
		TuBanner,
		AboutText

	}
}
</script>

<style>
	
</style>