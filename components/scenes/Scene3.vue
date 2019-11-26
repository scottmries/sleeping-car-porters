<template>
    <component 
        :is="currentCue"
        :awaiting-next-action="awaitingNextAction"
        :awaiting-previous-action="awaitingPreviousAction"
        @action-updated="actionUpdated"></component>
</template>
<script>
import scene from '~/components/scenes/Scene'
import Numeral3 from '~/components/numerals/3'
import FataMorgana from '~/components/cues/FataMorgana'
import Song from '~/components/cues/Scene3/Song'

export default {
    extends: scene,
    components: { Numeral3, FataMorgana, Song },
    data() {
        return {
            cues: [ 'Numeral3', 'FataMorgana', 'Song' ],
            sceneNumber: 3
        }
    }
}
</script>