<template>
    <div class="flex flex-col justify-center overflow-hidden">
        <swiper class="swiper h-screen w-screen bg-white" :options="swiperOption">

            <swiper-slide v-for="(item, index) in $store.state.products">
                <product-slide :product="item"/>
            </swiper-slide>
            <swiper-slide>
                <product-slide/>
            </swiper-slide>
            <swiper-slide>
                <product-slide/>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
<!--        <div class="flex">-->
<!--        <h2>品牌：</h2>-->
<!--        <span>{{ $store.state.products.analysis_result.Brands }}</span>-->
<!--        </div>-->
<!--        <div class="flex">-->
<!--        <h2>顏色：</h2>-->
<!--        <p v-for="item in $store.state.products.analysis_result.Color">-->
<!--            {{ item }}、-->
<!--        </p></div>-->
<!--        <div class="flex">-->
<!--        <h2>標籤：</h2>-->
<!--        <p v-for="item in $store.state.products.analysis_result.Tag">-->
<!--            {{ item.name }}、-->
<!--        </p></div>-->
<!--        <div class="flex">-->
<!--        <h2>詳細資訊：</h2>-->
<!--        <p>{{ $store.state.products.detail_information.Describe.string }}</p>-->
<!--                </div>-->
    </div>
</template>

<script>
import Vue from 'vue';
import VueAwesomeSwiper from  'vue-awesome-swiper'
import{swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import ProductSlide from "../Components/productSlide";
Vue.use(VueAwesomeSwiper);
export default {
    name: "Product",
    components: {
        ProductSlide,
        swiper,
        swiperSlide
    },
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        }
    }
}
</script>

<style scoped>
.swiper ::v-deep .swiper-pagination-bullet-active{
    background-color: black;
}
</style>
