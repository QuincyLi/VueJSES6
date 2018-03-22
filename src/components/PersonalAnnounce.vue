<template>
    <el-row>
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
    </el-row>
</template>

<script>
    
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