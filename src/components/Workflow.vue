<template>
  <el-row>
    <el-col :span="20">
      <el-row class="progressBar">
        <el-col :span="2" v-for="percentage in percentages">
          <el-progress type="circle" :percentage="percentage" width="90"></el-progress>
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
      percentages: [50, 72, 90, 90, 90 ,90, 90, 90, 90, 90, 90, 90]
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
