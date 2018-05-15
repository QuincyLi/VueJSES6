<template>
  <div class="wrap">
    <Header :options='options' @selectChange='selectChange' :title='title' />
    <el-row class="center-con">
      <el-col :span="12" class="announcement">
        <el-row>
          <el-col :span="2">
            <span class="title">排名</span>
          </el-col>
          <el-col :span="7">
            <span class="title" style="color:#f56c6c">0-50h</span>
          </el-col>
          <el-col :span="7">
            <span class="title" style="color:#409EFF">51-70h</span>
          </el-col>
          <el-col :span="6">
            <span class="title" style="color:#67c23a">&#62;70</span>
          </el-col>
        </el-row>
        <el-row class="personalDetail" v-for="(person, index) in personalData.slice(min,min+7)" :key="index">
          <el-col :span="1">
            <span class="title">{{min + index+1}}</span>
          </el-col>
          <el-col :span="23" style="position:relative;">
            <el-progress 
              :percentage="person.time >= 120 ? 100 : (person.time / 1.2)"
              :stroke-width="25"
              :show-text="false"
              :status=getStatus(person.time)
            ></el-progress>
            <span class="personalName">
              {{person.name}}
            </span>
            <span class="personalTime">
              {{person.time.toFixed(2)}}h
            </span>
          </el-col>
        </el-row>
        <el-row class='mask'>
          <el-col :span='23' :offset='1' style='height:100%;'>
            <el-col :span="10" style='border-right:1px solid #ddd;height:100%;'>
            </el-col>
            <el-col :span="4" style='border-right:1px solid #ddd;height:100%'>
            </el-col>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12" class="rank-box">
        <dt style="float: left;margin:0 10px;height: 100%;width: 250px">
          <PersonalAnnounce 
          :title="personalTitle" 
          :topTen="personalData" 
          :afterThird="afterThird"
          :symbol="'h'"
         />
        </dt>
        <dd style='float: left;width:250px'>
          <Announcement 
          :title="teamTitle"
          :teamData='teamData'
           :symbol="'h/人'" 
          />
        </dd>
      </el-col>
    </el-row>
  </div>
</template>

<script>
/* eslint-disable */
import Header from './Header'
import Announcement from './Announcement'
import PersonalAnnounce from './PersonalAnnounce'
import { getReq,errorInfo } from '@/api/api'
export default {
  name: 'OAWorkTime',
  data: () => {
    return {
      teamTitle: '上月 小组奋斗榜',
      personalTitle: '上月 个人 TOP10',
      personalData: [],
      teamData: [],
      topTen: [],
      afterThird: [],
      options: [],
      title: '深蓝中控奋斗值',
      min:0,
      getStatus: (time) => {
        if (time < 50) {
          return 'exception'
        }
        if(time >= 71){
          return 'success'
        }
      }
    }
  },
  components: {
    Header,
    Announcement,
    PersonalAnnounce
  },
  methods:{
    selectChange(val){
      localStorage.setItem('month',val);
      getReq('/query/time',{name: val}).then(res=>{
          const {errcode,message,data} = res ;
          if(errcode == 0){ 
            this.personalData = data;
            this.afterThird = data.slice(3, 10);
          }else {
            errorInfo(errcode,message);
          }
      });
      getReq('/query/group/time',{name: val}).then(res=>{
          const {errcode,message,data} = res ;
          if(errcode == 0){
            let teamData = [];
            data.map(item=>{
              const name = Object.keys(item)[0];
              const itemObj = {
                name: name,
                ratio: item[name]
              }
              teamData.push(itemObj);
            })
            this.teamData = teamData;
          }else {
            errorInfo(errcode,message);
          }
      });
    }
  },
  created(){

    this.$nextTick(()=>{
      getReq('/query/excel/names').then(res=>{
          const {errcode,message,data} = res ;
          if(errcode == 0){ 
            this.options = data;
          }else {
            errorInfo(errcode,message);
          }
      });
      
      setInterval(()=>{
        this.min += 7;
        if(this.min>this.personalData.length){
          this.min=0;
        }
      },10000);
    })
  }
}
</script>

<style scoped>
.title {
  display:block;
  text-align: center;
  line-height: 24px;
  font-size: 15px;
  font-weight: 700
}
.personalDetail {
  margin-top: 20px;
  height: 25px;
}
.personalName {
  position: absolute;
  color: white;
  font-size: 16px;
  top: 2px;
  left: 15px;
}
.announcement {
  position:relative;
  float: left;
  overflow-y: scroll;
}
.rank-box{
  float: left;
}
.personalTime {
  position: absolute;
  color: black;
  font-weight: bold;
  font-size: 14px;
  top: 2px;
  right: 25px;
}
.mask{
  position:absolute;
  top:0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
</style>