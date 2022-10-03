import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //注册路由,kv一致
  router
}).$mount('#app')
