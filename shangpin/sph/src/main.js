import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/pages/Home/TypeNav'

Vue.config.productionTip = false
Vue.component(TypeNav.name,TypeNav);

new Vue({
  render: h => h(App),
  //注册路由,kv一致
  router,
}).$mount('#app')
