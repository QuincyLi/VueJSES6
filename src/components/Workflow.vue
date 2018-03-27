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
          <marquee 
            behavior="scroll"
            direction="up"
            scrolldelay="200"
            height="500px"
            loop='-1'
          >
            <el-row class="displayDetail">
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
                      <span>{{userIndex+1}}</span>
                    </el-col>
                    <el-col :span="23" style="position:relative;margin:auto;">
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
            </el-row>
          </marquee>
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
      title: '上一迭代 冲刺榜',
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
      });
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
  
  padding-bottom: 20px;
  padding-left: 20px;
  overflow: auto;
}
</style>
