<template>
    <component :is="currentCue"></component>
</template>
<script>
import scene from '~/components/scenes/Scene'
import Numeral1 from '~/components/numerals/1'

export default {
    extends: scene,
    components: { Numeral1 },
    data() {
        return {
            cues: [ 'Numeral1' ],
            sceneNumber: 1
        }
    }
}
</script>