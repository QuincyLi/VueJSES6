import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Workflow from '@/components/Workflow'
import WorkTime from '@/components/workTime'
import Carousel from '@/components/Carousel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    }, {
      path: '/',
      name: 'Worktime',
      component: WorkTime
    }, {
      path: '/worktime',
      name: 'Worktime',
      component: WorkTime
    }, {
      path: '/workflow',
      name: 'Workflow',
      component: Workflow
    },
    {
      path: '/carousel',
      name: 'Carousel',
      component: Carousel
    }
  ]
})
