//对axios进行二次封装

import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import store from "@/store";

const requests=axios.create({
    baseURL:"/api",
    timeout:5000
});



requests.interceptors.request.use(config=>{
    if(

        store.state.detail.uuid_token

    )
    {
        config.headers.userTempId=store.state.detail.uuid_token;//需要跟后端商量好header头
    }
    nprogress.start();
    return config
})

requests.interceptors.response.use((res)=>{
    nprogress.done();

    return res.data;
},(error)=>{
    return Promise.reject(new Error('fail'))
})










export default requests;