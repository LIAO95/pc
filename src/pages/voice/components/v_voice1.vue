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
		  	<p>语音识别：</p>
		  	<div class="v_select">
		        <el-select v-model="select" slot="prepend" placeholder="3339">
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

		  <el-col :span="8">
		  	<p>原音频：</p>
		  	<div class="v_select">
		        <audio controls>
              <source  type="audio/ogg">
               您的浏览器不支持 audio 元素。
            </audio>
		     </div>
		  </el-col>
		</el-row>
      </div>

      <div class="video-content-list">
      	<h3>攻击音频</h3>
      	<el-row >
    		  <el-col :span="24">
            <div class="audio_c">
                <audio controls>
                  <source  type="audio/ogg">
                   您的浏览器不支持 audio 元素。
                </audio>
            </div>
    		  	<div class="audio_b">
               <el-button type="primary">识别攻击</el-button>   
            </div>
    		  </el-col>
    		</el-row>
      </div>

      <div class="video-content-list">
        <h3>防御音效</h3>
        <el-row >
          <el-col :span="24">
            <div class="audio_c">
                <audio controls>
                  <source  type="audio/ogg">
                   您的浏览器不支持 audio 元素。
                </audio>
            </div>
            <div class="audio_b">
               <el-button type="primary">开始防御</el-button> 
               <el-button type="primary">识别防御</el-button>    
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="video-content-list">
        <h3>原文</h3>
        <div class="voice_txt">
          <P>Enclosed is purchse order for your com pany, please kindly chec</P>
        </div>
      </div>

      <div class="video-content-list">
        <h3>识别</h3>
        <div class="voice_txt">
          <P>Enclosed is purchse order for your com pany, please kindly chec</P>
        </div>
      </div>

      <div class="video-content-list">
        <h3>差别</h3>
        <div class="voice_txt">
          <P>Enclosed is purchse order for your com pany, please kindly chec</P>
        </div>
      </div>


      
    </div>
</template>

<script>
export default{
	name:'v_voice'
}
</script>

