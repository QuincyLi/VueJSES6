<template>
  <div class="wrap">
    <Header :options='options' @selectChange='selectChange' />
    <el-row class="center-con">
      <el-col :span="21">
        <el-row class="progressBar">
          <el-col :span="2" 
          v-for="(percentage, index) in percentages" 
          :key="index" 
          :class="percentageIndex===index?'percentage-active':''">
            <div class="content" @click='checkGroup(index)'>
              <el-progress type="circle" :percentage="percentage.ratio" :width='90' />
              <span class="subtitle">{{percentage.titleOrName}}</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-row class="personalDetail" 
            v-for="person in personalData" 
            :key="person.name">
            <el-row class="personalName">
              <el-col>
                <span>{{person.titleOrName}}</span>
              </el-col>
            </el-row>
            <el-row style="margin-top: 20px;display:flex;" 
              v-for="(userStory,userIndex) in person.child" 
              :key="userIndex">
              <el-col :span="1" class="number">
                <span>{{userIndex}}</span>
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
      </el-col>
      <el-col :span="3" class="announcement">
        <Announcement 
          :title="title"
          :teamData='teamData' 
          />
      </el-col>
    </el-row>
  </div>
</template>

<script>
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
      options: [],
      percentages: [],
      percentageIndex: '',
      personalData: [],
      teamData: []
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
  cursor: pointer;
}
.announcement{
  min-height: 830px;
}
.percentage-active{
   background-color: #332FEF;
   color: #fff
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
