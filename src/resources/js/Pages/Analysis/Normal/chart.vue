<template>
    <div class="p-10">
        <div style="box-shadow: 2px 2px 15px 5px #EDEBEB"
             class="custom-coordinate relative p-1 rounded-3xl" id="chart">
            <apexchart type="boxPlot" height="350" :options="chartOptions" :series="series"/>
            <h2>正常價格：${{ $store.state.normal_price25 }} ~ ${{ $store.state.normal_price75 }}</h2>
        </div>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
    name: "chart",
    components: {
        apexchart: VueApexCharts,
    },
    data() {
        return {
            series: [
                {
                    name: '正常值',
                    type: 'boxPlot',
                    data: [
                        {
                            x: this.$store.state.lowest_product.name,
                            y: [this.$store.state.lowest_price, this.$store.state.normal_price25, this.$store.state.median, this.$store.state.normal_price75, this.$store.state.highest_price]
                        }
                    ]
                },
                // {
                //     name: '離群值',
                //     type: 'scatter',
                //     data: [
                //         {
                //             x: '小米無線靜音滑鼠',
                //             y: 500
                //         }
                //     ]
                // }
            ],
            chartOptions: {
                chart: {
                    type: 'boxPlot',
                    height: 350,
                    toolbar: {
                        show: false
                    }
                },
                // labels: ['Apples', 'Oranges', 'Berries', 'Grapes'],
                // dataLabels: {
                //     enabled: true,
                //     enabledOnSeries: true,
                //     formatter: function (val, {seriesIndex}) {
                //         return '最高價格：' + val
                //     },
                //     textAnchor: 'middle',
                //     distributed: false,
                //     offsetX: 0,
                //     offsetY: 0,
                //     style: {
                //         fontSize: '14px',
                //         fontFamily: 'Helvetica, Arial, sans-serif',
                //         fontWeight: 'bold',
                //         colors: undefined
                //     },
                //     background: {
                //         enabled: true,
                //         foreColor: '#fff',
                //         padding: 4,
                //         borderRadius: 2,
                //         borderWidth: 1,
                //         borderColor: '#fff',
                //         opacity: 0.9,
                //         dropShadow: {
                //             enabled: false,
                //             top: 1,
                //             left: 1,
                //             blur: 1,
                //             color: '#000',
                //             opacity: 0.45
                //         }
                //     },
                //     dropShadow: {
                //         enabled: false,
                //         top: 1,
                //         left: 1,
                //         blur: 1,
                //         color: '#000',
                //         opacity: 0.45
                //     }
                // },
                colors: ['#008FFB', '#FEB019'],
                title: {
                    text: 'BoxPlot',
                    align: 'left'
                },
                xaxis: {
                    type: 'string',
                    // tooltip: {
                    //     formatter: function (val) {
                    //         return new Date(val).getFullYear()
                    //     }
                    // }
                },
                tooltip: {
                    shared: false,
                    intersect: true
                },
            },
        }
    }
}
</script>

<style scoped>
.custom-coordinate ::v-deep .apexcharts-boxPlot-series {

}
</style>
