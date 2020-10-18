<template>
	<div>
	  <home-header></home-header>
	  <tu-banner></tu-banner>
	  <voice-content></voice-content>
	</div>
</template>

<script>
import HomeHeader from './../home/components/Header.vue'
import TuBanner from './../tupian/components/tubanner.vue'
import VoiceContent from './components/v_voice2.vue'
export default{
	name:'voice',
	components:{
		HomeHeader,
		TuBanner,
		VoiceContent

	}
}
</script>

<style>
	
</style>