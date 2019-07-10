/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// window.Vue = require('vue');
// import Vue from 'vue';
// import VueRouter from 'vue-router';
// import Vuex from 'vuex';
// import {routes} from './routes';
// import MainApp from './MainApp';
// import Store from './store';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);
// Vue.use(VueRouter);
// Vue.use(Vuex);

// const store = new Vuex.Store(Store)

// const router = new VueRouter({
//     mode: 'history',
//     routes    
// });

// router.beforeEach((to, from, next) => {
//     const routeAuth = to.matched.some(record => record.meta.requiresAuth)
//     const currentUser = store.state.User;

//     if (routeAuth && !currentUser) {
//         next('/login');
//     }else if (to.path == '/login' && currentUser) {
//         next({path: '/admin'});
//     } else {
//         next();
//     }
// });

// const app = new Vue({
//     el: '#app',
//     router,
//     store,
//     components: {
//        'mainapp': MainApp
//     }
// });
// import 'es6-promise/auto'
import axios from 'axios'
// import './bootstrap'
import Vue from 'vue'
import VueAuth from '@websanova/vue-auth'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import mainapp from './MainApp'
import auth from './auth'
import router from './router'
// Set Vue globally
window.Vue = Vue
// Set Vue router
Vue.router = router
Vue.use(VueRouter)

// Set Vue authentication
Vue.use(VueAxios, axios)
axios.defaults.baseURL = `${process.env.MIX_APP_URL}/api`
Vue.use(VueAuth, auth)
// Load Index
Vue.component('mainapp', mainapp)
const app = new Vue({
    el: '#app',
    router
});