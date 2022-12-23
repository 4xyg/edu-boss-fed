import { reqCartList, reqDeleteCartById, reqCheckCart } from "@/api";


const state = {
    cartInfoList: [],
}

const mutations = {

    CARTINFOLIST(state, cartinfo) {
        // state;
        state.cartInfoList = cartinfo

    }
};

const actions = {
    async getCartList({ commit }, skuid) {
        let result = await reqCartList();
        if (result.code == 200) {
            commit('CARTINFOLIST', result.data)
        }
    },
    async deleteCartById({ commit }, skuid) {
        let result = await reqDeleteCartById(skuid);
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('fail!'))
        }
    },
    async checkCart({ commit }, { skuId, isChecked }) {
        let result = await reqCheckCart(skuId, isChecked);
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('fail!'))
        }
    },
    deleteCheckedItem({ dispatch, getters }) {
        let PromiseAll = [];
        getters.cartList.cartInfoList.forEach(item => {
            let item_promise = item.isChecked == 1 ? dispatch('deleteCartById', item.skuId) : false;
            PromiseAll.push(item_promise);
        });
        return Promise.all(PromiseAll);//如果报错的话，一样可以拿到报错那一次请求的错误提示
    }

};

const getters = {
    // categoryView(state){
    //     return state.detailInfo.categoryView||{};

    // },
    cartList(state) {
        return state.cartInfoList[0] || {}
    },


};
export default {
    state, mutations, actions, getters
}