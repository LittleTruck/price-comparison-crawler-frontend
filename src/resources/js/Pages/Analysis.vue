<template>
    <div style="background-color: #404040;" class="flex flex-wrap w-full h-screen justify-center overflow-hidden text-white">
        <div style="max-width: 400px" class="w-full p-10 text-left text-3xl leading-loose tracking-wide">
            小米無線雙模滑鼠<br>靜音版 白色
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
