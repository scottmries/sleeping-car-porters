<template>
    <component :is="currentCue"></component>
</template>
<script>
import scene from '~/components/scenes/Scene'
import Numeral6 from '~/components/numerals/6'

export default {
    extends: scene,
    components: { Numeral6 },
    data() {
        return {
            cues: [ Numeral6 ],
            sceneNumber: 6
        }
    }
}
</script>