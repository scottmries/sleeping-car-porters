<template>
    <div class="container relative">
       <div class="symbol w-full h-screen opacity-0" :class="{ 'on' : on }"
            :style="{ 'background-position' : -32 + column + 'vh ' + (-45 - (65 * row)) + 'vh' }"

       ></div>
       <input class="opacity-0 w-full h-screen absolute top-0 bottom-0 left-0 right-0"  
        @keyup="handleKey"
        >
    </div>
</template>
<script>
    export default {
        data() {
            return {
                row: 0,
                column: 0,
                on: true
            }
        },
        methods: {
            handleKey(e) {
                console.log(e)
                if(e.code === 'Space') {
                    this.on = !this.on
                }
            }
        }
    }
</script>
<style scoped>
    .symbol {
        transition: opacity 0.5s ease;
        background-image: url("~assets/images/zodiac-cipher.jpg");
        background-size: 2400%;
        background-repeat: no-repeat;
        filter: invert(100%);
    }
    .symbol.on {
        opacity: 1;
    }

</style>