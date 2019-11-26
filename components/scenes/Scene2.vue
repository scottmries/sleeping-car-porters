 <template>
    <component :is="currentCue"
        :fadingIn="fadingIn"
        :fadingOut="fadingOut"
        :widening="widening"
        :stopFadeHalfway="stopFadeHalfway"
        :yellowActive="yellowActive"
        :awaiting-next-action="awaitingNextAction"
        @action-updated="actionUpdated"
    ></component>
</template>
<script>
import scene from '~/components/scenes/Scene'
import Numeral2 from '~/components/numerals/2'
import Cipher from '~/components/cues/scene2/cipher'
import Moon from '~/components/cues/CowboyMoon'
import Black from '~/components/scenes/Black'
import Camera from '~/components/cues/Camera'
import Counting from '~/components/cues/Counting'

export default {
    extends: scene,
    components: { Numeral2, Cipher, Moon, Black, Counting },
    data() {
        return {
            cues: [ 'Numeral2', 'Black', 'Cipher', 'Cipher', 'Moon', 'Moon', 'Moon', 'Black', 'Counting'],
            sceneNumber: 2,
            cueIndex: 0
        }
    },
    computed: {
        // cue 0: numeral
        // cue 1: black
        // cue 2: cipher fades in
        // cue 3: cipher fades out
        // cue 4: moon slowly fades in, halfway
        // cue 5: moon slowly fades in, the rest of the way
        // cue 6: moon loses letterbox, gains color
        // cue 7: moon out
        // cue 8: counting
        // cue 9: unforgiving forest

        fadingIn() {
            return [2, 4].indexOf(this.cueIndex) > -1
        },
        fadingOut() {
            return[3, 7].indexOf(this.cueIndex) > -1
        },
        widening() {
            return this.cueIndex == 6
        },
        stopFadeHalfway() {
            return this.cueIndex != 5
        },
        yellowActive() {
            return this.cueIndex == 6
        }
    }
}
</script>