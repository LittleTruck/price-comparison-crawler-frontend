<template>
    <div class="px-5 py-8">
        <div style="box-shadow: 2px 2px 15px 5px #EDEBEB"
             class="custom-coordinate relative rounded-2xl overflow-hidden" id="chart">
            <table class="table">
                <thead class="rounded-md py-2">
                <tr>
                    <th class="rounded-tl-xl"></th>
                    <th class="py-2">原價</th>
                    <th>特價</th>
                    <th>折數</th>
                    <th class="rounded-tr-xl">電商</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, key) in $store.state.products" :key="key">
                    <td style="width:30%;"><img style="width: 10rem;padding: 0.75rem" :src="item.image"></td>
                    <td style="width:15%;">${{ item.rawprice }}</td>
                    <td style="width:20%;color:red">${{ item.discountprice }}</td>
                    <td style="width:15%;color:green">-{{ 100 - item.discountpercent }}%</td>
                    <td style="width:20%;" ><img style="width: 10rem;padding: 0.75rem" :src="item.shop == 'PChome' ? '/images/pchome.png' :'/images/momo.png'">
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "list"
}
</script>

<style scoped>
td {
    border-top: 1px solid rgba(0,0,0,0.1);
    border-bottom: 1px solid rgba(0,0,0,0.1);
}
td:first-child{
    border-top: none;
}
td:last-child{
    border-bottom: none;
}
thead,
tfoot {
    background-color: #333;
    color: #fff;
}
</style>
