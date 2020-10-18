<template>
  <div class="header-wrapper">
    <el-container class="header-container">
      <el-menu 
      :default-active="activeIndex" 
      class="el-menu-demo el-menu-all"
       mode="horizontal" 
       @select="handleSelect" 
       text-color="#fff" 
       active-text-color="#05f5a9"
       router
       >
        <el-menu-item index="1" class="nav-i">首页</el-menu-item>
        <el-submenu index="2">
          <template  slot="title"><router-link to="/tupian">图像防攻</router-link></template>
          <el-menu-item index="2-1">车牌识别</el-menu-item>
          <el-menu-item index="2-2">目标检测</el-menu-item>
          <el-menu-item index="2-3">人脸识别</el-menu-item>
          <el-menu-item index="2-4">手写数字</el-menu-item>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">视频防攻</template>
          <el-menu-item index="3-1">短视频人物换脸</el-menu-item>
          <el-menu-item index="3-2">短视频异常物体检测</el-menu-item>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">文本防攻</template>
          <el-menu-item index="4-1">垃圾邮箱</el-menu-item>
          <el-menu-item index="4-2">情感识别</el-menu-item>
        </el-submenu>

         <el-submenu index="5">
          <template slot="title">语音防攻</template>
          <el-menu-item index="5-1">声纹识别</el-menu-item>
          <el-menu-item index="5-2">语音识别1</el-menu-item>
          <el-menu-item index="5-3">语音识别2</el-menu-item>
        </el-submenu>
        <el-menu-item index="aboutus">关于我们</el-menu-item>
      </el-menu>
  </el-container>
  </div>
</template>
<script>
  export default {
    name:'HomeHeader',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    mounted() {
      // 事件监听滚动条
      window.addEventListener("scroll", this.watchScroll);
    },

    destroyed() {
      // 移除事件监听
      window.removeEventListener("scroll", this.watchScroll);
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="scss" scoped>

.header-wrapper{
  position: fixed;
  z-index: 11;
  width: 100%;
  background: #111940;
  border-bottom: 1px solid #ccc;
  .header-container{
    width: 1140px;
    margin: 0 auto;
    .el-menu-all{
      margin: 0 auto;
      background: none;
       .el-submenu >>> .el-submenu__title{
        padding:0 45px;        
       }
    }    
    .el-menu.el-menu--horizontal{border:none;}
    .el-menu.el-menu--horizontal>>>.el-submenu{position: relative;}
    .el-menu.el-menu--horizontal>>>.el-submenu .el-submenu__title:after,.el-menu-item:after {
        content: '';
        height: 3px;
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 0;
        background: #05f5a9;
        transition: all .6s ease;
    }
    .el-menu.el-menu--horizontal>>>.el-submenu .el-submenu__title:hover{
       background: none;
    }
     .el-menu.el-menu--horizontal>>>.el-submenu:hover .el-submenu__title:after,.el-menu-item:hover.el-menu-item:after{
       width: 100%;
     }
    .el-menu.el-menu--horizontal >>> .el-menu-item{
          background:none;
          color: red;
         } 
  }
}

.el-menu--horizontal .el-menu .el-menu-item{color: #666 !important;}

.el-menu--horizontal>>>.el-menu--popup-bottom-start {
    margin-top: 0px;
}

</style>