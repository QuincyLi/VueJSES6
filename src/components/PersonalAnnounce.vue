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
            <span class="detailFontOfPerson">赵三三</span>
          </el-col>
          <el-col :span="8">
            <span class="detailFontOfPerson icon">119h</span>
          </el-col>
         </el-row>
      </el-row>
      <el-row style="background-color: rgba(239, 246, 255, 1)">
        <el-row class="listHeightOfPerson">
          <el-col :span="8" class="listContentOfPerson">
            <img src="@/assets/img/ic_silver.png" class="img"/>
          </el-col>
          <el-col :span="8" class="listContentOfPerson">
            <span class="subtitle">小组2</span>
          </el-col>
          <el-col :span="8" class="listContentOfPerson">
            <span class="subtitle">97%</span>
          </el-col>
        </el-row>
        <el-row class="listHeightOfPerson">
          <el-col :span="8" class="listContentOfPerson">
            <img src="@/assets/img/ic_copper.png" class="img"/>
          </el-col>
          <el-col :span="8" class="listContentOfPerson">
            <span class="subtitle">小组3</span>
          </el-col>
          <el-col :span="8" class="listContentOfPerson">
            <span class="subtitle">97%</span>
          </el-col>
        </el-row>
        <el-row class="listHeightOfPerson">
          <el-col :span="8" class="listContentOfPerson">
            <span class="subtitle">4</span>
          </el-col>
          <el-col :span="8" class="listContentOfPerson">
            <span class="subtitle">小组3</span>
          </el-col>
          <el-col :span="8" class="listContentOfPerson">
            <span class="subtitle">97%</span>
          </el-col>
        </el-row>
      </el-row>
    </el-row>
</template>

<script>
export default {
  props: ['title']
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