<template>
    <div>
        <div id="chart">
            <apexchart type="boxPlot" height="350" :options="chartOptions" :series="series"></apexchart>
        </div>
        <h2>正常價格：$325 ~ $400</h2>
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
                            x: '小米無線靜音滑鼠',
                            y: [260, 320, 365, 400, 465]
                        }
                    ]
                },
                {
                    name: '離群值',
                    type: 'scatter',
                    data: [
                        {
                            x: '小米無線靜音滑鼠',
                            y: 500
                        }
                    ]
                }
            ],
            chartOptions: {
                chart: {
                    type: 'boxPlot',
                    height: 350
                },
                colors: ['#008FFB', '#FEB019'],
                title: {
                    text: 'BoxPlot - Scatter Chart',
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
                }
            },
        }
    }
}
</script>

<style scoped>

</style>
