<template>
	<div class="video-content">
      <div class="nstructions">
      	<P>使用说明：首先选择视频文件并点击“开始运行”按钮【first order motion】,结果将以视频方式展现。</P>
      	<P>原理说明：【video perturbation】</P>
      </div>
      <div class="video-content-list">
      	<h3>C3D模型</h3>
      	<el-row :gutter="30">
    		  <div class="v-video">
                <img src="/static/img/vd_03.jpg">
              </div>
		    </el-row>
      </div>

      <div class="video-content-list">
      	<h3>输入图片</h3>
      	<el-row :gutter="30">
          <el-col :span="8">
            <p>视频：</p>
            <div class="v_select">
                <el-select v-model="select" slot="prepend" placeholder="3339">
                  <el-option label="1" value="1"></el-option>
                </el-select>
             </div>
          </el-col>

          <el-col :span="8">
            <p>攻击：</p>
            <div class="v_select">
                <el-select v-model="select" slot="prepend" placeholder="关闭攻击">
                  <el-option label="1" value="1">关闭攻击</el-option>
                </el-select>
             </div>
          </el-col>

          <el-col :span="8">
            <p>防御</p>
            <div class="v_select">
                <el-select v-model="select" slot="prepend" placeholder="关闭防御">
                  <el-option label="1" value="1">关闭防御</el-option>
                </el-select>
             </div>
          </el-col>
        </el-row>
      </div>

      <div class="video-content-list">
      	<h3>结果</h3>
      	<el-row :gutter="40" class="">
          <el-col :span="24">
            <div class="grid-content">
              <div class="v-video">
              	<img src="/static/img/vd_6.jpg">
              </div>
              <el-row>
              	 <el-button type="primary">开始合成</el-button>
                 <font>解析成功，请点击下面的播放按钮</font>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
export default{
	name:'video_cdetection'
}
</script>

<style lang="scss" scoped>



</style>