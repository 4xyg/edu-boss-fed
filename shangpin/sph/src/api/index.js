// 接口统一管理
import requests from "./request";
import mockRequests from "./mockAjax";


// 三级联通接口
export const reqCategoryList= () =>{
    //返回的是promise对象
    return requests({
        url:'/product/getBaseCategoryList',
        method:'get'
    })
}

export const reqBannerList= () =>{
    //返回的是promise对象
    return mockRequests({
        url:'/product/getBaseCategoryList',
        method:'get'
    })
}
