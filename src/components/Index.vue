<template>
<div class='box'>
<div class='index-wrap'>
        <el-row class="center-con">
            <el-col :span="12"  class='layout-item'>
                <div>
                    <router-link to='/workTime'>
                        workTime
                    </router-link>
                </div>
            </el-col>
            <el-col :span="12" class='layout-item'>
                <div>
                    <router-link to='/workFlow'>
                        workFlow
                    </router-link>
                </div>
            </el-col>
        </el-row>
        <div class='opera-box'>
            <div class='slide'></div>
            <dl class="upload-wrap">
                <dt style='border-bottom:2px solid #000'>
                    <el-upload
                        action="http://192.168.10.180:8089/progress/upload/excel"
                        >
                        <div class="upload-btn">
                            upload excel
                        </div>
                    </el-upload>
                </dt>
                <dd>
                    <el-upload
                        action="http://192.168.10.180:8089/progress/upload/images">
                        <div class="upload-btn">
                            upload img
                        </div>
                    </el-upload>
                </dd>
            </dl>
            <div class="slide"></div>
        </div>
    </div>
</div>
    
</template>
<script>
import { getReq,errorInfo } from '@/api/api'
export default{
  name: 'Index'
  
}
</script>
<style scoped>
.box{
    width: 100%;
    background-color: lightgreen
}
.index-wrap{
    width: 50%;
    margin: 100px auto;
    border: 20px solid #332FEF
}
.center-con{
    font-size: 40px;
    line-height: 40px;
    font-weight: 700;
    margin-top: 30px;
}
.layout-item{
    height: 200px;
    text-align: center;
    border: 50px solid rgb(255,153,18);
    border-radius: 50%
}
.opera-box{
    display: flex;
    justify-content: center;

}
.slide{
    width: 20%;
    height: 100px;
    background:#F14874;
    border-radius: 50%;
}
.upload-wrap{
    width: 300px;
    height: 300px;
    margin: 100px auto;
    border: 50px solid red;
}
.upload-wrap dt,.upload-wrap dd{
    width: 100%;
    text-align: center;
    height: 50%;
    line-height: 50px;
    font-size: 20px;
    background-color: #fff;
}
</style>