<template>
	<div class="content-list">
    <div class="content-list-item">
      <div class="item-cont">
        <router-link to="/show">
          <img class="item-img" src="/static/img/cimg_01.jpg">
          <p class="item-title">车牌识别</p>
        </router-link>
      </div>
    </div>
    <div class="content-list-item">
      <div class="item-cont">
        <router-link to="/target">
          <img class="item-img" src="/static/img/cimg_02.jpg"">
          <p class="item-title">目标检测</p>
        </router-link>
      </div>
    </div>
    <div class="content-list-item">
      <div class="item-cont">
        <router-link to="/face">
          <img class="item-img" src="/static/img/cimg_03.jpg"">
          <p class="item-title">人脸识别</p>
         </router-link>
      </div>
    </div>
    <div class="content-list-item">
      <div class="item-cont">
        <router-link to="/number">
          <img class="item-img" src="/static/img/cimg_04.jpg"">
          <p class="item-title">手写数字</p>
        </router-link>
      </div>
    </div>


    <div class="content-list-item">
      <div class="item-cont">
        <router-link to="/video_c">
          <img class="item-img" src="/static/img/cimg_03.jpg"">
          <p class="item-title">视频1</p>
         </router-link>
      </div>
    </div>
    <div class="content-list-item">
      <div class="item-cont">
        <router-link to="/video_d">
          <img class="item-img" src="/static/img/cimg_04.jpg"">
          <p class="item-title">视频2</p>
        </router-link>
      </div>
    </div>


    <div class="content-list-item">
      <div class="item-cont">
        <router-link to="/text_e">
          <img class="item-img" src="/static/img/cimg_03.jpg"">
          <p class="item-title">垃圾邮件</p>
         </router-link>
      </div>
    </div>
    <div class="content-list-item">
      <div class="item-cont">
        <router-link to="/text_r">
          <img class="item-img" src="/static/img/cimg_04.jpg"">
          <p class="item-title">情感识别</p>
        </router-link>
      </div>
    </div>

 </div>
</template>

<script>

export default{
	name:'ContentList'
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/sass/mixin.scss";

.content-list{
  @include show-width;
   padding-top: 60px;
   color: #333;
   font-size: 18px;
   text-align: center;
   .content-list-item{
    float: left;
    width: 50%;
    margin-bottom: 50px;
    .item-cont{
      border: 1px solid #bfbfbf;
      width: 260px;
      padding: 20px;
      margin: 0 auto;
      a{color:#666;}
      .item-title{margin-top: 15px;}
    }

   
   }
}
	
</style>