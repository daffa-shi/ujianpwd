import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Component1 from '@/components/Component1'
import User from '@/components/User'
import Ujian from '@/components/Ujian'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Component1',
      name: 'Component1',
      component: Component1
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path: '/Ujian',
      name: 'Ujian',
      component: Ujian
    }
  ]
})
