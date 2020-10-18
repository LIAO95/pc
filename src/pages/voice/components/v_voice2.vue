<template>
	<div class="video-content">
      <div class="nstructions">
      	<P>使用说明：首先选择想识别的控制“单词”，其次选择“音频文件”，最后选择“算法”[Vgg or Resnet模型]。</P>
      	<P>原理说明：[Vgg or Resnet模型]</P>
      </div>
      <div class="video-content-list">
      	<h3>控制词识别</h3>
      	<el-row :gutter="30">
		  <el-col :span="8">
		  	<p>控制词：</p>
		  	<div class="v_select">
		        <el-select v-model="select" slot="prepend" placeholder="3339">
		          <el-option label="1" value="1"></el-option>
		        </el-select>
		     </div>
		  </el-col>

		  <el-col :span="8">
		  	<p>音频文件：</p>
		  	<div class="v_select">
		        <el-select v-model="select" slot="prepend" placeholder="001">
		          <el-option label="1" value="1"></el-option>
		        </el-select>
		     </div>
		  </el-col>

		  <el-col :span="8">
		  	<p>算法选择：</p>
		  	<div class="v_select">
		        <el-select v-model="select" slot="prepend" placeholder="001">
		          <el-option label="1" value="1"></el-option>
		        </el-select>
		     </div>
		  </el-col>
		</el-row>
      </div>

      <div class="video-content-list">
      	<h3>预测</h3>
      	<el-row :gutter="30">
    		  <el-col :span="12">
            <div class="audio_c">
             <audio controls>
                <source  type="audio/ogg">
                您的浏览器不支持 audio 元素。
                </audio>
            </div>
    		  	<div class="audio_b">
               <el-button type="primary">语音识别</el-button>   
            </div>
    		  </el-col>
          <el-col :span="12">
            <div class="voice_text">
              <div class="v_text">
                <p>您使用的模型是<font>VggNet</font></p>
                <p>预测结果为:...</p>
                <p>预测结果为:yes</p>
                <p>正确结果为:yes</p>
                <p class="color">预测正确</p>
              </div>
              <div class="voice-results">
                <p>识别结果</p>
              </div>
            </div>
          </el-col>
    		</el-row>
      </div>

      
    </div>
</template>

<script>
export default{
	name:'v_voice'
}
</script>

