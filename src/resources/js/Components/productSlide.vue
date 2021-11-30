<template>
    <div class="w-full h-full overflow-auto flex flex-col justify-evenly items-center">
        <div>
            <div class="w-full flex justify-between items-center px-8 pr-12">
                <span class="text-4xl font-bold py-10 px-5">{{ $store.state.brand }}</span>
                <span class="bg-red-400 text-white text-xl px-6 py-2 rounded-full tracking-widest">{{ product.shop }}</span>
            </div>
            <div class="w-full flex justify-center items-center p-10">
                <img :src="product.image">
            </div>
        </div>
        <div class="flex flex-wrap w-full">
            <span class="text-2xl font-semibold w-full">
                {{ product.name }}
<!--                <br>靜音版 白色-->
            </span>
<!--            <span class="w-full my-4">-->
<!--                雙模連接-->
<!--                <br>靜音運作-->
<!--                <br>側位按鍵-->
<!--                <br>舒適握感-->
<!--            </span>-->
            <span class="w-full text-red-600 text-4xl my-4">
                ${{ product.discountprice }}
            </span>
        </div>
        <div class="flex flex-col my-4 mb-16">
            <button style="border-radius: 2.5rem 0 2.5rem 0"
                    class="w-60 bg-black text-white py-6 text-xl">BUY NOW
            </button>
            <button @click="$router.push('analysis/recommend/discount')"
                    style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                    class="w-60 bg-white rounded-full py-2 mt-4 text-xl text-gray-500">Learn more
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "productSlide",
    props:[
        "product"
    ],
    created() {
        this.$store.commit("SET_PRODUCT", [
            {
                "link": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=7322479&mdiv=searchEngine&oid=1_8&kw=New%20Balance%20%E7%99%BD%E8%89%B2%20%E9%9E%8B",
                "discountpercent": 50,
                "discountprice": 1825,
                "shop": "momo",
                "image": "https://og.momoshop.com.tw/1637072843/goodsimg/0007/322/479/7322479_L.jpg",
                "name": "【NEW BALANCE】NB 輕量慢跑運動鞋_女鞋_白色_W890WO7-B楦 春夏 透氣 運動 休閒 潮流",
                "rawprice": 3650
            },
            {
                "link": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=8908217&mdiv=searchEngine&oid=1_10&kw=New%20Balance%20%E7%99%BD%E8%89%B2%20%E9%9E%8B",
                "discountpercent": 80,
                "discountprice": 1904,
                "shop": "momo",
                "image": "https://og.momoshop.com.tw/1621326117/goodsimg/0008/908/217/8908217_L.jpg",
                "name": "【NEW BALANCE】NB 復古休閒鞋/運動鞋_男鞋/女鞋_白色_AM210VSL-D楦",
                "rawprice": 2380
            },
            {
                "link": "https://24h.pchome.com.tw/prod/DXBD2Y-A900BJID5",
                "discountpercent": 80,
                "discountprice": 1904,
                "shop": "PChome",
                "image": "https://d.ecimg.tw//items/DXBD2YA900BJID5/000002_1625632650.jpg",
                "name": "[New Balance]復古運動鞋_中性_白色_AM210VSL-D楦",
                "rawprice": 2380
            },
            {
                "link": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=8062679&mdiv=searchEngine&oid=1_1&kw=New%20Balance%20%E7%99%BD%E8%89%B2%20%E9%9E%8B",
                "discountpercent": 66,
                "discountprice": 1947,
                "shop": "momo",
                "image": "https://og.momoshop.com.tw/1636972181/goodsimg/0008/062/679/8062679_L.jpg",
                "name": "【NEW BALANCE】NB 復古休閒鞋/運動鞋_女鞋/男鞋_白色_WSXRCLF-B楦/MSXRCFI-D楦(2款任選)",
                "rawprice": 2950
            },
            {
                "link": "https://24h.pchome.com.tw/prod/DXBD44-A900B4EMG",
                "discountpercent": 66,
                "discountprice": 1947,
                "shop": "PChome",
                "image": "https://d.ecimg.tw//items/DXBD44A900B4EMG/000002_1611729760.jpg",
                "name": "【New Balance】復古鞋_女性_白色_WSXRCLB-B",
                "rawprice": 2950
            },
            {
                "link": "https://24h.pchome.com.tw/prod/DXBD4F-A900ARI2V",
                "discountpercent": 65,
                "discountprice": 1999,
                "shop": "PChome",
                "image": "https://d.ecimg.tw//items/DXBD4FA900ARI2V/000002_1594720100.jpg",
                "name": "【New Balance】 復古鞋_女性_白色_RCW205WA-B楦",
                "rawprice": 3080
            },
            {
                "link": "https://24h.pchome.com.tw/prod/DXBD4F-A900AR3FT",
                "discountpercent": 65,
                "discountprice": 1999,
                "shop": "PChome",
                "image": "https://d.ecimg.tw//items/DXBD4FA900AR3FT/000002_1594191271.jpg",
                "name": "【New Balance】 復古鞋_中性_白色_RC205AA-D楦",
                "rawprice": 3080
            },
            {
                "link": "https://24h.pchome.com.tw/prod/DXBD4F-A900AR3HQ",
                "discountpercent": 65,
                "discountprice": 1999,
                "shop": "PChome",
                "image": "https://d.ecimg.tw//items/DXBD4FA900AR3HQ/000002_1594191531.jpg",
                "name": "【New Balance】 復古鞋_中性_白色_RC205AB-D楦",
                "rawprice": 3080
            },
            {
                "link": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=8217504&mdiv=searchEngine&oid=1_6&kw=New%20Balance%20%E7%99%BD%E8%89%B2%20%E9%9E%8B",
                "discountpercent": 65,
                "discountprice": 2002,
                "shop": "momo",
                "image": "https://og.momoshop.com.tw/1637072459/goodsimg/0008/217/504/8217504_L.jpg",
                "name": "【NEW BALANCE】NB 輕量運動跑鞋_女鞋_白色_WVARECP1-D楦",
                "rawprice": 3080
            },
            {
                "link": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=8193693&mdiv=searchEngine&oid=1_12&kw=New%20Balance%20%E7%99%BD%E8%89%B2%20%E9%9E%8B",
                "discountpercent": 69,
                "discountprice": 2057,
                "shop": "momo",
                "image": "https://og.momoshop.com.tw/1619508822/goodsimg/0008/193/693/8193693_L.jpg",
                "name": "【NEW BALANCE】NB 復古休閒鞋/運動鞋_男鞋/女鞋_白色_ML615DA-D楦",
                "rawprice": 2980
            },
            {
                "link": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=9315087&mdiv=searchEngine&oid=1_3&kw=New%20Balance%20%E7%99%BD%E8%89%B2%20%E9%9E%8B",
                "discountpercent": 90,
                "discountprice": 2142,
                "shop": "momo",
                "image": "https://og.momoshop.com.tw/1637919785/goodsimg/0009/315/087/9315087_L.jpg",
                "name": "【NEW BALANCE】NB 復古運動鞋_男鞋/女鞋_白色_AM210WGW/AM210WCB-D楦(2款任選)",
                "rawprice": 2380
            },
            {
                "link": "https://24h.pchome.com.tw/prod/DXBD2Y-A900BRFGT",
                "discountpercent": 90,
                "discountprice": 2142,
                "shop": "PChome",
                "image": "https://d.ecimg.tw//items/DXBD2YA900BRFGT/000002_1631347534.jpg",
                "name": "[New Balance]復古運動鞋_中性_白色_AM210WGW-D楦",
                "rawprice": 2380
            },
            {
                "link": "https://24h.pchome.com.tw/prod/DXBD03-A900BTGTV",
                "discountpercent": 90,
                "discountprice": 2232,
                "shop": "PChome",
                "image": "https://d.ecimg.tw//items/DXBD03A900BTGTV/000002_1632803080.jpg",
                "name": "[New Balance]跑鞋_女性_白色_W480KW5-4E楦",
                "rawprice": 2480
            },
            {
                "link": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=9328508&mdiv=searchEngine&oid=1_9&kw=New%20Balance%20%E7%99%BD%E8%89%B2%20%E9%9E%8B",
                "discountpercent": 90,
                "discountprice": 2232,
                "shop": "momo",
                "image": "https://og.momoshop.com.tw/1631675116/goodsimg/0009/328/508/9328508_L.jpg",
                "name": "【NEW BALANCE】NB 運動跑鞋_女鞋_白色_W480KW5-4E楦",
                "rawprice": 2480
            },
            {
                "link": "https://24h.pchome.com.tw/prod/DXBD4G-A900AZ75T",
                "discountpercent": 100,
                "discountprice": 2280,
                "shop": "PChome",
                "image": "https://d.ecimg.tw//items/DXBD4GA900AZ75T/000002_1604634994.jpg",
                "name": "【New Balance】 復古鞋_中性_白色_PROCTSEN-D楦",
                "rawprice": 2280
            },
            {
                "link": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=8472476&mdiv=searchEngine&oid=1_2&kw=New%20Balance%20%E7%99%BD%E8%89%B2%20%E9%9E%8B",
                "discountpercent": 80,
                "discountprice": 2304,
                "shop": "momo",
                "image": "https://og.momoshop.com.tw/1619473809/goodsimg/0008/472/476/8472476_L.jpg",
                "name": "【NEW BALANCE】NB 復古運動鞋_男鞋/女鞋_白色_ML574DTA-D楦",
                "rawprice": 2880
            },
            {
                "link": "https://24h.pchome.com.tw/prod/DXBD0I-A900BLIT7",
                "discountpercent": 80,
                "discountprice": 2304,
                "shop": "PChome",
                "image": "https://d.ecimg.tw//items/DXBD0IA900BLIT7/000002_1627029697.jpg",
                "name": "【New Balance】復古運動鞋_中性_白色_ML574IDS-D楦",
                "rawprice": 2880
            },
            {
                "link": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=7871288&mdiv=searchEngine&oid=1_15&kw=New%20Balance%20%E7%99%BD%E8%89%B2%20%E9%9E%8B",
                "discountpercent": 75,
                "discountprice": 2310,
                "shop": "momo",
                "image": "https://og.momoshop.com.tw/1637072812/goodsimg/0007/871/288/7871288_L.jpg",
                "name": "【NEW BALANCE】NB 復古休閒鞋/運動鞋_女鞋_白色_WL827BBC-B楦",
                "rawprice": 3080
            },
            {
                "link": "https://24h.pchome.com.tw/prod/DXBD01-A900BKEN3",
                "discountpercent": 85,
                "discountprice": 2448,
                "shop": "PChome",
                "image": "https://d.ecimg.tw//items/DXBD01A900BKEN3/000002_1626252865.jpg",
                "name": "[New Balance]跑鞋_女性_灰白色_W680LW7-D楦",
                "rawprice": 2880
            },
            {
                "link": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=7543464&mdiv=searchEngine&oid=1_11&kw=New%20Balance%20%E7%99%BD%E8%89%B2%20%E9%9E%8B",
                "discountpercent": 69,
                "discountprice": 2519,
                "shop": "momo",
                "image": "https://og.momoshop.com.tw/1619245359/goodsimg/0007/543/464/7543464_L.jpg",
                "name": "【NEW BALANCE】NB 復古休閒鞋/運動鞋_CM996LTW-D_男鞋_白色(運動 休閒 潮流 復古)",
                "rawprice": 3650
            }
        ]);
        this.$store.commit("SET_BRAND", "New Balance");
    }
}
</script>

<style scoped>

</style>
