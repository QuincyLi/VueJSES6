<template>
    <div class="page-header">
      <div class="center-con" style='padding:0 50px;'>
        <span class="title">{{title}}</span>
        <el-select 
          v-model="value" 
          placeholder="请选择" 
          class="sprint"
          @change="selecChange" 
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            >
          </el-option>
        </el-select>
        <nav class='nav-bar'>
          <router-link to='/workFlow'>
              workFlow
          </router-link>
          <router-link to='/worktime'>
              worktime
          </router-link>
          <router-link to='/carousel'>
              carousel
          </router-link>
        </nav>
        <span class="date">
            {{startDate?(startDate + '~' + endDate):''}}
        </span>
        <span class="remainingDate">
          {{(toEndDateTimestamp - time)|countTime}}
        </span>
      </div>
        
    </div>
</template>

<script>
/* eslint-disable */
import { getReq,errorInfo } from '@/api/api'
  export default {
    name: 'Header',
    data () {
      return {
        value: '',
        endDate: '',
        startDate: '',
        toEndDatetime: '',
        toEndDateTimestamp: 0,
        time: 0
      }
    },
    props: ["options", "title"],
    watch: {
      options(newVal){
        const option = newVal[newVal.length-1];
        this.value =  option.value;
        this.$emit('selectChange',this.value);
        getReq(`/query/redmine/${this.value}/cycle`).then((res) => {
          if(!res.data) return
          const {endDate, startDate, toEndDatetime, toEndDateTimestamp} = res.data;
          this.endDate = endDate;
          this.startDate = startDate;
          this.toEndDatetime = toEndDatetime;
          this.toEndDateTimestamp = toEndDateTimestamp
        });
      }
    },
    methods: {
      selecChange(val) {
        this.$emit('selectChange', val);
        getReq(`/query/redmine/${val}/cycle`).then((res) => {
          const {endDate, startDate, toEndDatetime, toEndDateTimestamp} = res.data;
          this.endDate = endDate;
          this.startDate = startDate;
          this.toEndDatetime = toEndDatetime;
          this.toEndDateTimestamp = toEndDateTimestamp
        });
      }
    },
    created(){
      this.$nextTick(()=>{
         setInterval(() => {
        this.time++;
      }, 1000)
      })
    }
  }
</script>

<style scoped>
.page-header{
    background-color: #332FEF;
    color: #333;
    text-align: center;
    line-height: 60px;
    height: 60px;
    margin-bottom: 20px;
}
.nav-bar{
  font-size: 24px;
}
.nav-bar a {
  color: #fff;
}
.title{
  color: #FFFFFF;
  font-weight: bold;
  float: left;
  font-size: 20px;
}
.sprint{
  margin-left: 20px;
  float:left;
}
.date{
  float: left;
  color: #FFFFFF;
  margin-left: 20px;
  font-size: 14px;  
}
.remainingDate{
  float: right;
  color: #FFFFFF;
  font-size: 24px;
}
</style>