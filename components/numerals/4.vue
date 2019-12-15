<template>
    <div class="numeral relative" >
        <svg class="relative z-10" version="1.0" xmlns="http://www.w3.org/2000/svg" width="500px" height="500px" viewBox="0 0 5000 5000" preserveAspectRatio="xMidYMid meet"
            :style="`filter: sepia(${invertEnvelope}) invert(${invert}) hue-rotate(${hueRotate}deg);`"
        >
            <g id="layer101"   stroke="none">
                <path :d="d1"/>
                <path :d="d2"/>
            </g>

        </svg>
        <div class="absolute" :class="{ 'fadeIn' : fadeIn }" v-show="fadeIn"
            :style="{ 'transform': 'translate(0, 0, 0)', 'filter': 'hue-rotate(${hueRotate}deg)' }"
            >
            <video 
                src="~/assets/videos/driving1.mp4" 
                autoplay 
                loop="false" 
                width="962" 
                height="720" 
                muted
                ref="video1"
                v-show="videoSource === 1"
                ></video>
            <video 
                src="~/assets/videos/driving2.mp4" 
                autoplay 
                loop="false" 
                width="962" 
                height="720" 
                muted
                ref="video2"
                v-show="videoSource === 2"
                ></video>
            <video 
                src="~/assets/videos/driving3.mp4" 
                autoplay 
                loop="false" 
                width="962" 
                height="720" 
                muted
                ref="video3"
                v-show="videoSource === 3"
                ></video>
        </div>
    </div>

</template>

<script>
export default {
    props: ['awaitingTransform'],
    data() {
        return {
            brightness: 1,
            fadeIn: false,
            invert: 0,
            d1: "M2630 2508 c-315 -860 -574 -1564 -575 -1566 -1 -1 -65 -14 -141 -27 -201 -36 -184 -28 -184 -80 l0 -45 591 0 590 0 -3 47 -3 48 -179 22 c-98 12 -180 24 -181 25 -2 3 845 2311 862 2351 6 14 124 -284 433 -1094 234 -611 426 -1115 428 -1119 2 -5 -100 -48 -225 -98 l-228 -89 -3 -47 -3 -46 435 0 436 0 0 48 0 47 -140 84 c-76 46 -143 88 -148 94 -5 7 -257 669 -562 1472 -304 803 -559 1477 -567 1498 -11 27 -21 37 -37 37 -21 0 -70 -130 -596 -1562z",
            d2: "M520 3945 c0 -25 3 -45 6 -45 8 0 301 -49 337 -56 l27 -6 0 -1449 c0 -797 -3 -1449 -7 -1450 -5 0 -87 -12 -183 -27 l-175 -28 -3 -47 -3 -47 591 0 591 0 -3 47 -3 47 -175 28 c-96 15 -178 27 -182 27 -5 1 -8 653 -8 1450 l0 1449 28 6 c35 7 328 56 336 56 3 0 6 20 6 45 l0 45 -590 0 -590 0 0 -45z",
            hueRotate: 0,
            invert: 0,
            invertEnvelope: 0,
            fadeIn: false,
            videoSource: 1
        }
    },
    methods: {
        shiftPoints(string){
            let newString = string.split(" ").map((char, index, array) => {
                let letters = char.match(/[a-z]+/gi) 
                let letter = letters ? letters[0] : ""
                let numbers = char.match(/[^a-z]+/gi)
                let number = numbers ? parseInt(numbers) : 0
                number += parseInt((Math.random() - 0.5) * 20.0)
                return index === array.length - 1 ? "" + number + letter : "" + letter + number
            }).join(" ")
            return newString
        },
        transform() {
            window.requestAnimationFrame(() => {
                this.invertEnvelope += 0.001
                this.d1 = this.shiftPoints(this.d1)
                this.d2 = this.shiftPoints(this.d2)
                this.hueRotate = this.invertEnvelope * Math.sin(Date.now() / 17) * 360
                this.invert = this.invertEnvelope * Math.pow(Math.cos(Date.now() / 9), 5)
                this.brightness = Math.sin(Date.now()) * 2
                if(Math.random() < 0.1) {
                    this.videoSource = Math.floor(Math.random() * 3) + 1
                }
                this.transform()
            })
        },
    },
    watch: {
        awaitingTransform() {
            this.fadeIn = true
            this.transform()
        }
    }
}
</script>
<style>
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    .fadeIn {
        animation-name: 'fadeIn';
        animation-duration: 1s;
        animation-fill-mode: both;
    }
</style>