<template>
    <div style="min-height: 66vh;height: calc(100vh - 200px)"
        class="w-full h-auto bg-white rounded-t-2xl text-black overflow-auto">
        <div style="max-width: 400px;" class="w-full flex flex-wrap justify-around mt-4 px-10 mx-auto">
            <router-link to="/analysis/recommend/discount"
                         class="flex justify-center items-center border rounded-full text-base px-8 pt-1 pb-2 hover:bg-gray-200">
                <box-icon class="w-6 h-6 pt-0.5" color="#FF733C" type="solid" name='hot'></box-icon>
                推薦商品
            </router-link>
            <router-link to="/analysis/recommend/lowest"
                         class="flex justify-center items-center border rounded-full text-base px-8 pt-1 pb-2 hover:bg-gray-200">
                <box-icon class="w-6 h-6 pt-0.5" color="#FF4132" type='solid' name='heart'></box-icon>
                正常價格
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import 'boxicons'

export default {
    name: "recommend"
}
</script>

<style scoped>
.router-link-active{
    background-color: #F2F2F2;
    /*color: #2F80ED;*/
}
</style>
