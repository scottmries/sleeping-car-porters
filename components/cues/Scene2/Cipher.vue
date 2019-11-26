<template>
    <div :class="{
                'fade-in' : fadingIn,
                'fade-out' : fadingOut
                }">
        <img 
            src="~assets/images/cipher.jpg" 
            :style="{ 
                'transform': `scale(5) translate(${x}px, ${y}px)`,
                'filter': `contrast(2.0) hue-rotate(${hueRotation}deg)`,
                'opacity': flickeringOpacity
                }"
        />
    </div>
</template>
<script>
export default {
    props: ['fadingIn', 'fadingOut'],
    data() {
        return {
            flickeringOpacity: 1,
            fadeFactor: 1 / 120,
            x: 0, 
            y: 0,
            hueRotation: 0
        }
    },
    created() {
        this.show()
        
    },
    methods: {
        animate() {
            window.requestAnimationFrame(this.show)
        },
        flicker() {
            const seed = Math.random()
            if(seed < 0.01) {
                this.flickeringOpacity = Math.random()
            } else {
                const change = Math.random() * 0.05
                if(Math.random() > 0.5) {
                    this.flickeringOpacity = this.flickeringOpacity + change > 1 ? this.flickeringOpacity - change : this.flickeringOpacity + change
                } else {
                    this.flickeringOpacity = this.flickeringOpacity - change < 0 ? this.flickeringOpacity + change : this.flickeringOpacity - change
                }
            }
        },
        move() {
            this.x += 0.1
            this.y += 0.1
        },
        rotateHue() {
            this.hueRotation += 1
        },
        show() {
            this.flicker()
            this.move()
            this.rotateHue()
            this.animate()
        }
    }
}
</script>