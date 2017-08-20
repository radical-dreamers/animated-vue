// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import AnimatedVue from 'animated-vue'
import App from './App'
import 'animate.css/animate.css'

Vue.config.productionTip = false
Vue.use(AnimatedVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
