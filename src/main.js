// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'babel-polyfill'
require('es6-promise').polyfill()

Vue.config.productionTip = false

Vue.use(ElementUI)

function trans (val){
  if (val < 10) {
    val = "0" + val ;
  }
  return val ;
};
Vue.filter('countTime',(time)=> {
  time = time<0?0:time;
  time -= 0;
  let {d,h,m,s}={d:parseInt(time/(24*3600)),h:parseInt(time/3600%24),m:parseInt(time/60%60),s:parseInt(time%60)};
  if (d===0) {
    d="";
  }else{
    d+="天";
  }
  h = trans(h);
  m = trans(m);
  s = trans(s);
  return d + h +'小时' + m + "分" + s + "秒" ;
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
