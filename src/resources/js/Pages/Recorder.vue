<template>
    <div>
        <div class="del-h1">
            <input ref="file" type="file" accept="image/*" capture="user">
            <div>
                <butoon class="btn-default" @click="callCamera">Capture</butoon>
                <video ref="video" width="640" height="480" autoplay></video>
                <button class="btn-default" @click="photograph">Confirm</button>
                <canvas ref="canvas" width="640" height="480"></canvas>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Recorder",
    data() {
        return {
            imageBase64: 'data:image/jpeg;base64,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',
            videoUrl: 'null',
            // headImgSrc: require('@/assets/image/photograph.png')
        }
    },
    components: {
    },
    created() {
        let constraints = {
            audio: true
        }
        navigator.mediaDevices.getUserMedia(constraints)
            .then(function (stream) {
                // 取得當前裝置的影音串流（stream）
            })
            .catch(function (error) {
                // 如果有錯誤發生
            });
    },
    methods: {
        callCamera() {
            navigator.mediaDevices.getUserMedia({
                video: true
            }).then(success => {
                this.$refs['video'].srcObject = success
                this.$refs['video'].play()
            }).catch(error => {
                console.error('攝影機開啟失敗')
            })
        },
        photograph() {
            let ctx = this.$refs['canvas'].getContext('2d')
            ctx.drawImage(this.$refs['video'], 0, 0, 640, 480)
            let imgBase64 = this.$refs['canvas'].toDataURL('image/jpeg', 0.7)

            let str = imgBase64.replace('data:image/jpeg;base64,', '')
            let strLength = str.length
            let fileLength = parseInt(strLength - (strLength / 8) * 2)
            let size = (fileLength / 1024).toFixed(2)
            console.log(size)

            this.dialogCamera = false
            let ADOM = document.createElement('a')
            ADOM.href = this.headImgSrc
            ADOM.download = new Date().getTime() + '.jpeg'
            ADOM.click()
        },
        closeCamera() {
            if (!this.$refs['video'].srcObject) {
                this.dialogCamera = false
                return
            }
            let stream = this.$refs['video'].srcObject
            let tracks = stream.getTracks()
            tracks.forEach(track => {
                track.stop()
            })
            this.$refs['video'].srcObject = null
        },
    }
}
</script>

<style scoped lang="scss">
.del-h1 ::v-deep h1 {
    display: none;
}

body {
    padding: 40px;
    background: #FAFAFA;
}

.video-container {
    border: 1px solid #DADADA;
    position: relative;

    .is-recording {
        position: absolute;
        top: 13px;
        width: 20px;
        height: 20px;
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTEwcHgiIGhlaWdodD0iMTEwcHgiIHZpZXdCb3g9IjAgMCAxMTAgMTEwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OC4yICg0NzMyNykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+R3JvdXA8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAiIGZpbGw9IiNDMzU3M0YiPgogICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBjeD0iNTUiIGN5PSI1NSIgcj0iNTUiPjwvY2lyY2xlPgogICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iOSIgY3g9IjU1IiBjeT0iNTUiIHI9IjQyIj48L2NpcmNsZT4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        animation: recording 1s 0s infinite alternate;
    }
}

#inputVideo,
#outputVideo {
    max-width: 100%;
    height: 380px;
}

@keyframes recording {
    0% {
        opacity: 0.3;
    }
    100% {
        opacity: 1;
    }
}

.btn-default {
    margin-top: 40px;
    display: inline-block;
    padding: 10px 15px;
    border: solid 1px #555555;
    background-color: #999999;
    cursor: pointer;
}

.btn-default:hover {
    opacity: .6;
}

.btn-default:focus {
    background-color: #555;
}
</style>
