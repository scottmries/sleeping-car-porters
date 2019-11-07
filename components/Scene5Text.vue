<template>
    <div class="text-center h-full absolute" :class="{'active': active,'paused': paused, 'black' : black }">
        <h1>{{ title || '' }}</h1>
        <h2 v-show="heading">{{ heading }}</h2>
    </div>
</template>
<script>
export default {
    props: ['active', 'paused', 'title', 'heading', 'black']
}
</script>
<style scoped>
    h1 {
        font-family: 'Didot';
        @apply text-6xl text-white;
    }
    h2 {
        font-family: 'Prata';
        @apply text-5xl text-white;
    }
    h1, h2 {
        animation-name: grow, squeeze;
        animation-duration: 180s, 60s;
        animation-iteration-count: 1, 1;
        animation-play-state: paused, paused;
        transition: transform 180s linear, letter-spacing 60s linear;    
        @apply w-full text-center;
    }
    @keyframes grow {
        0% {
            transform: scale(1) translateY(0);
        }
        100% {
            transform: scale(100) translateY(25%);
        }
    }
    @keyframes squeeze {
        0% {
            letter-spacing: normal;
        }
        100% {
            letter-spacing: -20px;
        }
    }
    .active h1, .active h2 {
        animation-play-state: running, running;
    }
    .paused h1, .paused h2 {
        animation-play-state: paused, paused;
    }
    .black h1, .black h2 {
        @apply text-black;
    }
</style>