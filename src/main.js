// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// Import Vue Dependencies
import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.use(BootstrapVue);

// Add CSS Dependencies
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/scss/index.scss' // Global SCSS Stylesheet

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
