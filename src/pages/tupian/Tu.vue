<template>
	<div>
	  <home-header></home-header>
	  <tu-banner></tu-banner>
	  <content-list></content-list>
	</div>
</template>

<script>
import HomeHeader from './../home/components/Header.vue'
import TuBanner from './components/tubanner.vue'
import ContentList from './components/content.vue'
export default{
	name:'Tupian',
	components:{
		HomeHeader,
		TuBanner,
		ContentList

	}
}
</script>

<style>
	
</style>