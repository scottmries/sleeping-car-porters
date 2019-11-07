<template>
    <div class="container relative">
       <div class="symbol w-full h-screen" :class="{ 'on' : on }">
            <img class="cipher" src="~assets/images/cipher.jpg" 
            :style="{ 'transform' : transform }"/>
       </div>
        <controls @keyup="keyup"></controls>
    </div>
</template>
<script>
    import controls from '~/components/Controls'

    export default {
        components: { controls },
        data() {
            return {
                x: 0,
                y: 0,
                on: false,
                animationFrame: undefined,
                baseXSpeed: 0.02,
                xSpeedMultiplier: 1,
                baseYSpeed: 4,
                offsets: {
                    top: -10,
                    right: -30,
                    bottom: -20,
                    left: 0
                }
            }
        },
        created() {
            this.x = this.offsets.left
            this.y = this.offsets.top
            if(process.client) {
                this.animationFrame = window.requestAnimationFrame(
                    this.animate
                );
            }
        },
        destroyed() {
            this.animationFrame = undefined
        },
        computed: {
            transform() {
                return 'scale(4.0) translate(' + this.x + '%, ' + this.y + '%)'
            }
        },
        methods: {
            keyup(e) {
                switch(e.code) {
                    case 'Space':
                        this.on = !this.on
                        break
                    case 'ArrowUp':
                        this.xSpeedMultiplier += 2.5
                        break
                    case 'ArrowDown':
                        if(this.xSpeedMultiplier > 3.5) {
                            this.xSpeedMultiplier -= 2.5
                        }
                        break
                    case 'Digit0':
                        this.xSpeedMultiplier = 1
                        break
                    default:
                        console.log(e.code)
                }
            },
            animate() {
                if(this.on){
                    if(this.x > -100 - this.offsets.right) {
                        this.x -= this.baseXSpeed * this.xSpeedMultiplier
                    } else {
                        this.x = this.offsets.left
                        if(this.y > -100 - this.offsets.bottom) {
                           this.y -= this.baseYSpeed
                        } else {
                            this.y = this.offsets.top
                        }
                    }
                }
                if(process.client) {
                    window.requestAnimationFrame(this.animate)
                }
            }
        }
    }
</script>
<style scoped>
    .symbol {
        transition: opacity 2s ease;
        opacity: 0;
    }
    .symbol.on {
        opacity: 1;
    }
    .controls {
        width: 100vw;
        height: 100vh;
    }
    .cipher {
        max-width: none;
        height: auto;
        width: 100%;
        transform: scale(4);
        transform-origin: 0 0; 
    }

</style>