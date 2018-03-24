<template>
    <div class="page-header">
      <div class="center-con">
        <span class="title">深蓝中控项目冲刺</span>
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
        <span class="date">
            {{getDate}}
        </span>
        <span class="remainingDate">
            1天16小时5分
        </span>
      </div>
        
    </div>
</template>

<script>
import { getReq,errorInfo } from '@/api/api'
  export default {
    name: 'Header',
    data () {
      return {
        value: ''
      }
    },
    props: ["options"],
    watch: {
      options(newVal){
        const option = newVal[newVal.length-1];
        this.value =  option.value;
        this.$emit('selectChange',this.value);
      }
    },
    computed: {
      getDate: () => {
        return '2018.2.21~2018.2.28'
      }
    },
    methods: {
      selecChange(val){
        this.$emit('selectChange',val);
      }
    },
    created(){
      this.$nextTick(()=>{
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