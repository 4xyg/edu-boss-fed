import { reqGetCode, reqGetUser, reqGetLogin, reqGetUserInfo, reqLogout } from '@/api'
const state = {
    token: sessionStorage.getItem('TOKEN'),
    user_info: {}

};
const mutations = {
    PHONECODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, code) {
        state.token = code;
    },
    GETUSERINFO(state, data) {
        state.user_info = data;
    },
    CLEARLOGIN(state) {
        state.token = '';
        state.user_info = {};

        sessionStorage.removeItem('TOKEN');
    }

};

const actions = {
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone);
        console.log(result);
        if (result.code == 200) {
            commit("PHONECODE", result.data);
            return 'ok'
        } else {
            return Promise.reject(new Error("failed"))
        }
    },

    async getUser({ commit }, data) {
        let result = await reqGetUser(data);
        console.log(result);
        if (result.code == 200) {
            // commit("PHONECODE", result.data);
            return 'ok'
        } else {

            return Promise.reject(new Error("failed"))
        }
    },

    async getLogin({ commit }, data) {
        let result = await reqGetLogin(data);
        console.log(result);
        if (result.code == 200) {
            // 存储token
            commit("USERLOGIN", result.data.token);
            sessionStorage.setItem("TOKEN", result.data.token);
            return 'ok'
        } else {
            alert(result.message)
            return Promise.reject(new Error("failed"))
        }
    },
    async getUserInfo({ commit }, data) {
        // state.token
        let result = await reqGetUserInfo(data);
        console.log(result);
        if (result.code == 200) {
            commit("GETUSERINFO", result.data);
            return 'ok'

        } else {
            alert(result.message)
            return Promise.reject(new Error('failed'))
        }

    },

    async getLogout({commit}) {
        let result = await reqLogout();
        console.log(result);
        if (result.code == 200) {
            //action里面不能操作state
            commit("CLEARLOGIN");
            return 'ok'

        } else {
            alert(result.message)
            return Promise.reject(new Error('failed'))
        }

    }







};
const getters = {

};

export default {
    state,
    mutations,
    actions,
    getters,
};
