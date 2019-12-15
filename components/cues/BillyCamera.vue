<template>
    <div class="relative camera-container overflow-hidden" :style="{ 'transform' : `rotateZ(${rotation}deg)` }">
        <canvas width="630" height="468" ref="canvas"></canvas>
        <img ref="image" class="absolute" :src="`http://192.168.0.${ip}:4747/mjpegfeed?640x480`" />
    </div>
</template>
<script>
export default {
    props: {
        rotation: {
            default: 90
        },
        awaitingNextAction: {
            default: false
        }
    },
    data() {
        return {
            context: null,
            ip: 56
        }
    },
    mounted() {
        this.context = this.$refs['canvas'].getContext('2d')
        console.log('mounted')
    },
    destroyed() {
        this.context = null
    },
    methods: {
        changeIp() {
            this.ip = this.ip === 56 ? 57 : 56
        },
        copy() {
            const sourceImage = this.$refs['image']
            const imageWidth = sourceImage.offsetWidth
            const imageHeight = sourceImage.offsetHeight
            try{
                this.context.drawImage(sourceImage, 0, -12)
            } catch (err)  {

            }
            this.drawBorders()
        },
        drawBorders() {
            this.context.fillStyle = 'white'
            this.context.beginPath()
            this.context.moveTo(0, 0)
            this.context.lineTo(200, 0)
            this.context.lineTo(0, 100)
            this.context.fill()
            this.context.moveTo(630, 0)
            this.context.lineTo(468, 0)
            this.context.lineTo(630, 100)
            this.context.fill()
            this.context.moveTo(0, 480)
            this.context.lineTo(200, 480)
            this.context.lineTo(0, 380)
            this.context.fill()
            this.context.moveTo(630, 480)
            this.context.lineTo(468, 480)
            this.context.lineTo(630, 368)
            this.context.fill()
        }
    },
    watch: {
        awaitingNextAction() {
            this.copy()
            this.$emit('action-updated')
        }
    }
}
</script>
<style scoped>
    canvas {
        transform: translateX(350px);
    }
    img {
        transform: translateX(10000px);    
    }
    .camera-container {
        filter: contrast(2) sepia(1);
        border-style: inset;
    }
    .frame-border {
        border-style: inset;
        width: 0;
        height: 0;
    }
    .border-top-left {
        border-width: 100px 200px 0 0;
        border-color: white transparent transparent transparent;
    }
    .border-top-right {
        border-width: 0 200px 100px 0;
        border-color: transparent white transparent transparent;
    }
    .border-bottom-right {
        border-width: 0 0 100px 200px;
        border-color: transparent transparent white transparent;
    }
    .border-bottom-left {
        border-width: 100px 0 0 200px;
        border-color: transparent transparent transparent white;
    }
</style>