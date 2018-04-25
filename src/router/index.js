import Vue from 'vue'
import Router from 'vue-router'
import ComponentContainer from '@/components/ComponentContainer'
import FormBuilder from '@/components/FormBuilder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ComponentContainer',
      component: ComponentContainer
    },
    {
      path: '/creator',
      name: 'FormBuilder',
      component: FormBuilder
    }
  ]
})
