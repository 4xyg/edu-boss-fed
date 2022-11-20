// 接口统一管理
import requests from "./request";
import mockRequests from "./mockRequest";

/* 获取搜索模块 */

// 三级联通接口
export const reqCategoryList = () => {
    //返回的是promise对象
    return requests({
        url: "/product/getBaseCategoryList",
        method: "get",
    });
};

export const reqSearchList = (data) => {
    // {
    //     "category3Id": "61",
    //     "categoryName": "手机",
    //     "keyword": "小米",
    //     "order": "1:desc",
    //     "pageNo": 1,
    //     "pageSize": 10,
    //     "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
    //     "trademark": "4:小米"
    //   }

    //返回的是promise对象
    return requests({
        url: "/list",
        method: "post",
        data:data,
    });
};

export const reqBannerList = () => {
    //返回的是promise对象

    return mockRequests({
        url: "/banner",
        method: "get",
    });
};
export const reqFloorList = () => mockRequests.get("/floor");
