import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Flow from './views/flow.vue'
import WhatDYM from './views/whatDYM.vue'
import FutureEmployer from './views/FutureEmployer.vue'

Vue.use(Router)

export default new Router({ 
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component:About
    },{
      path: '/future-employer',
      name: 'future',
      component:FutureEmployer  
    },{
      path: '/what-dym',
      name: 'dym',
      component:WhatDYM  
    },{
      path: '/selection-flow',
      name: 'flow',
      component:Flow,
    }
  ]
})
