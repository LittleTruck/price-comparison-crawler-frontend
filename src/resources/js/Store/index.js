import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        products:{}
    },
    mutations: {
        INCREMENT(state){
            state.count++
        },
        SET_PRODUCT(state, data){
            state.products = data
        }
    },
    actions: {}
})

export default store;
