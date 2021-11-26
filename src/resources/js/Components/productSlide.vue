<template>
    <div class="w-full flex flex-col justify-between items-center">
        <div>
            <div class="w-full flex justify-between items-center px-8 pr-12">
                <span class="text-4xl font-bold py-10 px-5">{{ $store.state.brand }}</span>
                <span class="bg-red-400 text-white text-xl px-6 py-2 rounded-full tracking-widest">{{ $store.state.products.shop }}</span>
            </div>
            <div class="w-full flex justify-center items-center p-10">
                <img src="/images/LogiTech_Mouse.jpg">
            </div>
        </div>
        <div class="flex flex-wrap w-full">
            <span class="text-2xl font-semibold w-full">
                {{ $store.state.products.name }}
<!--                <br>靜音版 白色-->
            </span>
            <span class="w-full my-4">
                雙模連接
                <br>靜音運作
                <br>側位按鍵
                <br>舒適握感
            </span>
            <span class="w-full text-red-600 text-4xl my-4">
                $365
            </span>
        </div>
        <div class="flex flex-col mt-4">
            <button style="border-radius: 2.5rem 0 2.5rem 0"
                    class="w-60 bg-black text-white py-6 text-xl">BUY NOW
            </button>
            <button @click="$router.push('analysis/recommend/discount')"
                    style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                    class="w-60 bg-white rounded-full py-2 mt-4 text-xl text-gray-500">Learn more
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "productSlide"
}
</script>

<style scoped>

</style>
