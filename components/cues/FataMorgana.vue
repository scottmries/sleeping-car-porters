<template>
    <div class="w-full h-full flex justify-center items-center opacity-0 video-container">
        <video src="~/assets/videos/fatamorgana.mp4" autoplay controls="false" loop="false" width="962" height="720" muted :style="`filter: url(#displacement) blur(${blur});`"></video> 
        <svg xmlns="http://www.w3.org/2000/svg" id="image" version="1.1">
            <defs>  
                <filter id="displacement" x="0%" y="0%" height="100%" width="100%">
                    <!-- <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="turbulence" /> -->
                    <feDisplacementMap :scale="offset" in2="sourceGraphic" xChannelSelector="R" yChannelSelector="R"/>
                </filter>
            </defs>
        </svg>
    </div>
</template>
<script>
export default {
    data() {
        return {
            offset: 200
        }
    },
    created() {
        this.ripple()
    },
    methods: {
        draw() {
            window.requestAnimationFrame(this.ripple)
        },
        ripple() {
            this.offset = 0.01 + Math.sin(Date.now() / 1880) + 2 * Math.sin(Date.now() / 1700) + 17 / 15 * Math.cos(Date.now() / 1000)
            this.draw()
        }
    },
    computed: {
        blur() {
            return `${0.01 + this.offset}px`
        }
    }
}
</script>
<style scoped>
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    .video-container {
        animation-name: fadeIn;
        animation-duration: 5s;
        animation-fill-mode: both;
    }
    video {
        filter: blur(10px);
    }
</style>