import Vue from 'vue'
import Router from 'vue-router'
import ComponentContainer from '@/components/ComponentContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ComponentContainer',
      component: ComponentContainer
    }
  ]
})
