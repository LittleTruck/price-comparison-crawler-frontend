<template>
    <div class="w-full h-full overflow-auto flex flex-col justify-evenly items-center">
        <div>
            <div class="w-full flex justify-between items-center px-8 pr-12">
                <span class="text-4xl font-bold py-10 px-5">{{ $store.state.brand }}</span>
                <span class="text-white text-xl px-6 py-2 rounded-full tracking-widest"
                      :class="{
                        'bg-red-400'  : product.shop === 'PChome',
                        'bg-green-400' : product.shop === 'momo'
                    }">{{ product.shop }}</span>
            </div>
            <div class="w-full flex justify-center items-center p-10">
                <img :src="product.image">
            </div>
        </div>
        <div class="flex flex-wrap w-full">
            <span class="text-2xl font-semibold w-full">
                {{ product.name }}
                <!--                <br>靜音版 白色-->
            </span>
            <!--            <span class="w-full my-4">-->
            <!--                雙模連接-->
            <!--                <br>靜音運作-->
            <!--                <br>側位按鍵-->
            <!--                <br>舒適握感-->
            <!--            </span>-->
            <span class="w-full text-red-600 text-4xl my-4">
                ${{ product.discountprice }}
            </span>
        </div>
        <div class="flex flex-col my-4 mb-16">
            <a :href="product.link" target="_blank">
                <button style="border-radius: 2.5rem 0 2.5rem 0"
                        class="w-60 bg-black text-white py-6 text-xl">BUY NOW
                </button>
            </a>
            <button @click="$router.push('analysis/recommend/discount')"
                    style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                    class="w-60 bg-white rounded-full py-2 mt-4 text-xl text-gray-500">Learn more
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "productSlide",
    props: [
        "product"
    ],
    created() {
    }
}
</script>

<style scoped>

</style>
