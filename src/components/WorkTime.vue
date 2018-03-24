<template>
  <div class="wrap">
    <Header :options='options' @selectChange='selectChange' />
    <el-row class="center-con">
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
        <el-row class="personalDetail" v-for="(person, index) in personalData" :key="index">
          <el-col :span="1">
            <span class="title">{{index + 1}}</span>
          </el-col>
          <el-col :span="23" style="position:relative;">
            <el-progress 
              :percentage="person.time > 100 ? 100: person.time" 
              :stroke-width="25" 
              :show-text="false"
            ></el-progress>
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
          <PersonalAnnounce 
          :title="personalTitle" 
          :topTen="personalData" 
          :afterThird="afterThird"/>
        </el-col>
        <el-col :span="11">
          <Announcement 
          :title="teamTitle"
          :teamData='teamData' 
          />
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Header from './Header'
import Announcement from './Announcement'
import PersonalAnnounce from './PersonalAnnounce'
import { getReq,errorInfo } from '@/api/api'
export default {
  name: 'WorkTime',
  data: () => {
    return {
      teamTitle: '上月 小组奋斗榜',
      personalTitle: '上月 个人 TOP10',
      personalData: [],
      teamData: [],
      topTen: [],
      afterThird: [],
      options: []
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
      })
    })
  } 
}
</script>

<style scoped>
.title {
  display:block;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
  font-weight: 700
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