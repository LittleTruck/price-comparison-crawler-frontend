<template>
    <div class="flex flex-col justify-center overflow-hidden">
        <swiper class="swiper h-screen w-screen bg-white"
                style="max-width: 400px"
                :options="swiperOption">
            <swiper-slide v-for="(item, index) in $store.state.products " :key="index">
                <product-slide :product="item" />
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
    created(){
        // this.$store.commit("SET_BRAND", "new balance");
        // this.$store.commit("SET_PRODUCT", [
        //     {
        //         "discountpercent": 62,
        //         "discountprice": 1799,
        //         "image": "https://og.momoshop.com.tw/1619220960/goodsimg/0007/733/732/7733732_L.jpg",
        //         "link": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=7733732&mdiv=searchEngine&oid=1_7&kw=New%20Balance%20%E7%99%BD%E8%89%B2%20%E9%9E%8B",
        //         "name": "【NEW BALANCE】NB 越野機能運動鞋_女鞋_白色_WTCRGLW2-B楦",
        //         "rawprice": 2880,
        //         "shop": "momo"
        //     },
        //     {
        //         "discountpercent": 50,
        //         "discountprice": 1825,
        //         "image": "https://og.momoshop.com.tw/1637072843/goodsimg/0007/322/479/7322479_L.jpg",
        //         "link": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=7322479&mdiv=searchEngine&oid=1_10&kw=New%20Balance%20%E7%99%BD%E8%89%B2%20%E9%9E%8B",
        //         "name": "【NEW BALANCE】NB 輕量慢跑運動鞋_女鞋_白色_W890WO7-B楦 春夏 透氣 運動 休閒 潮流",
        //         "rawprice": 3650,
        //         "shop": "momo"
        //     },
        //     {
        //         "discountpercent": 80,
        //         "discountprice": 1904,
        //         "image": "https://d.ecimg.tw//items/DXBD2YA900BJID5/000002_1625632650.jpg",
        //         "link": "https://24h.pchome.com.tw/prod/DXBD2Y-A900BJID5",
        //         "name": "[New Balance]復古運動鞋_中性_白色_AM210VSL-D楦",
        //         "rawprice": 2380,
        //         "shop": "PChome"
        //     },
        //     {
        //         "discountpercent": 80,
        //         "discountprice": 1904,
        //         "image": "https://og.momoshop.com.tw/1621326117/goodsimg/0008/908/217/8908217_L.jpg",
        //         "link": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=8908217&mdiv=searchEngine&oid=1_9&kw=New%20Balance%20%E7%99%BD%E8%89%B2%20%E9%9E%8B",
        //         "name": "【NEW BALANCE】NB 復古休閒鞋/運動鞋_男鞋/女鞋_白色_AM210VSL-D楦",
        //         "rawprice": 2380,
        //         "shop": "momo"
        //     },
        //     {
        //         "discountpercent": 66,
        //         "discountprice": 1947,
        //         "image": "https://og.momoshop.com.tw/1636972181/goodsimg/0008/062/679/8062679_L.jpg",
        //         "link": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=8062679&mdiv=searchEngine&oid=1_1&kw=New%20Balance%20%E7%99%BD%E8%89%B2%20%E9%9E%8B",
        //         "name": "【NEW BALANCE】NB 復古休閒鞋/運動鞋_女鞋/男鞋_白色_WSXRCLF-B楦/MSXRCFI-D楦(2款任選)",
        //         "rawprice": 2950,
        //         "shop": "momo"
        //     },
        //     {
        //         "discountpercent": 65,
        //         "discountprice": 1999,
        //         "image": "https://d.ecimg.tw//items/DXBD4FA900AR3HQ/000002_1594191531.jpg",
        //         "link": "https://24h.pchome.com.tw/prod/DXBD4F-A900AR3HQ",
        //         "name": "【New Balance】 復古鞋_中性_白色_RC205AB-D楦",
        //         "rawprice": 3080,
        //         "shop": "PChome"
        //     },
        //     {
        //         "discountpercent": 65,
        //         "discountprice": 1999,
        //         "image": "https://d.ecimg.tw//items/DXBD4FA900AR3FT/000002_1594191271.jpg",
        //         "link": "https://24h.pchome.com.tw/prod/DXBD4F-A900AR3FT",
        //         "name": "【New Balance】 復古鞋_中性_白色_RC205AA-D楦",
        //         "rawprice": 3080,
        //         "shop": "PChome"
        //     },
        //     {
        //         "discountpercent": 65,
        //         "discountprice": 1999,
        //         "image": "https://d.ecimg.tw//items/DXBD4FA900ARI2V/000002_1594720100.jpg",
        //         "link": "https://24h.pchome.com.tw/prod/DXBD4F-A900ARI2V",
        //         "name": "【New Balance】 復古鞋_女性_白色_RCW205WA-B楦",
        //         "rawprice": 3080,
        //         "shop": "PChome"
        //     },
        //     {
        //         "discountpercent": 65,
        //         "discountprice": 2002,
        //         "image": "https://og.momoshop.com.tw/1637072459/goodsimg/0008/217/504/8217504_L.jpg",
        //         "link": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=8217504&mdiv=searchEngine&oid=1_6&kw=New%20Balance%20%E7%99%BD%E8%89%B2%20%E9%9E%8B",
        //         "name": "【NEW BALANCE】NB 輕量運動跑鞋_女鞋_白色_WVARECP1-D楦",
        //         "rawprice": 3080,
        //         "shop": "momo"
        //     },
        //     {
        //         "discountpercent": 90,
        //         "discountprice": 2142,
        //         "image": "https://d.ecimg.tw//items/DXBD2YA900BRFGT/000002_1631347534.jpg",
        //         "link": "https://24h.pchome.com.tw/prod/DXBD2Y-A900BRFGT",
        //         "name": "[New Balance]復古運動鞋_中性_白色_AM210WGW-D楦",
        //         "rawprice": 2380,
        //         "shop": "PChome"
        //     },
        //     {
        //         "discountpercent": 90,
        //         "discountprice": 2142,
        //         "image": "https://og.momoshop.com.tw/1638251293/goodsimg/0009/315/087/9315087_L.jpg",
        //         "link": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=9315087&mdiv=searchEngine&oid=1_2&kw=New%20Balance%20%E7%99%BD%E8%89%B2%20%E9%9E%8B",
        //         "name": "【NEW BALANCE】NB 復古運動鞋_男鞋/女鞋_白色_AM210WGW/AM210WCB-D楦(2款任選)",
        //         "rawprice": 2380,
        //         "shop": "momo"
        //     },
        //     {
        //         "discountpercent": 90,
        //         "discountprice": 2232,
        //         "image": "https://d.ecimg.tw//items/DXBD03A900BTGTV/000002_1632803080.jpg",
        //         "link": "https://24h.pchome.com.tw/prod/DXBD03-A900BTGTV",
        //         "name": "[New Balance]跑鞋_女性_白色_W480KW5-4E楦",
        //         "rawprice": 2480,
        //         "shop": "PChome"
        //     },
        //     {
        //         "discountpercent": 90,
        //         "discountprice": 2232,
        //         "image": "https://og.momoshop.com.tw/1631675116/goodsimg/0009/328/508/9328508_L.jpg",
        //         "link": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=9328508&mdiv=searchEngine&oid=1_4&kw=New%20Balance%20%E7%99%BD%E8%89%B2%20%E9%9E%8B",
        //         "name": "【NEW BALANCE】NB 運動跑鞋_女鞋_白色_W480KW5-4E楦",
        //         "rawprice": 2480,
        //         "shop": "momo"
        //     },
        //     {
        //         "discountpercent": 100,
        //         "discountprice": 2280,
        //         "image": "https://d.ecimg.tw//items/DXBD4GA900AZ75T/000002_1604634994.jpg",
        //         "link": "https://24h.pchome.com.tw/prod/DXBD4G-A900AZ75T",
        //         "name": "【New Balance】 復古鞋_中性_白色_PROCTSEN-D楦",
        //         "rawprice": 2280,
        //         "shop": "PChome"
        //     },
        //     {
        //         "discountpercent": 85,
        //         "discountprice": 2448,
        //         "image": "https://d.ecimg.tw//items/DXBD01A900BKEN3/000002_1626252865.jpg",
        //         "link": "https://24h.pchome.com.tw/prod/DXBD01-A900BKEN3",
        //         "name": "[New Balance]跑鞋_女性_灰白色_W680LW7-D楦",
        //         "rawprice": 2880,
        //         "shop": "PChome"
        //     },
        //     {
        //         "discountpercent": 69,
        //         "discountprice": 2519,
        //         "image": "https://og.momoshop.com.tw/1619245359/goodsimg/0007/543/464/7543464_L.jpg",
        //         "link": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=7543464&mdiv=searchEngine&oid=1_8&kw=New%20Balance%20%E7%99%BD%E8%89%B2%20%E9%9E%8B",
        //         "name": "【NEW BALANCE】NB 復古休閒鞋/運動鞋_CM996LTW-D_男鞋_白色(運動 休閒 潮流 復古)",
        //         "rawprice": 3650,
        //         "shop": "momo"
        //     },
        //     {
        //         "discountpercent": 85,
        //         "discountprice": 2625,
        //         "image": "https://og.momoshop.com.tw/1637072812/goodsimg/0007/871/288/7871288_L.jpg",
        //         "link": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=7871288&mdiv=searchEngine&oid=1_13&kw=New%20Balance%20%E7%99%BD%E8%89%B2%20%E9%9E%8B",
        //         "name": "【NEW BALANCE】NB 復古休閒鞋/運動鞋_女鞋_白色_WL827BBC-B楦",
        //         "rawprice": 3080,
        //         "shop": "momo"
        //     },
        //     {
        //         "discountpercent": 85,
        //         "discountprice": 2788,
        //         "image": "https://og.momoshop.com.tw/1626088539/goodsimg/0009/100/005/9100005_L.jpg",
        //         "link": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=9100005&mdiv=searchEngine&oid=1_16&kw=New%20Balance%20%E7%99%BD%E8%89%B2%20%E9%9E%8B",
        //         "name": "【NEW BALANCE】NB 運動跑鞋_女鞋_白色_WFCPRLW3-D楦",
        //         "rawprice": 3280,
        //         "shop": "momo"
        //     },
        //     {
        //         "discountpercent": 100,
        //         "discountprice": 2850,
        //         "image": "https://og.momoshop.com.tw/1632477796/goodsimg/0008/906/225/8906225_L.jpg",
        //         "link": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=8906225&mdiv=searchEngine&oid=1_12&kw=New%20Balance%20%E7%99%BD%E8%89%B2%20%E9%9E%8B",
        //         "name": "【NEW BALANCE】NB 復古休閒鞋/運動鞋_女鞋_粉白色/紫色_WL574ESP/WL574ESV-B楦(2款任選)",
        //         "rawprice": 2850,
        //         "shop": "momo"
        //     },
        //     {
        //         "discountpercent": 100,
        //         "discountprice": 2880,
        //         "image": "https://d.ecimg.tw//items/DXBD0IA900BLIT7/000002_1627029697.jpg",
        //         "link": "https://24h.pchome.com.tw/prod/DXBD0I-A900BLIT7",
        //         "name": "【New Balance】復古運動鞋_中性_白色_ML574IDS-D楦",
        //         "rawprice": 2880,
        //         "shop": "PChome"
        //     },
        //     {
        //         "discountpercent": 100,
        //         "discountprice": 2880,
        //         "image": "https://d.ecimg.tw//items/DXBD02A900APU0E/000002_1592295534.jpg",
        //         "link": "https://24h.pchome.com.tw/prod/DXBD02-A900APU0E",
        //         "name": "【New Balance】越野跑鞋_男性_白色_MTCRGLW2-2E楦",
        //         "rawprice": 2880,
        //         "shop": "PChome"
        //     }
        // ]);
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
