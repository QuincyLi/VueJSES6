<template>
    <el-row>
      <el-row class="announcementTitleOfPerson">
         <el-row>
           <span class="titleFontOfPerson">{{this.title}}</span>
         </el-row>
         <el-row style="display:flex">
          <el-col :span="8">
            <img src="@/assets/img/ic_gold.png" class="img icon"/>
          </el-col>
          <el-col :span="8">
            <img src="@/assets/img/head.png" class="img"/>
            <span class="detailFontOfPerson" style="margin-top: 10px">{{this.topTen[0] ? this.topTen[0].name : ''}}</span>
          </el-col>
          <el-col :span="8">
            <span class="detailFontOfPerson icon">{{this.topTen[0] ? this.topTen[0].time : ''}}</span>
          </el-col>
         </el-row>
      </el-row>
      <el-row style="background-color: rgba(239, 246, 255, 1)">
        <el-row class="listHeightOfPerson">
          <el-col :span="8" class="listContentOfPerson">
            <img src="@/assets/img/ic_silver.png" class="img"/>
          </el-col>
          <el-col :span="8" class="listContentOfPerson">
            <span class="subtitle">{{this.topTen[1] ? this.topTen[1].name : ''}}</span>
          </el-col>
          <el-col :span="8" class="listContentOfPerson">
            <span class="subtitle">{{this.topTen[1] ? this.topTen[1].time : ''}}</span>
          </el-col>
        </el-row>
        <el-row class="listHeightOfPerson">
          <el-col :span="8" class="listContentOfPerson">
            <img src="@/assets/img/ic_copper.png" class="img"/>
          </el-col>
          <el-col :span="8" class="listContentOfPerson">
            <span class="subtitle">{{this.topTen[2] ? this.topTen[2].name : ''}}</span>
          </el-col>
          <el-col :span="8" class="listContentOfPerson">
            <span class="subtitle">{{this.topTen[2] ? this.topTen[2].time : ''}}</span>
          </el-col>
        </el-row>
        <el-row class="listHeightOfPerson" v-for="(person, index) in afterThird" :key="index">
          <el-col :span="8" class="listContentOfPerson">
            <span class="subtitle">{{index + 3}}</span>
          </el-col>
          <el-col :span="8" class="listContentOfPerson">
            <span class="subtitle">{{person.name}}</span>
          </el-col>
          <el-col :span="8" class="listContentOfPerson">
            <span class="subtitle">{{person.time}}</span>
          </el-col>
        </el-row>
      </el-row>
    </el-row>
</template>

<script>
export default {
  props: ['title', 'topTen', 'afterThird']
}
</script>

<style scoped>
.announcementTitleOfPerson {
  background: rgba(0, 102, 228, 1);
  height: 10%;
  min-height: 150px;
}
.titleFontOfPerson {
  color: white;
  display:block;
  text-align:center;
  margin-top: 15px;
  margin-bottom: 15px;
}
.detailFontOfPerson {
  color: white;
  font-size: 15px;
  display: block;
  text-align: center;
}
.listHeightOfPerson {
  height: 50px;
  display: flex;
}
.listContentOfPerson {
  margin:auto
}
.imgOfPerson {
  display:block;
  margin:auto;
}
.icon {
  margin: 20px;
}
</style>