<template>
    <div class="header">
        <span class="title">深蓝中控项目冲刺</span>
        <el-select v-model="value" placeholder="请选择" class="sprint">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span class="date">
            {{getDate}}
        </span>
        <span class="remainingDate">
            1天16小时5分
        </span>
    </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        options: [{
          value: '选项1',
          label: '迭代1'
        }, {
          value: '选项2',
          label: '迭代2'
        }, {
          value: '选项3',
          label: '迭代3'
        }, {
          value: '选项4',
          label: '迭代4'
        }, {
          value: '选项5',
          label: '迭代5'
        }],
        value: ''
      }
    },
    computed: {
      getDate: () => {
        return '2018.2.21~2018.2.28'
      }
    }
  }
</script>

<style scoped>
.header{
  height: 100%;
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