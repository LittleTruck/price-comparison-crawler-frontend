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
        }
    },
    actions: {}
})

export default store;
