<template>
  <el-row>
    <el-col :span="21">
      <el-row class="progressBar">
        <el-col :span="2" v-for="(percentage, index) in percentages" v-bind:key="percentage.name">
          <div class="content">
            <el-progress type="circle" :percentage="percentage.value" v-bind:width=90 />
            <span class="subtitle">{{percentage.name}}</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-row class="personalDetail" v-for="person in personalData" v-bind:key="person.name">
          <el-row class="personalName">
            <el-col>
              <span>{{person.name}}</span>
            </el-col>
          </el-row>
          <el-row style="margin-top: 20px;display:flex;" v-for="userStory in person.userStorys" v-bind:key="userStory.id">
            <el-col :span="1" class="number">
              <span>{{userStory.id}}</span>
            </el-col>
            <el-col :span="23" style="position:relative;margin:auto;">
              <el-progress v-bind:percentage="userStory.percentage" :stroke-width="22" :status="isSuccess(userStory.percentage)" :show-text="true"></el-progress>
              <span class="userStory">
                {{userStory.detail}}
              </span>
            </el-col>
          </el-row>
        </el-row>
      </el-row>
    </el-col>
    <el-col :span="3" class="announcement">
      <Announcement v-bind:title="title" />
    </el-col>
  </el-row>
</template>

<script>
import Announcement from './Announcement'
export default {
  name: 'Workflow',
  components: {
    Announcement
  },
  data () {
    return {
      title: '上一迭代 冲刺榜',
      msg: 'Welcome to Your Vue.js App',
      isSuccess: (percentage) => {
        if (percentage === 100) {
          return 'success'
        }
      },
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
      ],
      personalData: [
        {
          name: '张三',
          userStorys: [
            {
              id: '01',
              detail: '故事点：实现CI（联编（双操作系统下）、发布）',
              percentage: 70
            },
            {
              id: '02',
              detail: '故事点：实现CI（联编（双操作系统下）、发布）',
              percentage: 50
            },
            {
              id: '03',
              detail: '故事点：实现CI（联编（双操作系统下）、发布）',
              percentage: 40
            }
          ]
        },
        {
          name: '李四',
          userStorys: [
            {
              id: '01',
              detail: '故事点：git源码管理，包括配置库规划及管理',
              percentage: 70
            },
            {
              id: '02',
              detail: '故事点：实现CI（联编（双操作系统下）、发布）',
              percentage: 100
            }
          ]
        }
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
.announcement{
  min-height: 830px;
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
