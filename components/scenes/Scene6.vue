<template>
    <component :is="currentCue"></component>
</template>
<script>
import scene from '~/components/scenes/Scene'
import Numeral6 from '~/components/numerals/6'
import Black from '~/components/scenes/Black'

export default {
    extends: scene,
    components: { Numeral6, Black },
    data() {
        return {
            cues: [ Numeral6, Black ],
            sceneNumber: 6
        }
    }
}
</script>