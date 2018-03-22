<template>
  <el-row>
    <el-col :span="20">
      <el-row class="progressBar">
        <el-col :span="2" v-for="(percentage, index) in percentages" v-bind:key="percentage.name">
          <div class="content">
            <el-progress type="circle" :percentage="percentage.value" v-bind:width=90 />
            <span class="subtitle">{{percentage.name}}</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-row class="personalDetail">
          <el-row class="personalName">
            <el-col>
              <span>Quincy</span>
            </el-col>
          </el-row>
          <el-row style="margin-top: 20px;display:flex;">
            <el-col :span="1" class="number">
              <span>01</span>
            </el-col>
            <el-col :span="23" style="position:relative;margin:auto;">
              <el-progress :percentage="70" :stroke-width="22"></el-progress>
              <span class="userStory">
                故事点：实现CI（联编（双操作系统下）、发布）
              </span>
            </el-col>
          </el-row>
        </el-row>
      </el-row>
    </el-col>
    <el-col :span="4" class="announcement">
      <el-row class="announcementTitle">
         <el-row>
           <span class="titleFont">上一迭代 冲刺榜</span>
         </el-row>
         <el-row style="display:flex">
          <el-col :span="6">
            <img src="@/assets/img/ic_Teamgold.png" class="img"/>
            <span class="detailFont">小组1</span>
            <span class="detailFont">100%</span>
          </el-col>
          <el-col :span="18">
            <img src="@/assets/img/team.png" class="img"/>
          </el-col>
         </el-row>
      </el-row>
      <el-row>
        <el-row class="listHeight">
          <el-col :span="8" class="listContent">
            <img src="@/assets/img/ic_teamsilver.png" class="img"/>
          </el-col>
          <el-col :span="8" class="listContent">
            <span class="subtitle">小组2</span>
          </el-col>
          <el-col :span="8" class="listContent">
            <span class="subtitle">97%</span>
          </el-col>
        </el-row>
        <el-row class="listHeight">
          <el-col :span="8" class="listContent">
            <img src="@/assets/img/ic_teamcopper.png" class="img"/>
          </el-col>
          <el-col :span="8" class="listContent">
            <span class="subtitle">小组3</span>
          </el-col>
          <el-col :span="8" class="listContent">
            <span class="subtitle">97%</span>
          </el-col>
        </el-row>
        <el-row class="listHeight">
          <el-col :span="8" class="listContent">
            <span class="subtitle">4</span>
          </el-col>
          <el-col :span="8" class="listContent">
            <span class="subtitle">小组3</span>
          </el-col>
          <el-col :span="8" class="listContent">
            <span class="subtitle">97%</span>
          </el-col>
        </el-row>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Workflow',
  components: {

  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      percentages: [
        {name: '基础建设', value: 50},
        {name: '平台', value: 72},
        {name: '天梭', value: 90},
        {name: '天湖', value: 90},
        {name: '天基', value: 90},
        {name: '天匠', value: 90},
        {name: '天坊', value: 90},
        {name: '天擎', value: 90},
        {name: '天盾', value: 90},
        {name: '天数', value: 90},
        {name: '天智', value: 90},
        {name: '产品', value: 90}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.progressBar{
  display: flex;
  background: rgba(235, 237, 240, 1)
}
.content{
  margin: auto;
  width: fit-content;
}
.subtitle{
  display: block;
  text-align: center;
}
.announcement{
  min-height: 830px;
}
.announcementTitle{
  background: rgba(214,0,0,1);
  height: 10%;
  min-height: 150px;
}
.listHeight{
  height: 50px;
  display: flex;
}
.listContent{
  margin:auto
}
.titleFont{
  color: white;
  display:block;
  text-align:center;
  margin-top: 15px;
  margin-bottom: 15px;
}
.img{
  display:block;
  margin:auto;
}
.detailFont{
  color: white;
  display: block;
  text-align: center;
}
.personalDetail{
  height: auto;
  margin-top: 20px;
}
.personalName{
  padding: 15px 20px;
  border-bottom: solid 1px rgba(235, 237, 240, 1);
}
.userStory{
  position: absolute;
  top: 0;
  left: 15px;
}
.number{
  font-size: 24px;
  margin: auto;
}
</style>
