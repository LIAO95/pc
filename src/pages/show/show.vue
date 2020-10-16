<template>
	<div>
	  <home-header></home-header>
	  <tu-banner></tu-banner>
	  <img-upload></img-upload>
	</div>
</template>

<script>
import HomeHeader from './../home/components/Header.vue'
import TuBanner from './../tupian/components/tubanner.vue'
import ImgUpload from './components/c_upload.vue'
export default{
	name:'show',
	components:{
		HomeHeader,
		TuBanner,
		ImgUpload

	}
}
</script>

<style>
	
</style>