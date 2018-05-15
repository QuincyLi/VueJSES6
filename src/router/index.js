import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Workflow from '@/components/Workflow'
import WorkTime from '@/components/WorkTime'
import OAWorkflow from '@/components/OAWorkflow'
import OAWorkTime from '@/components/OAWorkTime'

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
    },
    {
      path: '/workflow',
      name: 'Workflow',
      component: Workflow
    },
    {
      path: '/oaworkflow',
      name: 'OAWorkflow',
      component: OAWorkflow
    },
    {
      path: '/oaworktime',
      name: 'OAWorkTime',
      component: OAWorkTime
    }
  ]
})
