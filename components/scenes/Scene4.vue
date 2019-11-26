<template>
    <component :is="currentCue" :awaitingTransform="awaitingTransform"></component>
</template>
<script>
import scene from '~/components/scenes/Scene'
import Numeral4 from '~/components/numerals/4'

export default {
    extends: scene,
    components: { Numeral4 },
    data() {
        return {
            cues: [ Numeral4, Numeral4 ],
            sceneNumber: 4
        }
    },
    computed: {
        awaitingTransform() {
            return this.cueIndex === 1
        }
    }
}
</script>