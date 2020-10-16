<template>
	<div class="show-content">
   <div class="show_list">
      <h3 class="show_title_h3">图片上传</h3>
      <div>
        <el-input placeholder="请选择图片" v-model="input" class="input-with-select">
            <el-button slot="append" >点击上传</el-button>
        </el-input>
      </div>
    </div> 

    <div class="show_list">
      <h3 class="show_title_h3">检测算法</h3>
      <div>
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="1" value="1"></el-option>
          <el-option label="2" value="2"></el-option>
          <el-option label="3" value="3"></el-option>
        </el-select>
       </div>
    </div> 

    <div class="show_list">
      <h3 class="show_title_h3">原始图片</h3>
      <div class="ori-img">
        <el-row :gutter="20" class="ori-row">
          <el-col :span="12">
            <div class="grid-content">
              <img src="/static/img/cp_03.jpg">
            </div>
          </el-col>
          <el-col :span="12">
            <div class="con-right">
              <p>车牌：苏E05EV8</p>
              <p>置信度：0.988</p>
            </div>
         </el-col>
        </el-row>
        <el-row>
          <el-button type="primary">识别</el-button>
        </el-row>
      </div>
    </div>

    <div class="show_list">
      <h3 class="show_title_h3">攻击图片</h3>
      <div class="ori-img">
        <el-row :gutter="20" class="ori-row">
          <el-col :span="12">
            <div class="grid-content">
              <img src="/static/img/cp_03.jpg">
            </div>
          </el-col>
          <el-col :span="12">
            <div class="con-right">
              <p>车牌：苏E05EV8</p>
              <p>置信度：0.988</p>
            </div>
         </el-col>
        </el-row>
        <el-row>
          <el-button type="primary">生成攻击图片</el-button>
          <el-button type="primary">识别</el-button>
        </el-row>
      </div>
    </div>

    <div class="show_list">
      <h3 class="show_title_h3">防御图片</h3>
      <div class="ori-img">
        <el-row :gutter="20" class="ori-row">
          <el-col :span="12">
           <div class="show_list nex">
              <h4 class="show_title_h4">防御算法</h4>
              <el-select v-model="select" slot="prepend" placeholder="请选择">
                <el-option label="1" value="1"></el-option>
                <el-option label="2" value="2"></el-option>
                <el-option label="3" value="3"></el-option>
              </el-select>
               <el-row class="p-t-2">
                  <el-button type="primary">预测防御结果</el-button>
                </el-row>
            </div> 
          </el-col>
          <el-col :span="12">
            <div class="con-right">
              <p>车牌：苏E05EV8</p>
              <p>置信度：0.988</p>
            </div>
         </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default{
	name:'target'
}
</script>

<style lang="scss" scoped>

@import "@/assets/css/sass/mixin.scss";

.show-content{
  @include show-width;
  padding-top: 60px;
  .show_list{
      margin-bottom: 60px;
      .show_title_h3{font-size: 22px;margin-bottom: 30px;}
      .ori-img{
        .show_title_h4{margin-bottom: 20px}

        .ori-row{
          margin-bottom: 20px;
          
          .con-right{
            width: 560px;
            height: 388px;
            padding-left: 50px;
            padding-top: 50px;
            border:1px solid #333;
            p{
              line-height: 32px;font-size: 18px;
            }
          }
        }
        
      }
   }
   .show_list.nex{
    margin-top: 150px;
    .p-t-2{padding-top: $p-t-2;}
  }
}

	
</style>