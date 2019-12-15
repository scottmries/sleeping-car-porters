<template>
    <div class="flex justify-center items-center text-6xl h-full main-title">
        Sleeping Car Porters
    </div>
</template>
<style scoped>
    div {
        font-family: 'Holtwood One SC', serif;
    }
    @keyframes blurOut {
        0% {
            filter: blur(0);
            opacity: 1;
        }
        50% {
            filter: blur(0);
            opacity: 1;
        }
        100% {
            filter: blur(100px);
            opacity: 0;
        }
    }
    .main-title {
        animation-name: blurOut;
        animation-duration: 10s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
</style>