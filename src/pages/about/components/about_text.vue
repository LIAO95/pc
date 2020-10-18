<template>
  <div class="about_content">
    <el-row :gutter="40">
      <el-col :span="9">
        <div class="img_about"><img src="/static/img/aimg_19.jpg"></div>
      </el-col>
      <el-col :span="15">
        <div class="about_span">
          <h3>项目介绍</h3>
          <span>
            <p>际信息化人才资格认证中所提到的认证是指对培训合格学员颁发培训证书；与国家规定的认证两者有着截然不同的区别；国家规定的认证是指由认证机构证明产品、服务、管理体系符合相关技术规范、相关技术规范的强制性要求或者标准的合格评定活动。认证包括体系认证和产品认证两大类，体系认证一般的企业都可以做，也是一个让客户对自己的企业或公司放心的认证，比如说ISO9001质量体系认证，一般价格以企业或公司人数的多少来决定；产品认证相对来说比较广泛，各种不同规格的产品和不同的产品认证价格都不一样，当然他们的用途也不一样，比如说CCC国家强制性认证和CE欧盟安全认证。另外，同一类产品做不同的产品认证价格也不相同，比如说空调，如果出口的话就要做国外的相关产品认证。而我们国际信息化人才资格认证是指对培训合格学员颁发结业证书，两者有着截然不同的概念；</p>
            <p>社会在进步、科技在发展，新的一年，与国际接轨，引进国际信息化的先进思想和理念，已经是摆在 新时代的历史性课题，固步自封、因循守旧终会被时代所抛弃，只有创新、引进才能生存发展，中国的培训行业已经驶入到高速前进的快车道，国家信 息化培训正是顺应了时代的发展，与国际信息化培训相结合，开发出了一套适合中国国情的普及型的人才认证体系。</p>
          </span>
        </div>
      </el-col>
    </el-row>

    <div class="staff">
      <h3>人员介绍</h3>
      <el-row :gutter="40">
      <el-col :span="8" v-for="(o, index) in 5" :key="o">
        <el-card :body-style="{ padding: '0px' }">
          <img src="/static/img/aimg_53.jpg" class="image">
          <div style="padding: 14px;">
            <span>
              <h4>张天师</h4>
              <font>计算机科学技术专家</font>
              <el-divider></el-divider>
              <p>1975年毕业于太原理工大学电机系。1986年获南京大学计算机软件博士学位。北京航空航天大学校学术委员会主任；教育部科技委主任</p>
            </span>

          </div>
        </el-card>
      </el-col>
    </el-row>

    </div>
  </div>
</template>

<script>
export default{
	name:'about_text'
}
</script>

<style lang="scss" scoped>

	
</style>