<template>
    <el-carousel ref="pptCarousel" :interval='3500' indicator-position='none' arrow="never" style='width: 100%;' height="960px">
      <el-carousel-item v-for="(imgSrc,index) in imgSrcs" :key="index">
        <img :src="`http://192.168.10.73:8089/progress/${imgSrc}`" style="width: 100%"/>
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
      // setInterval(() => {
      //   if(this.$refs.pptCarousel) {
      //     this.$refs.pptCarousel.next();
      //   }
      // }, 3500);
    })
  },
  mounted(){
    setTimeout(() => {
      this.$router.push('/')
    }, 38500);
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
    background-color: #020111;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #020111;
  }
  
</style>