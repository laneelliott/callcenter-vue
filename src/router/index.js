import Vue from 'vue'
import Router from 'vue-router'
import ComponentContainer from '@/components/ComponentContainer'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ComponentContainer',
      component: ComponentContainer
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
