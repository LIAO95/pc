<template>
  <div class="header-wrapper">
    <el-container class="header-container">
      <el-menu :default-active="activeIndex" class="el-menu-demo el-menu-all" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">图像防攻</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">图像防攻</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">视频防攻</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">文本防攻</template>
          <el-menu-item index="4-1">选项1</el-menu-item>
        </el-submenu>

         <el-submenu index="5">
          <template slot="title">语音防攻</template>
          <el-menu-item index="5-1">选项1</el-menu-item>
        </el-submenu>
        <el-menu-item index="6">关于我们</el-menu-item>
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
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="scss" scoped>
.header-wrapper{
  border-bottom: 1px solid #ccc;
  .header-container{
    width: 1140px;
    margin: 0 auto;
    .el-menu-all{
      margin: 0 auto;
       .el-submenu >>> .el-submenu__title{
        padding:0 45px;
       }
    }
    .el-menu.el-menu--horizontal{border:none;}


  }
}
</style>