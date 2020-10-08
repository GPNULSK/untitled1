import Vue from 'vue'
import Router from 'vue-router'

import index from '../components/Index'
import main from '../components/Main'
import index1 from '../components/Index1'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/index',component:index},
    {path: '/main',component: main},
    {path: '/',redirect:'/index1'},
    {path: "/index1",index1}
  ],
  mode:'history'
})
