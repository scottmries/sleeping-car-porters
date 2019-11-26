<template>
    <div class="relative">
        <div class="w-full h-full flex justify-between absolute z-10">
            <div class="w-1-8vw h-screen bg-black" :class="{ 'slide-left' : active }"></div>
            <div class="w-1-8vw h-screen bg-black" :class="{ 'slide-right' : active }"></div>
        </div>
        <slot></slot>
    </div>
</template>
<script>
    export default {
        props: ['active']
    }
</script>
<style scoped>
    .w-1-8vw {
        width: 12.5vw;
    }
    .slide-left {
        animation-name: slideLeft;
    }
    .slide-right {
        animation-name: slideRight;
    }
    .slide-left, .slide-right {
        animation-fill-mode: forwards;
        animation-duration: 10s;
        animation-timing-function: linear;
    }
    @keyframes slideLeft {
        from {
            transform: translateX(0%);
        }
        to {
            transform: translateX(-100%);
        }
    }

    @keyframes slideRight {
        from {
            transform: translateX(0%);
        }
        to {
            transform: translateX(100%);
        }
    }
</style>