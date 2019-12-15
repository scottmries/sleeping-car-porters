<template>
    <div class="w-full h-full flex justify-center items-center ">
        <div class="relative w-full h-full" :class="{ 'fade-in' : fadeIn }">
            <div class="absolute top-0" :style="{ height: `${videoHeight}px`, width: `${videoWidth}px` }">
                <video src="~/assets/videos/unforgiving-forest.mp4" autoplay muted loop="true" :width="videoWidth" :height="videoHeight" 
                    :style="`filter: brightness(${brightness}) contrast(${contrast}) saturate(0);`"
                    :class="{ 'fade-in' : fadeIn }"
                ></video>
            </div>
            <div class="absolute top-0 canvas-container" :style="{ height: `${videoHeight}px`, width: `${videoWidth}px`, filter: `hue-rotate(${hueRotate}deg)` }">
                <canvas ref='canvas' class="w-full" style="opacity: 0;" :width="videoWidth" :height="videoHeight" :class="{ 'fade-in' : colorsFadeIn }"></canvas>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            context: null,
            fadeIn: false,
            colorsFadeIn: false,
            videoHeight: 1080,
            videoWidth: 1920,
            squareSize: 1000,
            brightness: 1,
            contrast: 3,
            hueRotate: 0
        }
    },
    mounted() {
        this.context = this.$refs['canvas'].getContext('2d')
        this.fadeIn = true
        setTimeout(() => {this.colorsFadeIn = true}, 10000)
        this.setColors()
    },
    methods: {
        draw() {
            window.requestAnimationFrame(this.setColors)
        },
        setColors() {
            // write a full rectangle at ~ 0.1 opacity so it fades away
            this.context.fillStyle = "rgba(0, 0, 0, 0.001)"
            this.context.fillRect(0, 0, this.videoWidth, this.videoHeight)

            for(var i = 0; i <= this.videoWidth / this.squareSize; i++) {
                for(var j = 0; j <= this.videoHeight / this.squareSize; j++) {
                    if(Math.random() > 0.99) {
                        this.context.beginPath();
                        this.context.arc(i * 10 + Math.random() * 10, j * 10 + Math.random() * 10, this.squareSize * 2 * Math.random(), 0, 2 * Math.PI, false)
                        this.context.fillStyle = `rgba(${Math.floor(Math.random() * 2) * 255}, ${Math.floor(Math.random() * 2) * 255}, ${Math.floor(Math.random() * 2) * 255}, ${Math.pow(Math.random(), 5)})`
                        this.context.fill();
                    }
                }
            }
            this.brightness = Math.sin(Date.now() * 10000 / (100 + Math.sin(100 * Date.now()))) * 0.25 + 1
            this.contrast = 6 + 3 * Math.cos(Date.now() / 100000)
            this.hueRotate += 1
            this.draw()
        }
    }
    
}
</script>
<style scoped>
    .row {
        height: 10px;
        opacity: 0.5;
    }
    .column {
        width: 10px;
    }
    .canvas-container {
        mix-blend-mode: multiply;
        filter: blur(2px);
    }
    video {
        transform: scale(2);
    }
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    .fade-in {
        animation-name: fadeIn;
        animation-duration: 20s;
        animation-fill-mode: both;
    }
</style>