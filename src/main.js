// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'

Vue.config.productionTip = false

router.afterEach((to, from, next) => {
  //每次跳转后将滚动条置顶
  window.scrollTo(0,0);

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
