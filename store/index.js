import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        /**
         * 是否需要强制登录
         */
        forcedLogin: false,
        hasLogin: false,
        userName: "11111"
    },
    mutations: {
        login(state, userName) {
            console.log( state )
            console.log( userName )
//             state.userName = userName || '新用户';
            state.userName = userName;
            console.log( state )
        },
        logout(state) {
            state.userName = "";
            state.hasLogin = false;
        }
    }
})

export default store
