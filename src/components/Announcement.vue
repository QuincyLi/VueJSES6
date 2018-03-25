<template>
    <el-row v-if='teamData.length'>
      <el-row class="announcementTitle">
         <el-row>
           <span class="titleFont">{{this.title}}</span>
         </el-row>
         <el-row style="display:flex">
          <el-col :span="8">
            <img src="@/assets/img/ic_Teamgold.png" class="img"/>
            <span class="detailFont">{{teamData[0].name+ '组'}}</span>
            <span class="detailFont">{{teamData[0].ratio}}</span>
          </el-col>
          <el-col :span="16">
            <img src="@/assets/img/team.png" class="img"/>
          </el-col>
         </el-row>
      </el-row>
      <el-row style="background-color: rgba(255, 247, 247, 1)">
        <el-row class="listHeight">
          <el-col :span="8" class="listContent">
            <img src="@/assets/img/ic_teamsilver.png" class="img"/>
          </el-col>
          <el-col :span="8" class="listContent">
            <span class="subtitle">{{teamData[1].name+ '组'}}</span>
          </el-col>
          <el-col :span="8" class="listContent">
            <span class="subtitle">{{teamData[1].ratio}}</span>
          </el-col>
        </el-row>
        <el-row class="listHeight">
          <el-col :span="8" class="listContent">
            <img src="@/assets/img/ic_teamcopper.png" class="img"/>
          </el-col>
          <el-col :span="8" class="listContent">
            <span class="subtitle">{{teamData[2].name+ '组'}}</span>
          </el-col>
          <el-col :span="8" class="listContent">
            <span class="subtitle">{{teamData[2].ratio}}</span>
          </el-col>
        </el-row>
        <el-row class="listHeight" v-for='(item,index) in teamData.slice(3)' :key='index' >
          <el-col :span="8" class="listContent">
            <span class="subtitle">{{index + 4}}</span>
          </el-col>
          <el-col :span="8" class="listContent">
            <span class="subtitle">{{item.name + '组'}}</span>
          </el-col>
          <el-col :span="8" class="listContent">
            <span class="subtitle">{{item.ratio}}</span>
          </el-col>
        </el-row>
      </el-row>
    </el-row>
</template>

<script>
/* eslint-disable */
export default {
  props: ['title',"teamData"]
}
</script>

<style>
.announcementTitle{
  background: rgba(214,0,0,1);
  height: 10%;
  min-height: 150px;
}
.titleFont{
  color: white;
  display:block;
  text-align:center;
  margin-top: 15px;
  margin-bottom: 15px;
}
.detailFont{
  color: white;
  display: block;
  text-align: center;
}
.listHeight{
  height: 50px;
  display: flex;
}
.listContent{
  margin:auto
}
.img{
  display:block;
  margin:auto;
}
</style>