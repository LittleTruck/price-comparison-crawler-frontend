<template>
    <div>
        <div class="desktop">
            <div class="skew-bg flex">
                <div class="w-2/3 relative">
                    <router-link to="/recorder"><img src="/images/click_to_photo.gif"
                                                     style="max-width: 65%; margin-left: 25%;" alt=""></router-link>
                    <!--                    <router-link to="/recorder"><span style="top:50%;left:50%;transform: translate(-50%,-50%);background-color: #646464"-->
                    <!--                                                        class="absolute w-96 h-96 rounded-full z-20"></span></router-link>-->
                    <!--                    <span style="top:52%;left:52%;transform: translate(-50%,-50%);"-->
                    <!--                          class="absolute w-96 h-96 rounded-full bg-gray-300 z-10"></span>-->
                </div>

                <div style="top:58%;transform: translateY(-50%)"
                     class="absolute right-0 text-4xl text-right pr-6 leading-relaxed">
                    <div class="text-gray-500">or</div>
                    <div>enter</div>
                    <div>keywords</div>
                    <input type="text" style="background-color: #C4C4C4"
                           class="block w-40 my-8 px-4 py-1.5 rounded-full text-xl leading-tight">
                    <input type="text" style="background-color: #C4C4C4"
                           class="block w-40 my-8 px-4 py-1.5 rounded-full text-xl leading-tight">
                    <input type="text" style="background-color: #C4C4C4"
                           class="block w-40 my-8 px-4 py-1.5 rounded-full text-xl leading-tight">
                    <div
                        class="w-14 h-14 bg-white rounded-full p-3.5 flex justify-center items-center shadow-md float-right cursor-pointer hover:opacity-60">
                        <box-icon class="w-10 h-10" name='right-arrow-alt'></box-icon>
                    </div>
                </div>
            </div>
        </div>
        <div class="mobile relative">
            <div class="skew-bg-mobile"></div>
            <div style="height: 70vh" class="absolute top-0 left-0 w-full">
                <!--                <template v-if="preview">-->
                <!--                    <img :src="preview"  alt=""/>-->
                <!--                    <p>file name: {{ image.name }}</p>-->
                <!--                    <p>size: {{ image.size/1024 }}KB</p>-->
                <!--                </template>-->
                <label>
                    <img v-if="!preview" src="/images/click_to_photo.gif" class="w-full p-6 absolute left-12 top-14"
                         alt="">
                    <span v-else
                          style="top:50%;left:50%;width:26rem;height:26rem;transform: translate(-50%,-50%);background-color: #646464;"
                          class="absolute rounded-full z-10 p-4 overflow-hidden">
                        <div v-if="preview" class="w-full h-full bg-white rounded-full overflow-hidden flex p-8">
                            <input class="w-full h-full" ref="file" type="file" accept="image/*" capture="user"
                                   @change="previewImg"/>
                            <img :src="preview">
                        </div>
                        <button @click="imgUpload" v-if="preview" style="background-color: rgba(0,0,0,.6)"
                                class="absolute w-full h-32 flex justify-center items-center bottom-0 left-0 text-white text-2xl z-10 hover:-translate-y-1">
                            UPLOAD <box-icon class="ml-2 w-8 h-8" name='upload' color="white"></box-icon>
                        </button>
                     </span>

                    <input v-if="!preview"
                           style="left: 50%;top: 50%; transform: translate(-50%,-50%);width: 75%; padding-top: 75%; height: 0"
                           class="absolute bg-black px-20 rounded-full opacity-0 cursor-pointer z-10" ref="file"
                           type="file" accept="image/*" capture="user" @change="previewImg"/>
                </label>
                <!--                <span style="top:52%;left:52%;width:30rem;height:30rem;transform: translate(-50%,-50%);"-->
                <!--                      class="absolute w-96 h-96 rounded-full bg-gray-300 z-10"></span>-->
            </div>
            <div style="margin-top: -65%">
                <div class="absolute right-0 text-5xl text-right pr-12 leading-tight">
                    <div class="text-gray-500">or</div>
                    <div>enter</div>
                    <div>keywords</div>
                </div>
            </div>
            <div style="margin-top: 50%" class="relative z-50 flex flex-wrap w-full justify-center px-24 pb-32">
                <input type="text" style="background-color: #C4C4C4"
                       class="block w-full my-8 mt-0 px-8 py-1.5 rounded-full text-2xl leading-loose">
                <input type="text" style="background-color: #C4C4C4"
                       class="block w-full my-8 mt-0 px-8 py-1.5 rounded-full text-2xl leading-loose">
                <input type="text" style="background-color: #C4C4C4"
                       class="block w-full my-8 mt-0 px-8 py-1.5 rounded-full text-2xl leading-loose">
                <button
                    class="w-full h-14 bg-white rounded-full px-8 py-3.5 flex justify-center items-center text-2xl shadow-md float-right cursor-pointer hover:opacity-60">
                    Submit
                    <box-icon class="w-10 h-10" name='right-arrow-alt'></box-icon>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import 'boxicons'
import axios from "axios";

export default {
    name: "Index",
    data() {
        return {
            imageBase64: 'data:image/jpeg;base64,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',
            videoUrl: 'null',
            preview: null,
            image: null
            // headImgSrc: require('@/assets/image/photograph.png')
        }
    },
    methods: {
        previewImg: function (event) {
            const input = event.target;
            if (input.files) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.preview = e.target.result;
                }
                this.image = input.files[0];
                reader.readAsDataURL(input.files[0]);
            }
        },
        async imgUpload() {
            {
                const formData = new FormData();
                // const apiUrl = this.$store.state.apiServerUrl;
                const url = "https://flaskapiserver-env.imacloud.com.tw/api/photo";
                formData.append("file", this.image); //required
                formData.append("language", 'zh_TW'); //required
                // this.flag = 1;
                axios
                    .post(`${url}`, formData)
                    .then(res => {
                        this.$store.commit("SET_BRAND", res.data.analysis_result.Brands);
                        // this.$router.push("/product");
                        let result = {
                            keyword: {
                                brands: [],
                                color: [],
                                tag: []
                            },
                            detail_information: {
                                describe: {},
                                color_detail: {},
                                all_Tag: []
                            }
                        }
                        result.keyword.brands = [res.data.analysis_result.Brands];
                        result.keyword.color = [res.data.analysis_result.Color[0]];
                        result.keyword.tag = [res.data.analysis_result.Tag[0].name];
                        // res.data.analysis_result.Tag.forEach(a => {
                        //     result.keyword.tag.push(a.name)
                        // })
                        result.detail_information.describe = res.data.detail_information.describe;
                        result.detail_information.color_detail = res.data.detail_information.color_detail;
                        result.detail_information.all_Tag = res.data.analysis_result.Tag;

                        console.log(result);
                        this.postAnalyze(result);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
        },
        async postAnalyze(recognition) {
            {
                const url = "https://flaskapiserver-env.imacloud.com.tw/api/analyze";
                axios
                    .post(`${url}`, recognition)
                    .then(res => {
                        this.$store.commit("SET_PRODUCT", res.data.table_normal_decrease);
                        this.$router.push("/product");
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
        },
    }
}
</script>

<style scoped>

:focus {
    outline: none;
}

/*斜三角背景css*/
.skew-bg, .skew-bg-mobile {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    /*調整斜三角顏色 -> background-color: red;*/
}

.skew-bg:before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 200%;
    height: 100%;
    background: white;
    transform-origin: 100% 0;
    transform: skewX(-35deg);
}

.skew-bg-mobile:before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: calc(100% + 150px);
    height: 100%;
    background: white;
    transform-origin: 0 0;
    transform: skewY(-30deg);
}

</style>
