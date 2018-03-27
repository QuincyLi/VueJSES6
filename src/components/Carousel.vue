<template>
  <el-carousel ref="pptCarousel" :interval='3000' indicator-position='none' arrow="never" style='width: 100%' height="960px">
    <el-carousel-item v-for="(imgSrc,index) in imgSrcs" :key="index">
      <img :src="`http://192.168.10.180:8089/progress/${imgSrc}`" style="width: 100%"/>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
/* eslint-disable */
import { getReq,errorInfo } from '@/api/api'
export default{
  name: 'Carousel',
  data: () => {
    return {
      imgSrcs: [],
      imgSrcWrapper: (imgSrc) => {
        return 'static/img/' + imgSrc
      }
    }
  },
  created(){
    this.$nextTick(()=>{
       getReq('/query/images').then(res=>{
          const {errcode,message,data} = res ;
          if(errcode == 0){ 
            this.imgSrcs = data;
          }else {
            errorInfo(errcode,message);
          }
      });
      setInterval(() => {
        try{
          this.$refs.pptCarousel.next();
        }catch(e){
          this.$refs.pptCarousel.setActiveItem(0);
        }
      }, 6000);
      setTimeout(() => {
        this.$router.push('/')
      }, 35000);
    })
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