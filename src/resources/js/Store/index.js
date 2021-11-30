import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        products: {},
        brand: "",
        lowest_product: {},
        discount_product: {},
        highest_price: 0,
        lowest_price: 0,
        median: 0,
        normal_price25: 0,
        normal_price75: 0,
    },
    mutations: {
        INCREMENT(state) {
            state.count++
        },
        SET_PRODUCT(state, data) {
            state.products = data
        },
        SET_LOWEST_PRODUCT(state, data) {
            state.lowest_product = data
        },
        SET_DISCOUNT_PRODUCT(state, data) {
            state.discount_product = data
        },
        SET_BRAND(state, data) {
            state.brand = data
        },
        SET_HIGHEST(state, data) {
            state.highest_price = data
        },
        SET_LOWEST(state, data) {
            state.lowest_price = data
        },
        SET_MEDIAN(state, data) {
            state.median = data
        },
        SET_NORMAL25(state, data) {
            state.normal_price25 = data
        },
        SET_NORMAL75(state, data) {
            state.normal_price75 = data
        }
    },
    actions: {}
})

export default store;
