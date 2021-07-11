<template>
    <div class="about">
        <h2 class="container-fluid">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide>111</swiper-slide>
                <swiper-slide>222</swiper-slide>
                <swiper-slide>333</swiper-slide>
                <swiper-slide>444</swiper-slide>
                <swiper-slide>555</swiper-slide>
                <swiper-slide>666</swiper-slide>
                <swiper-slide>777</swiper-slide>
                <div class="swiper-scrollbar" slot="scrollbar"></div>
            </swiper>
            <div class="row" style="margin: 500px">
                <div class="col-md-4">111</div>
                <div class="col-md-4">222</div>
                <div class="col-md-4">333</div>
                <div class="col-md-4">444</div>
            </div>
            <div data-aos-anchor-placement="top-bottom" data-aos="fade-down" class="row">
                <div class="col-md-4">111</div>
                <div class="col-md-4">222</div>
                <div class="col-md-4">333</div>
                <div class="col-md-4">444</div>
            </div>
            <div class="row">
                <div class="col-md-4">111</div>
                <div class="col-md-4">222</div>
                <div class="col-md-4">333</div>
                <div class="col-md-4">444</div>
            </div>
            <div class="row">
                <div class="col-md-4">111</div>
                <div class="col-md-4">222</div>
                <div class="col-md-4">333</div>
                <div class="col-md-4">444</div>
            </div>
            <div class="row">
                <div class="col-md-4">111</div>
                <div class="col-md-4">222</div>
                <div class="col-md-4">333</div>
                <div class="col-md-4">444</div>
            </div>
            <div class="row">
                <div class="col-md-4">111</div>
                <div class="col-md-4">222</div>
                <div class="col-md-4">333</div>
                <div class="col-md-4">444</div>
            </div>
        </h2>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueAwesomeSwiper from  'vue-awesome-swiper'
    import{swiper, swiperSlide} from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'
    Vue.use(VueAwesomeSwiper);

    export default {
        name: "About",
        title: 'Free mode / No fixed positions',
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    freeMode: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    scrollbar: {
                        el: '.swiper-scrollbar'
                    },
                    mousewheel: true,
                }
            }
        },
    }
</script>

<style scoped>
.about{
}
</style>
