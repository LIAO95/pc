<template>
	<div class="video-content">
      <div class="nstructions">
      	<P>使用说明：首先选择视频文件并点击“开始运行”按钮【first order motion】,结果将以视频方式展现。</P>
      	<P>原理说明：首先用【first order motion】算法进行图片合成，并用【forensic】算法进行人脸鉴别。</P>
      </div>
      <div class="video-content-list">
      	<h3>驱动视频</h3>
      	<el-row :gutter="30">
		  <el-col :span="8">
		  	<p>人物编号：</p>
		  	<div class="v_select">
		        <el-select v-model="select" slot="prepend" placeholder="3339">
		          <el-option label="1" value="1"></el-option>
		        </el-select>
		     </div>
		  </el-col>

		  <el-col :span="8">
		  	<p>文件：</p>
		  	<div class="v_select">
		        <el-select v-model="select" slot="prepend" placeholder="001">
		          <el-option label="1" value="1"></el-option>
		        </el-select>
		     </div>
		  </el-col>

		  <el-col :span="8">
		  	<p>视频：</p>
		  	<div class="v_select">
		        <el-select v-model="select" slot="prepend" placeholder="001">
		          <el-option label="1" value="1"></el-option>
		        </el-select>
		     </div>
		  </el-col>
		</el-row>
      </div>

      <div class="video-content-list">
      	<h3>输入图片</h3>
      	<el-row :gutter="30">
		  <el-col :span="8">
		  	<p>人物编号：</p>
		  	<div class="v_select">
		        <el-select v-model="select" slot="prepend" placeholder="3339">
		          <el-option label="1" value="1"></el-option>
		        </el-select>
		     </div>
		  </el-col>
		</el-row>
      </div>

      <div class="video-content-list">
      	<h3>原文件</h3>
      	<el-row :gutter="40" class="">
          <el-col :span="12">
            <div class="grid-content">
              <div class="v-video">
              	<img src="/static/img/vc_06.jpg">
              </div>
              <el-row>
              	 <el-button type="primary">开始合成</el-button>
                 <el-button type="primary">人脸鉴别</el-button>
              </el-row>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <div class="v-video">
              	<img src="/static/img/vc_14.jpg">
              </div> 
              <font>解析成功，请点击下面的播放按钮</font>
            </div>
         </el-col>
        </el-row>
      </div>

      <div class="video-content-list">
      	<h3>结果</h3>
      	<el-row :gutter="20" class="">
      	  <el-col :span="8">
            <div class="grid-content">
              <div class="v-video">
              	<img src="/static/img/vc_11.jpg">
              </div> 
              <font>预测成功</font>
            </div>
         </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <div class="v-video">
              	<img src="/static/img/vc_14.jpg">
              </div> 
              <font>原始图片[0.91/0.09]预测正确</font>
            </div>
         </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <div class="v-video">
              	<img src="/static/img/vc_16.jpg">
              </div> 
              <font>合成图片[1.00/0.00]攻击获胜</font>
            </div>
         </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
export default{
	name:'video_change'
}
</script>

<style lang="scss" scoped>

// @import "@/assets/css/sass/page.scss";

</style>