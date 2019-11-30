<template>
    <component 
        :is="currentCue"
        :awaiting-next-action="awaitingNextAction"
        @action-updated="actionUpdated"></component>
</template>

<script>
import scene from '~/components/scenes/Scene'
import Numeral5 from '~/components/numerals/5'
import Camera from '~/components/cues/BillyCamera'

export default {
    extends: scene,
    components: { Numeral5, Camera },
    data() {
        return {
            cues: [ Numeral5, Camera ],
            sceneNumber: 5
        }
    },
    methods: {
        activate(index) {
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