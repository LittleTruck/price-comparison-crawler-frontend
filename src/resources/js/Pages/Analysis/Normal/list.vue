<template>
    <div class="p-10">
        <div style="box-shadow: 2px 2px 15px 5px #EDEBEB"
             class="custom-coordinate relative p-1 rounded-3xl" id="chart">
            <table class="table">
                <thead>
                <tr>
                    <th></th>
                    <th>原價</th>
                    <th>特價</th>
                    <th>折數</th>
                    <th>電商</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, key) in $store.state.products" :key="key">
                    <td style="width:30%;"><img width="90vw" :src="item.image"></td>
                    <td style="width:15%;">${{ item.rawprice }}</td>
                    <td style="width:20%;color:red">${{ item.discountprice }}</td>
                    <td style="width:15%;color:green">-{{ 100 - item.discountpercent }}%</td>
                    <td style="width:15%;" ><img width="40vw" :src="item.shop == 'PChome' ? '/images/pchome.png' :'/images/momo.png'">
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
table,
td {
    border: 1px solid #333;
}

thead,
tfoot {
    background-color: #333;
    color: #fff;
}
</style>
