import { reqDetailInfo, reqUpdateCart } from "@/api";
import { getUUID } from "../../utils/uuid_token";


const state = {
    detailInfo:{},
    uuid_token:getUUID()||undefined
}

const mutations = {
    DETAILINFO(state,detailInfo){
        state.detailInfo=detailInfo;
    },
    UPDATECART(state,cartinfo){
        // state;

    }
};

const actions = {
    async getDetailInfo({commit},skuid){
        let result = await reqDetailInfo(skuid);
        if(result.code == 200){
            commit('DETAILINFO',result.data)
        }
    },

    async updateCart({commit},{skuid,skuNum}){
        let result = await reqUpdateCart(skuid,skuNum);
        console.log(result);
        if(result.code == 200){
            return 'ok'
            // commit('UPDATECART')
        }else{
            return Promise.reject(new Error('fail!'))
        }
    }
    
};

const getters = {
    categoryView(state){
        return state.detailInfo.categoryView||{};

    },
    skuInfo(state){
        return state.detailInfo.skuInfo||{};

    },
    spuSaleAttrList(state){
        return state.detailInfo.spuSaleAttrList||[];
    }
    ,

};
export default {
    state, mutations, actions, getters
}