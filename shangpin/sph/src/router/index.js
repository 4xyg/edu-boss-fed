import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import  Home  from "@/pages/Home";
import  Search  from "@/pages/Search";
import  Login  from "@/pages/Login";
import  Register  from "@/pages/Register";

export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home,
            meta:{show_footer:true}
        },
        {
            path: "/search/:keyword?",
            component: Search,
            meta:{show_footer:false},
            name:'search',
            props:true
        },
        {
            path: "/login",
            component: Login,
        },
        {
            path: "/register",
            component: Register,
        },
        {
            path: "*",
            component: Home,
        },
    ],
});
