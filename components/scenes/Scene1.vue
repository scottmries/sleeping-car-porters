<template>
    <component :is="currentCue"
        :awaiting-next-action="awaitingNextAction"
        @action-updated="actionUpdated"
    ></component>
</template>
<script>
import scene from '~/components/scenes/Scene'
import Numeral1 from '~/components/numerals/1'
import Title from '~/components/cues/Title'
import Driving from '~/components/cues/Driving'
import Black from '~/components/scenes/Black'

export default {
    extends: scene,
    components: { Numeral1, Title, Black, Driving },
    data() {
        return {
            cues: [ 'Numeral1', 'Black', 'Driving', 'Title' ],
            sceneNumber: 1
        }
    }
}
</script>