// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

import router from './router'

import App from './app/app.vue'

import './assets/styles/main.styl'

Vue.config.productionTip = false

/* eslint-disable no-new */
const _ = new Vue({
  components: {
    App,
  },
  el: '#app',
  router,
  template: '<App/>',
  // render: h => h(App, {
  //   props: { msg: 'World' }
  // })
})
