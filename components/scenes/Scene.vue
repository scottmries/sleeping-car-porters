<script>
export default {
    props: { awaitingNextCue, awaitingPrevCue },
    data() {
        return {
            cues: [],
            currentCue: 0
        }
    },
    methods: {
        cueUpdated() {
            this.$emit('cue-updated')
        }
    },
    watch: {
        awaitingNextCue() {
            if(currentCue < cues.length - 1){
                this.currentCue++
                this.cueUpdated()
            }
        },
        awaitingPrevCue() {
            if(currentCue > 0) {
                this.currentCue--
                this.cueUpdated()
            }
        }
    }
}
</script>