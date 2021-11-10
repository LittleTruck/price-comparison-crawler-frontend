<template>
    <div class="flex flex-col justify-center">
        <div class="flex">
        <h2>品牌：</h2>
        <span>{{ $store.state.products.analysis_result.Brands }}</span>
        </div>
        <div class="flex">
        <h2>顏色：</h2>
        <p v-for="item in $store.state.products.analysis_result.Color">
            {{ item }}、
        </p></div>
            <div class="flex">
        <h2>標籤：</h2>
        <p v-for="item in $store.state.products.analysis_result.Tag">
            {{ item.name }}、
        </p></div>
                <div class="flex">
        <h2>詳細資訊：</h2>
        <p>{{ $store.state.products.detail_information.Describe.string }}</p>
                </div>
    </div>
</template>

<script>
export default {
    name: "Product"
}
</script>

<style scoped>

</style>
