import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import TypeNav from "@/components/TypeNav";

import Carousel from "@/components/Carousel";
import Pagination from "@/components/Pagination";

import store from "@/store";

import "@/mock/mockServe";

import "swiper/css/swiper.css";

import * as API from '@/api';//统一引入api请求


import {  MessageBox } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.component(TypeNav.name, TypeNav);
Vue.component(Pagination.name, Pagination);
Vue.component(Carousel.name, Carousel);

Vue.prototype.$msgbox=MessageBox;
Vue.prototype.$alert=MessageBox.alert;

new Vue({
    render: (h) => h(App),
    //全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this;
        Vue.prototype.$API = API;//统一引入api请求
    },
    //注册路由,kv一致
    router,
    store,
}).$mount("#app");
