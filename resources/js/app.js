require('./bootstrap');

import App from "./components/App.vue";
import VueAxios from "vue-axios";
import vue from "vue";
import axios from "axios";
import VueRouter from "vue-router";
import {routes} from "./routes"
import Vue from "vue";

window.vue=vue;

Vue.use(VueAxios,axios);
Vue.use(VueRouter);

const router=new VueRouter({
    mode:"history",
    routes:routes,
});

const app =new Vue({
    el:"#app",
    router:router,
    render:h=>h(App),
});

