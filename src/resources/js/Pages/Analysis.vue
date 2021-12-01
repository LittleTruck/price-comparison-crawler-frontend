<template>
    <div style="background-color: #404040;" class="flex flex-wrap relative w-full h-screen justify-center overflow-hidden text-white">
        <router-link  style="box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 10px;"
                      to="/index" class="absolute flex justify-center items-center rounded-full w-12 h-12 left-4 top-2 z-50">
            <box-icon type="solid" color="white" class="w-7 h-7" name='home'></box-icon>
        </router-link>
        <div style="max-width: 400px" class="w-full p-10 text-left text-3xl leading-loose tracking-wide">
            <div class="h-24 overflow-auto pt-4 text-xl leading-snug tracking-normal">{{ $store.state.discount_product.name }}</div>
            <div class="w-full flex justify-between mt-4">
                <router-link to="/analysis/recommend" class="w-48 flex justify-center items-center border rounded-full text-xl pt-1 pb-2">推薦商品</router-link>
                <router-link to="/analysis/normal" class="w-48 flex justify-center items-center border rounded-full text-xl pt-1 pb-2">正常價格</router-link>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "Analysis"
}
</script>

<style scoped>
.router-link-active{
    background-color: white;
    color: #2F80ED;
}
</style>
