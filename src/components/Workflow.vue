<template>
  <el-row>
    <el-col :span="20">
      <el-row class="progressBar">
        <el-col :span="2" v-for="(percentage, index) in percentages">
          <el-progress :key="index" type="circle" :percentage="percentage.value" v-bind:width=90 ></el-progress>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="4">
      <el-row></el-row>
      <el-row></el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Workflow',
  components: {

  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
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
        {name: '天盾', value: 90},
        {name: '产品', value: 90}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.progressBar{
  background: rgba(235, 237, 240, 1)
}
</style>
