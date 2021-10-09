require('./bootstrap');

import Vue from "vue";
import VueRouter from "vue-router";

import router from "./Router/index";
import store from "./Store/index";
import App from './App.vue'

//Import bootstrap
// import 'bootstrap'; // Import js file
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import css file
// import 'bootstrap/dist/css/bootstrap-utilities.min.css'; // Import css file

//Import aos
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

Vue.use(VueRouter)

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {App}
})
