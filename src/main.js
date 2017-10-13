// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/bootstrap.min.css'
import './assets/css/main.css'
import './assets/css/style.css'
import './assets/css/demo.css'
import './assets/css/font-awesome.css'
import './assets/js/bootstrap.min'
import './assets/js/jquery.slimscroll.min'
import './assets/js/klorofil-common'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
