<template>
    <div>
        <div class="desktop">
            <div class="skew-bg flex">
                <div class="w-2/3 relative">
                    <router-link to="/recorder"><img src="/images/click.gif" style="max-width: 75%; margin-left: 25%;" alt=""></router-link>
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

                <label>
                <span style="top:50%;left:50%;transform: translate(-50%,-50%);background-color: #646464"
                          class="absolute w-96 h-96 rounded-full z-20"><input style="display:none;" ref="file" type="file" accept="image/*" capture="user" @change="previewImg"></span></label>
                <span style="top:52%;left:52%;transform: translate(-50%,-50%);"
                      class="absolute w-96 h-96 rounded-full bg-gray-300 z-10"></span>
            </div>
            <div style="margin-top: -60%">
                <div class="absolute right-0 text-5xl text-right pr-12 leading-tight">
                    <div class="text-gray-500">or</div>
                    <div>enter</div>
                    <div>keywords</div>
                </div>
            </div>
            <div style="margin-top: 50%" class="flex flex-wrap w-full justify-center px-24 pb-32">
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

export default {
    name: "Index",

    methods: {
        previewImg: function(event) {
            const input = event.target;
            if (input.files) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.preview = e.target.result;
                }
                this.image=input.files[0];
                reader.readAsDataURL(input.files[0]);
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
    transform: skewX(-30deg);
}
.skew-bg-mobile:before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: calc(100% + 150px);
    height: 100%;
    background: white;
    transform-origin:0 0;
    transform: skewY(-30deg);
}
</style>
