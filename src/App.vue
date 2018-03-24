<template>
  <el-container class="container">
    <router-view/>
  </el-container>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style>
.container{
  height: 100%
}
.el-main{
  background-color: #FAFCFF;
}
.el-progress-bar{
  width: 99%;
}
.subtitle{
  display: block;
  text-align: center;
}
</style>
