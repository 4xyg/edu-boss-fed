import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import  Home  from "@/pages/Home";
import  Search  from "@/pages/Search";
import  Login  from "@/pages/Login";
import  Register  from "@/pages/Register";
import  Detail  from "@/pages/Detail";

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
            name:'search',
            props:true
        },
        {
            path: "/detail/:keyword?",
            component: Detail,
            name:'detail',
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
            meta:{show_footer:true}
        },
    ],
    scrollBehavior(to,from,savedPosition){
        return {y:0}
    }
});
