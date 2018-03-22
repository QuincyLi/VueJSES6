<template>
  <el-carousel indicator-position="outside" height="830">
    <el-carousel-item v-for="(imgSrc,index) in imgSrcs" :key="index">
      <img v-bind:src="imgSrcWrapper(imgSrc)" />
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default{
  name: 'Carousel',
  data: () => {
    return {
      imgSrcs: [
        'Angular.jpeg',
        'Tech.jpg',
        'React.jpeg',
        'Vue.png',
        'Basic.jpeg'
      ],
      imgSrcWrapper: (imgSrc) => {
        return 'static/img/' + imgSrc
      }
    }
  }
}
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>