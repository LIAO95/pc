<template>
	<div>
	  <home-header></home-header>
	  <tu-banner></tu-banner>
	  <text-list></text-list>
	</div>
</template>

<script>
import HomeHeader from './../home/components/Header.vue'
import TuBanner from './../tupian/components/tubanner.vue'
import TextList from './components/text.vue'
export default{
	name:'TextList',
	components:{
		HomeHeader,
		TuBanner,
		TextList

	}
}
</script>

<style>
	
</style>