<template>
    <div  :class="{ 'fade-in' : fadeIn }">
        <div class="h-screen w-screen" style="background-color: white;" :style="`opacity: ${ opacity }`"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            fadeIn: false,
            opacity: 0
        }
    },
    mounted() {
        this.fadeIn = true
        this.flicker()
    },
    methods: {
        flicker() {
            this.opacity = Math.random()
            window.requestAnimationFrame(this.flicker)
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
    .fade-in {
        animation-name: fadeIn;
        animation-duration: 2s;
        animation-fill-mode: both;
    }
</style>