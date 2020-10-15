<template>
	<div class="tubanner">
		<img class="tubanner-img" src="/static/img/ny_05.jpg">
		<div class="tubanner-content">
          <span class="tubanner-content-text">
             <h3 class="tubanner-content-text-h3">图像防攻</h3>
             <p class="tubanner-content-text-p">快速检测人脸并识别返回人脸框位置，输入150个关键字点的坐标，准确识别多种属性信息。</p>
             <a class="tubanner-content-text-a" href="#">立即使用</a>
             <a class="tubanner-content-text-a" href="#">技术文档</a>
          </span>
        </div>
	</div>
</template>

<script>

export default{
	name:'Tubanner'
}
</script>

<style lang="scss" scoped>
.tubanner{
	position: relative;
	overflow: hidden;
	height: 0;
	padding-bottom: 51%;

   .tubanner-img{
   	width: 100%;
   }
   .tubanner-content{
   	  position: absolute;
      left: 20%;
      top: 50%;
      transform: translateY(-50%);
      .tubanner-content-text{
        width: 300px;
        display: inline-block;
        color: #fff;
        font-size: 14px;
        .tubanner-content-text-h3{font-size: 30px;font-weight: bold;}
        .tubanner-content-text-p{padding: 20px 0px;line-height: 20px;}
        .tubanner-content-text-a{background: #fff;width: 40px;margin-right: 38px;padding: 10px 15px;border-radius: 10px;}
      }
   }

}
	
</style>