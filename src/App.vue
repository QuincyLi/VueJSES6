<template>
  <el-container class="container">
    <el-header>
      <Header />
    </el-header>
    <el-main >
      <router-view/>
    </el-main>
</el-container>
</template>

<script>
import Header from '@/Header/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
.container{
  height: 100%
}
.el-header{
    background-color: #332FEF;
    color: #333;
    text-align: center;
    line-height: 60px;
}
.el-main{
  background-color: #FAFCFF;
}
</style>
