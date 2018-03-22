<template>
  <el-row>
    <el-col :span="18" class="announcement">
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
          <el-progress v-bind:percentage="person.time > 100 ? 100: person.time" :stroke-width="25" :show-text="false"></el-progress>
          <span class="personalName">
            {{person.name}}
          </span>
          <span class="personalTime">
            {{person.time}}
          </span>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="6" class="announcement">
      <el-col :span="11" style="margin:0 10px;height: 100%;">
        <PersonalAnnounce v-bind:title="personalTitle" v-bind:topTen="personalData" v-bind:afterThird="afterThird"/>
      </el-col>
      <el-col :span="11">
        <Announcement v-bind:title="teamTitle" />
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
import Announcement from './Announcement'
import PersonalAnnounce from './PersonalAnnounce'
import { getWorkTime } from '@/api/apiServices'
export default {
  name: 'WorkTime',
  data: () => {
    return {
      teamTitle: '上月 小组奋斗榜',
      personalTitle: '上月 个人 TOP10',
      personalData: [],
      topTen: [],
      afterThird: []
    }
  },
  components: {
    Announcement,
    PersonalAnnounce
  },
  beforeCreate () {
    getWorkTime().then((result) => {
      this.personalData = result.data.data.sort((p1, p2) => {
        return p2.time - p1.time
      })
      this.topTen = this.personalData.slice(0, 9)
      this.afterThird = this.personalData.slice(3, 9)
    })
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
  height: 25px;
}
.personalName {
  position: absolute;
  color: white;
  top: 2px;
  left: 15px;
}
.announcement {
  height: 830px;
  overflow: auto;
}
.personalTime {
  position: absolute;
  color: white;
  top: 2px;
  right: 25px;
}
</style>