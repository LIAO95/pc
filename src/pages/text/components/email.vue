<template>
	<div class="video-content">
      <div class="email_txt">
       <h3>垃圾邮件应用演示平台</h3>
       <el-row class="email_k">
         <el-col :span="2" class="color_e">使用说明</el-col>
         <el-col :span="22">
           <p>简介：垃圾邮件检测是对邮件文本进行分析、处理、归纳和推理的过程。本平台支持垃圾邮件检测、检测模型攻击、检测模型防御等；检测算法支持GPT、LSTM、BERT等；攻击算法支持AOOS、TextFooler、PAWS、SCPN等；防御算法支持DISP、RobustTraining等。</p>
         </el-col>
       </el-row>
      </div>
      <div class="video-content-list">
      	<h3>检测模型</h3>
      	<el-row class="b_padd">
          <el-button>BERT</el-button>
          <el-button>预测</el-button>
          <el-button type="primary">实例2</el-button>
        </el-row>
        <el-row :gutter="40">
          <el-col :span="8">
            <div class="text1">
              <p>
                Dear  xx，<br>
                Good day.<br>
                This is xx from xx .We are the supplier of xx. Glad to contact with you.<br>
                Enclosed is purchse order for your company, please kindly check it.<br>
                Any questions please kindly contact with me.<br>
                Thanks & Best Regards,<br>
                XX
              </p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="text1">
              <div class="text_results">
                <p>识别结果&nbsp;&nbsp;|&nbsp;&nbsp;垃圾邮件</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="text1">
              <h4>What is Sentiment Analysis?</h4>
            </div>
          </el-col>
        </el-row>

        <el-row class="button_t">
           <el-button type="primary">识别</el-button>
        </el-row>
      </div>

      <div class="video-content-list">
        <h3>攻击模型</h3>
        <el-row class="b_padd">
          <el-button>TextFox</el-button>
          <el-button type="primary">注入攻击</el-button>
        </el-row>
        <el-row :gutter="40">
          <el-col :span="8">
            <div class="text1">
              <p>
                Dear  xx，<br>
                Good day.<br>
                This is xx from xx .We are the supplier of xx. Glad to contact with you.<br>
                Enclosed is purchse order for your company, please kindly check it.<br>
                Any questions please kindly contact with me.<br>
                Thanks & Best Regards,<br>
                XX
              </p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="text1">
              <div class="text_results">
                <p>识别结果&nbsp;&nbsp;|&nbsp;&nbsp;垃圾邮件</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="text1">
              <h4>What is Sentiment Analysis?</h4>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="video-content-list">
        <h3>防御模型</h3>
        <el-row class="b_padd">
          <el-button>模型</el-button>
          <el-button type="primary">启动防御</el-button>
        </el-row>
        <el-row :gutter="40">
          <el-col :span="8">
            <div class="text1">
              <p>
                Dear  xx，<br>
                Good day.<br>
                This is xx from xx .We are the supplier of xx. Glad to contact with you.<br>
                Enclosed is purchse order for your company, please kindly check it.<br>
                Any questions please kindly contact with me.<br>
                Thanks & Best Regards,<br>
                XX
              </p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="text1">
              <div class="text_results">
                <p>识别结果&nbsp;&nbsp;|&nbsp;&nbsp;垃圾邮件</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="text1">
              <h4>What is Sentiment Analysis?</h4>
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