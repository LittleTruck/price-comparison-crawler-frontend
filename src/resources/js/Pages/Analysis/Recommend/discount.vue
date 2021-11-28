<template>
    <div style="max-width: 400px;min-height: 500px" class="w-full flex flex-col justify-around items-center my-8 mx-auto">
        <div>
            <div class="w-full flex justify-end items-center px-8 pr-12">
                <span class="bg-red-400 text-white text-lg px-6 py-1.5 rounded-full tracking-widest">{{ $store.state.discount_product.shop }}</span>
            </div>
            <div class="w-full flex justify-center items-center px-16">
                <img :src="$store.state.discount_product.image">
            </div>
        </div>
        <div class="flex flex-wrap w-full">
            <span class="w-full text-red-600 text-4xl my-4">
                ${{ $store.state.discount_product.discountprice }}
            </span>
            <span class="w-full my-4 text-2xl">原價
              <br>${{ $store.state.discount_product.rawprice }}
                <br>
                <span class="text-green-400">-{{ $store.state.discount_product.discountpercent }}%</span>
            </span>
        </div>
        <div class="flex flex-col mt-4">
            <button style="border-radius: 2.5rem 0 2.5rem 0"
                    class="w-60 bg-black text-white py-6 text-xl">BUY NOW
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "discount",
    created() {
        this.$store.commit("SET_LOWEST_PRODUCT",  {
            "link": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=7322479&mdiv=searchEngine&oid=1_8&kw=New%20Balance%20%E7%99%BD%E8%89%B2%20%E9%9E%8B",
            "discountpercent": 50,
            "discountprice": 1825,
            "shop": "momo",
            "image": "https://og.momoshop.com.tw/1637072843/goodsimg/0007/322/479/7322479_L.jpg",
            "name": "【NEW BALANCE】NB 輕量慢跑運動鞋_女鞋_白色_W890WO7-B楦 春夏 透氣 運動 休閒 潮流",
            "rawprice": 3650
        });
        this.$store.commit("SET_DISCOUNT_PRODUCT", {
            "link": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=7322479&mdiv=searchEngine&oid=1_8&kw=New%20Balance%20%E7%99%BD%E8%89%B2%20%E9%9E%8B",
            "discountpercent": 50,
            "discountprice": 1825,
            "shop": "momo",
            "image": "https://og.momoshop.com.tw/1637072843/goodsimg/0007/322/479/7322479_L.jpg",
            "name": "【NEW BALANCE】NB 輕量慢跑運動鞋_女鞋_白色_W890WO7-B楦 春夏 透氣 運動 休閒 潮流",
            "rawprice": 3650
        });
    }
}
</script>

<style scoped>

</style>
