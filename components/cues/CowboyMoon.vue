<template>
    <div :class="{ 'fade-out' : fadingOut }" class="h-full ">
        <LetterBox :active="widening">
            <div class="gradient h-full w-full flex justify-center overflow-hidden relative"
                :style="{
                    'background': `linear-gradient(290deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) ${gradientCenter}%, rgba(0,212,255,0) ${gradientCenter + 40}%)`
                }">
                <img class="w-screen" src="~assets/images/moon-color.jpg" :class="{ 'brighten' : yellowActive }"/>
            </div>
        </LetterBox>
    </div>
</template>
<script>
import LetterBox from '~/components/cues/letterbox'
import { mapState } from 'vuex'

export default {
    components: { LetterBox },
    props: ['fadingIn', 'fadingOut', 'widening', 'stopFadeHalfway', 'yellowActive'],
    computed: {
        ...mapState(['devMode'])
    },
    data(){
        return {
            gradientCenter: 87.5,
            gradientStop: 80
        }
    },
    methods: {
        animate() {
            window.requestAnimationFrame(this.show)
        },
        show() {
            if(this.gradientCenter > this.gradientStop || !this.stopFadeHalfway) {
                this.gradientCenter -= (this.devMode ? 1.25 : 0.0125)
            }
            this.animate()
        }
    },
    created(){
        this.animate()
    }
}
</script>
<style scoped>
    .gradient {
        background: rgb(0,0,0);
    }
    img {
        position: relative;
        z-index: -1;
        transform: scale(1.2) translateX(-10%) translateY(10%);
        transition: 10s;
        filter: contrast(1) brightness(1) saturate(0);
    }
    img.brighten {
        filter: contrast(1) brightness(1.2) saturate(10);
        animation-name: shrink;
        animation-duration: 250s;
        animation-fill-mode: both;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes shrink {
        from {
            transform: scale(1.2) translateX(-10%) translateY(10%);
        }
        to {
            transform: scale(0) translateX(-10%) translateY(10%);
        }
    }
</style>