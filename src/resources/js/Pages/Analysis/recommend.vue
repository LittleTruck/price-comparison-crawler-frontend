<template>
    <div style="min-height: 66vh;height: calc(100vh - 200px)"
        class="w-full h-auto bg-white rounded-t-2xl text-black overflow-auto">
        <div style="max-width: 400px;" class="w-full flex flex-wrap justify-around mt-4 px-10 mx-auto">
            <router-link to="/analysis/recommend/discount"
                         class="flex justify-center items-center border rounded-full text-base px-8 pt-1 pb-2 hover:bg-gray-200">
                <box-icon class="w-6 h-6 pt-0.5" color="#FF733C" type="solid" name='hot'></box-icon>
                折扣最多
            </router-link>
            <router-link to="/analysis/recommend/lowest"
                         class="flex justify-center items-center border rounded-full text-base px-8 pt-1 pb-2 hover:bg-gray-200">
                <box-icon class="w-6 h-6 pt-0.5" color="#FF4132" type='solid' name='heart'></box-icon>
                價格最低
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import 'boxicons'

export default {
    name: "recommend",
    created() {
        // this.$store.commit("SET_LOWEST_PRODUCT",  {
        //     "link": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=7322479&mdiv=searchEngine&oid=1_8&kw=New%20Balance%20%E7%99%BD%E8%89%B2%20%E9%9E%8B",
        //     "discountpercent": 50,
        //     "discountprice": 1825,
        //     "shop": "momo",
        //     "image": "https://og.momoshop.com.tw/1637072843/goodsimg/0007/322/479/7322479_L.jpg",
        //     "name": "【NEW BALANCE】NB 輕量慢跑運動鞋_女鞋_白色_W890WO7-B楦 春夏 透氣 運動 休閒 潮流",
        //     "rawprice": 3650
        // });
        // this.$store.commit("SET_DISCOUNT_PRODUCT", {
        //     "link": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=7322479&mdiv=searchEngine&oid=1_8&kw=New%20Balance%20%E7%99%BD%E8%89%B2%20%E9%9E%8B",
        //     "discountpercent": 50,
        //     "discountprice": 1825,
        //     "shop": "momo",
        //     "image": "https://og.momoshop.com.tw/1637072843/goodsimg/0007/322/479/7322479_L.jpg",
        //     "name": "【NEW BALANCE】NB 輕量慢跑運動鞋_女鞋_白色_W890WO7-B楦 春夏 透氣 運動 休閒 潮流",
        //     "rawprice": 3650
        // });
    }
}
</script>

<style scoped>
.router-link-active{
    background-color: #F2F2F2;
    /*color: #2F80ED;*/
}
</style>
