<template>
  <el-row>
    <el-col :span="18">
      <el-row>
        <el-col :span="1">
          <span class="title">排名</span>
        </el-col>
        <el-col :span="9">
          <span class="title">0-70h</span>
        </el-col>
        <el-col :span="6">
          <span class="title">71-100h</span>
        </el-col>
        <el-col :span="6">
          <span class="title">&#62;100</span>
        </el-col>
      </el-row>
      <el-row class="personalDetail" v-for="(person, index) in personalData" :key=index>
        <el-col :span="1">
          <span class="title">{{index + 1}}</span>
        </el-col>
        <el-col :span="23" style="position:relative;">
          <el-progress v-bind:percentage="person.percentage > 100 ? 100: person.percentage" :stroke-width="25" :text-inside="true"></el-progress>
          <span class="personalName">
            {{person.name}}
          </span>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="6">
      <el-col :span="11" style="margin:0 10px;">
        <Announcement/>
      </el-col>
      <el-col :span="11">
        <PersonalAnnounce/>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
import Announcement from './Announcement'
import PersonalAnnounce from './PersonalAnnounce'
export default {
  name: 'WorkTime',
  data () {
    return {
      personalData: [
        {
          name: '张三三',
          percentage: 110.9
        },
        {
          name: '张三三',
          percentage: 110.9
        },
        {
          name: '张三三',
          percentage: 110.9
        },
        {
          name: '张三三',
          percentage: 110.9
        }
      ]
    }
  },
  components: {
    Announcement,
    PersonalAnnounce
  }
}
</script>

<style scoped>
.title {
  display:block;
  text-align: center;
}
.personalDetail {
  margin-top: 20px;
  height: 20px;
}
.personalName{
  position: absolute;
  color: white;
  top: 0;
  left: 15px;
}
</style>