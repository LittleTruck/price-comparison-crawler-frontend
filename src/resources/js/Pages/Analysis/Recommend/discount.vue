<template>
    <div style="max-width: 400px;min-height: 500px"
         class="w-full flex flex-col justify-around items-center my-8 mx-auto">
        <div>
            <div class="w-full flex justify-end items-center px-8 pr-12">
                <span class="text-white text-lg px-6 py-1.5 rounded-full tracking-widest"
                      :class="{
                        'bg-red-400'  : $store.state.discount_product.shop == 'PChome',
                        'bg-green-400' : $store.state.discount_product.shop == 'momo'
                    }">{{ $store.state.discount_product.shop }}</span>
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
                <span class="text-green-400">-{{ 100-$store.state.discount_product.discountpercent }}%</span>
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
    }
}
</script>

<style scoped>

</style>
