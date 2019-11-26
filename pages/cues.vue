<template>
    <div class="container text-white">
        <component 
            v-bind:is="sceneName"
            :awaiting-next-cue="awaitingNextCue"
            :awaiting-prev-cue="awaitingPrevCue"
            :awaiting-next-action="awaitingNextAction"
            :set-cue="cueNumber"
            @cue-updated="cuesUpdated"
            @action-updated="actionUpdated"
            ></component>
        <controls @keyup="keyup"></controls>
    </div>

</template>

<script>
import * as THREE from 'three'
import controls from '~/components/Controls'
import black from '~/components/scenes/black'
import scene1 from '~/components/scenes/Scene1'
import scene2 from '~/components/scenes/Scene2'
import scene3 from '~/components/scenes/Scene3'
import scene4 from '~/components/scenes/Scene4'
import scene5 from '~/components/scenes/Scene5'
import scene6 from '~/components/scenes/Scene6'

let width = 1920
let height = 1080

export default {
    components: { controls, black, scene1, scene2, scene3, scene4, scene5, scene6 },
    data() {
        return {            
            awaitingNextCue: false,
            awaitingPrevCue: false,
            awaitingNextAction: false,
            sceneNumber: 0,
            cueNumber: 0
        }
    },
    computed: {
        sceneName() {
            return this.sceneNumber > 0 && this.sceneNumber < 7 ? 'scene' + this.sceneNumber : black
        }
    },
    methods: {
        keyup(e) {
            const numbers = [...Array(10).keys()].map(key => key.toString())
            const cueIndices = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
            if(numbers.indexOf(e.key) > -1){
                this.sceneNumber = e.key
            }
            if(cueIndices.indexOf(e.key) > -1) {
                this.cueNumber = cueIndices.indexOf(e.key)
            }
            switch(e.key) {
                case 'ArrowLeft':
                    this.awaitingPrevCue = true
                    break
                case 'ArrowRight':
                    this.awaitingNextCue = true
                    break
                case 'n':
                    this.awaitingNextAction = true
                    break
                default:
                    console.log('uncaught key', e.key)
            }
        },
        cuesUpdated() {
            this.awaitingNextCue = false
            this.awaitingPreviousCue = false
        },
        actionUpdated() {
            this.awaitingNextAction = false
        }
    }
}
</script>
<style scoped>
    .container {
        max-width: none;
    }
</style>