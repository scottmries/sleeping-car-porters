<template>
    <component 
        :is="currentCue"></component>
</template>
<script>
export default {
    props: [ 
        'awaitingNextCue', 
        'awaitingPrevCue', 
        'setCue', 
        'awaitingNextAction', 
        'awaitingPreviousAction' 
    ],
    data() {
        return {
            cues: [],
            cueIndex: 0,
            sceneNumber: 0
        }
    },
    computed: {
        currentCue() {
            console.log('cue: ', this.cueIndex)
            return this.cues[this.cueIndex]
        }
    },
    methods: {
        cueUpdated() {
            this.$emit('cue-updated')
        },
        actionUpdated() {
            this.$emit('action-updated')
        }

    },
    watch: {
        awaitingNextCue() {
            if(this.cueIndex < this.cues.length - 1){
                this.cueIndex++
                this.cueUpdated()
            }
        },
        awaitingPrevCue() {
            if(this.cueIndex > 0) {
                this.cueIndex--
                this.cueUpdated()
            }
        },
        setCue() {
            if(this.setCue < this.cues.length) {
                this.cueIndex = this.setCue
                this.cueUpdated()
            }
        }
    },
    created() {
        console.log(`Scene ${ this.sceneNumber } created`)
    },
    destroyed() {
        console.log(`Scene ${ this.sceneNumber } destroyed`)
    }
}
</script>