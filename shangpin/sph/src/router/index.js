import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import store from "@/store";
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade";


let router = new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home,
            meta: { show_footer: true }
        },
        {
            path: "/search/:keyword?",
            component: Search,
            name: 'search',
            props: true
        },
        {
            path: "/detail/:skuid?",
            component: Detail,
            name: 'detail',
            props: true
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
            path: "/addcartsuccess",
            name: 'addcartsuccess',
            component: AddCartSuccess,
            meta: { show_footer: true }
        },
        {
            path: "/shopcart",
            name: 'shopcart',
            component: ShopCart,
            meta: { show_footer: true }
        },
        {
            path: "/trade",
            name: 'trade',
            component: Trade,
            meta: { show_footer: true }
        },
        {
            path: "*",
            component: Home,
            meta: { show_footer: true }
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    }
});
router.beforeEach(async (to, from, next) => {
    //next 放行函数 (path)
    //next('/login')
    let token = store.state.user.token;
    let user_info = store.state.user.user_info;
    let name = store.state.user.user_info.name;
    if (token) {
        if (to.path == '/login' ||to.path == '/register') {
            next('/home');
        } else {
            if (name) {
                next();
            } else {
                try {//如果没有用户信息，但是有token 就重新调用
                    await store.dispatch('getUserInfo');
                    next();
                } catch (error) {//token 过期了，清空存储的token
                    await store.dispatch('getLogout');//正好登出方法中有清空动作
                    next('/login');
                }
            }
        }

    }else{
        console.log(444);

        next();
    }
});

export default router;