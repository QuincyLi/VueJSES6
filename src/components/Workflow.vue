<template>
  <div class="wrap">
    <Header :options='options' @selectChange='selectChange' :title='bigTitle' />
    <el-row class="center-con">
      <el-col :span="19" style='float:left;'>
        <ul class="progressBar">
          <li style='width:110px;padding: 10px;'
          v-for="(percentage, index) in percentages" 
          :ref='percentage.titleOrName'
          :key="index"
          :class="percentageIndex === index?'percentage-active':''">
            <div class="content" @click='checkGroup(index)'>
              <el-progress type="circle" :percentage="percentage.ratio" :width='90' />
              <span class="subtitle">{{percentage.titleOrName}}</span>
            </div>
          </li>
        </ul>
        <el-row id="scrollerParent" class="displayDetail">
          <marquee 
            behavior="alternate"
            direction="up"
            height="500"
          >
            <el-row class="personalDetail" 
              v-for="person in personalData" 
              :key="person.name">
              <el-row class="personalName">
                <el-col>
                  <span>{{person.titleOrName}}组</span>
                </el-col>
              </el-row>
              <el-row style="margin-top: 20px;display:flex;" 
                v-for="(userStory,userIndex) in person.child" 
                :key="userIndex">
                <el-col :span="1" class="number">
                <div class="circle" style="background-color: rgb(103, 194, 58);"></div>
                </el-col>
                <el-col :span="1" class="number">
                  <span>{{userIndex+1}}</span>
                </el-col>
                <el-col :span="22" style="position:relative;margin:auto;">
                  <el-progress 
                  :percentage="userStory.ratio" 
                  :stroke-width="22" 
                  :status="isSuccess(userStory.ratio)" 
                  :show-text="true"></el-progress>
                  <span class="userStory">
                    {{userStory.titleOrName}}
                  </span>
                </el-col>
              </el-row>
            </el-row>
          </marquee>
        </el-row>
      </el-col>
      <el-col :span="5" style='float:left;width:250px;'>
        <Announcement 
          :title="title"
          :teamData='teamData'
          :symbol="'%'" 
          />
      </el-col>
    </el-row>
  </div>
</template>

<script>
/* eslint-disable */
import Header from './Header'
import Announcement from './Announcement'
import { getReq,errorInfo } from '@/api/api'
export default {
  name: 'Workflow',
  components: {
    Header,
    Announcement
  },
  data () {
    return {
      title: '迭代冲刺榜',
      isSuccess: (percentage) => {
        if (percentage === 100) {
          return 'success'
        }
      },
      bigTitle: '深蓝中控项目冲刺',
      options: [],
      percentages: [],
      percentageIndex: '',
      personalData: [],
      teamData: [],
      ScrollerPosition: 0,
      clock: '',
      highLightInd: 0
    }
  },
  methods: {
    selectChange(val){
        getReq(`/query/redmine/${val}`).then(res=>{
          const {errcode,message,data} = res ;
          if(errcode == 0){ 
            this.percentages = data;
            this.checkGroup(0);
          }else {
            errorInfo(errcode,message);
          }
        }).then(() => {
          getReq(`/query/redmine/${val}/rank`).then(res=>{
            const {errcode,message,data} = res ;
            if(errcode == 0){
              let teamData =[];
              data.map(item=>{
                const itemObj  = {
                  name: item.titleOrName,
                  ratio: item.ratio
                }
                teamData.push(itemObj);
              }) 
              this.teamData = teamData;
            }else {
              errorInfo(errcode,message);
            }
          });
        });
    },
    checkGroup(index){
      this.percentageIndex = index;
      this.personalData = this.percentages[index].child;
    }
  }, 
   created(){
    this.$nextTick(()=>{
      getReq('/query/redmine/projects').then(res=>{
          const {errcode,message,data} = res ;
          if(errcode == 0){ 
            this.options = Object.keys(data).map((item)=>{
              const option = {
                label: data[item],
                value: item
              }
              return option;
            });
          }else {
            errorInfo(errcode,message);
          }
      });
      const month = localStorage.month;
      getReq('/query/group/time',{name: month}).then(res=>{
          const {errcode,message,data} = res ;
          if(errcode == 0){
            let teamData = [];
            data.map(item=>{
              const name = Object.keys(item)[0];
              const itemObj = {
                name: name,
                rate: item[name]
              }
              teamData.push(itemObj);
            })
            this.teamData = teamData;
          }else {
            errorInfo(errcode,message);
          }
      });
    })
    setTimeout(() => {
        this.$router.push('/')
      }, 25000);
    // setInterval(() => {
    //   let name = '';
    //   if(this.highLightInd < this.percentages.length){
    //     this.checkGroup(this.highLightInd);
    //     this.highLightInd += 1;
    //   } else{
    //     this.highLightInd = 0;
    //     this.checkGroup(this.highLightInd);
    //     this.highLightInd += 1;
    //   }
    // }, 10000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.progressBar{
  display: flex;
  background: #fff
}
.content{
  margin: auto;
  width: fit-content;
  cursor: pointer;
}
.announcement{
  min-height: 830px;
}
.percentage-active{
   background-color: #deeeff;
   color: #20a0ff;
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
  top: 2px;
  left: 15px;
}
.number{
  font-size: 24px;
  margin: auto;
}
.displayDetail {
  position: relative;
  height: 476px;
  padding-bottom: 20px;
  padding-left: 20px;
  overflow: hidden;
}
.circle{
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 auto;
}
.autoScroller{
  width: 100%;
  position:absolute;
  top:0;
  left:0;
}
</style>
