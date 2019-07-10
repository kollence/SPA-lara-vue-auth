import { getUserIfLocalStroage } from './resolveAuth/auth'
const user = getUserIfLocalStroage();

export default {
    state: {
        User: user,
        userLogged: !!user,
        loading: false,
        auth_error: null,
        articles: []
    },

    getters: {
       isLoading(state) {
           return state.loading
       },
       isLogged(state) {
           return state.User
       },
       authError(state) {
           return state.auth_error
       },
       articles(state) {
           return state.articles
       }
     },
    
    mutations: {
        login(state) {
            state.loading = true;
            state.auth_error = null;
        },
        login_success(state, payload) {
            state.auth_error = null;
            state.userLogged = true;
            state.loading = false;
            // //IF ITS USER
            // if(payload.role == '1') {
            //     state.User = Object.assign({}, payload.user, {
            //         token: payload.access_token
            //     },{auth: 'restricted'})
            // }
            // //IF ITS ADMIN
            // if(payload.role == '2') {
            // state.User = Object.assign({}, payload.user, {
            //     token: payload.access_token
            // },{auth: 'admin'})

            // }
            state.User = Object.assign({}, payload.user, {token: payload.access_token})

            localStorage.setItem("user", JSON.stringify(state.User))
        },
        login_failed(state, payload) {
            state.loading = false;
            state.auth_error = payload.error
        },
        logout(state) {
            localStorage.removeItem("user");
            state.userLogged = false
            state.User = null
        }
    },
    actions: {
        Login({commit}) {
            commit("login")
        }
    }
}