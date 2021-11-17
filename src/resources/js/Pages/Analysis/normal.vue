<template>
    <div style="min-height: 66vh;height: calc(100vh - 200px)"
         class="w-full h-auto bg-white rounded-t-2xl text-black overflow-auto">
        <div style="max-width: 400px;" class="w-full flex flex-wrap justify-around mt-4 px-10 mx-auto">
            <router-link to="/analysis/recommend/discount"
                         class="flex justify-center items-center border rounded-full text-base px-8 pt-1 pb-2 hover:bg-gray-200">
                <box-icon class="w-6 h-6 pt-0.5" color="black" name='chart'></box-icon>
                價格圖
            </router-link>
            <router-link to="/analysis/recommend/lowest"
                         class="flex justify-center items-center border rounded-full text-base px-8 pt-1 pb-2 hover:bg-gray-200">
                <box-icon class="w-6 h-6 pt-0.5" color="black" name='list-ul'></box-icon>
                價格列表
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "normal"
}
</script>

<style scoped>

</style>
