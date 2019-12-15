<template>
    <div class="w-full h-full">
        <div class="h-full bg-white search-light"></div>
    </div>
</template>
<style>
    @keyframes search {
        from {
            transform: translateX(-10%);
        }
        to {
            transform: translateX(1010%);
        }
    }
    .search-light {
        width: 50%;
        animation-name: search;
        animation-duration: 0.5s;
        animation-fill-mode: both;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        filter: blur(10);
    }
</style>