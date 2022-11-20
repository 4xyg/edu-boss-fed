import {reqSearchList, reqCategoryList} from '@/api'
const state = {
    categoryList: [],
    searchList:{},

};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    SEARCHLIST(state,searchList){
        state.searchList = searchList;
    }
};

const actions = {
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        console.log(result);
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data);
        }
    },

    async searchList({commit},params={}){
        let result  = await reqSearchList(params);
        if(result.code == 200){
            commit('SEARCHLIST',result.data)
        }
    }
    
};
const getters = {
    goodsList(state){
        return state.searchList.goodsList||[];
    },
    trademarkList(state){
        return state.searchList.trademarkList||[];
    },
    attrsList(state){
        return state.searchList.attrsList||[];
    }

};

export default {
    state,
    mutations,
    actions,
    getters,
};
