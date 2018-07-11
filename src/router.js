import Vue from 'vue'
import Router from 'vue-router'
import ShowJson from '@/components/showJson'
import ArrayLoopTest from '@/components/arrayLoopTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/showJson',
      name: 'ShowJson',
      component: ShowJson
    },
    {
      path: '/ArrayLoopTest',
      name: 'ArrayLoopTest',
      component: ArrayLoopTest
    }
  ]
})
