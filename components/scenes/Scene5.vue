<template>
    <div class="h-full w-full" @click="advance">
        <div class="relative">
            <animatedText v-for="(text, index) in texts" :key="index"
                :title="text.title"
                :heading="text.heading"
                :active="isActive(index)"
                :paused="isPaused(index)"
                :black="index % 2"
                v-show="isShowing(index)"
                ></animatedText>
        </div>
    </div>
</template>

<script>
import animatedText from '~/components/cues/Scene5/text'
import scene from '~/components/scenes/Scene'

export default {
    extends: scene,
    components: {animatedText},
    created() {
        console.log('scene 5')
    },
    data() {
        return {
            actives: [],
            pauseds: [],
            showeds: [],
            firstActive: 0,
            firstPaused: 0,
            firstShowed: 0,
            lastAction: 'paused',
            texts: [
                {
                    title: "The Texas Star - March 1881",
                    heading: "The Kid Tells All! Exclusive Jail Interview"
                },
                {
                    heading: "STOLEN CATTLE IN MY BED"
                },
                {
                    heading: "FED HIM TEQUILA"
                },
                {
                    heading: "BOTH SIDES GUILTY"
                },
                {
                    heading: "SLIP ME A GUN"
                },
                {
                    heading: "I PRAYED EVERY DAY"
                }
            ]
        }
    },
    methods: {
        activate(index) {
            console.log(index)
            this.actives.push(index)
        },
        pause(index) {
            this.pauseds.push(index)
        },
        show(index) {
            this.showeds.push(index)
        },
        activateNext(){
            this.activate(this.firstActive++)
        },
        pauseNext(){
            this.pause(this.firstPaused++)
        },
        showNext(){
            this.show(this.firstShowed++)
        },
        isActive(index) {
            return this.actives.indexOf(index) > -1
        },
        isPaused(index) {
            return this.pauseds.indexOf(index) > -1
        },
        isShowing(index) {
            return this.showeds.indexOf(index) > -1
        },
        advance() {
            switch(this.lastAction) {
                case 'paused':
                    this.showNext()
                    this.lastAction = 'shown'
                    break
                case 'shown': 
                    this.activateNext()
                    this.lastAction = 'activate'
                    break
                case 'activate':
                    this.pauseNext()
                    this.lastAction = 'paused'
                    break
            }
        }
    }
}
</script>