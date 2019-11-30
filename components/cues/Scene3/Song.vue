<template>
    <div class="flex flex-col justify-end h-full text-3xl">
        <div class="text-white flex justify-center align-end">
            <div>
                <div class="relative">
                    <template v-for="(syllable, index) in lyric">
                        <span class="text-white" :key="index" :class="{ 'current': index === syllableInCurrentLyricIndex }">{{ syllable }}</span>
                    </template>
                    <div style="opacity: 1;">
                        <div 
                            class="relative"
                            style="opacity: 1; background: red;" >
                                <span v-html="previousSyllables" style="display: inline-block;" ref="previous-syllable-width"></span>
                            <span v-html="syllable" 
                                style="opacity: 1; background: blue; display: inline-block;" 
                                ref="syllable-width"></span>
                        </div>
                    </div>
                    <div class="absolute left-0 ball-container" 
                        :style="`transform: translateX(${ ballXOffset }px)`">
                            <div class="bg-yellow rounded-full ball" :class="{ 'bouncing': bouncing }"></div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    // fix the fast the lyric after the last breaks

    // draw both the current syllable and the complete current lyric
    // get the window location of the current lyric
    // the location of where the ball lands is the running widths of all the previous lyrics plus half the width of the current width plus the location of the lyric
    // calculate the location on the next tick after the lyric has been rendered
    // longest lyric is the twenty-third one
    export default {
        props: ['awaitingNextAction', 'awaitingPreviousAction'],
        computed: {
            ballXOffset() {
                return this.previousSyllablesWidth + this.syllableWidth / 2
            },
            lyric() {
                return this.lyrics[this.lyricIndex]
            },
            syllable() {
                return this.allSyllables[this.syllableIndex]
            },
            previousSyllables() {
                let syllables = []
                for(let i = 0; i < this.syllableInCurrentLyricIndex; i++) {
                    syllables.push(this.lyric[i])
                }
                return syllables.join('')
            },
            allSyllables() {
                return this.lyrics.reduce( (acc, lyric) => acc.concat(lyric), [])
            },
            lyricIndex() {
                let lyricIndex = 0
                let runningSyllables = this.lyrics[0].length
                while(runningSyllables <= this.syllableIndex) {
                    lyricIndex++
                    runningSyllables += this.lyrics[lyricIndex].length
                }
                return lyricIndex
            },
            syllablesInPreviousLyrics() {
                let syllables = 0
                for(let i = 0; i < this.lyricIndex; i++) {
                    syllables += this.lyrics[i].length
                }
                return syllables
            },
            syllableInCurrentLyricIndex() {
                return this.syllableIndex - this.syllablesInPreviousLyrics
            }
        },
        methods: {
            increment() {
                if(this.syllableIndex < this.allSyllables.length) {
                    this.syllableIndex++
                } else if (this.syllableIndex = '') {
                    this.syllableIndex = 1
                } else {
                    this.syllableIndex = ''
                }
            },
            decrement() {
                if(this.syllableIndex > 1) {
                    this.syllableIndex--
                } else if (this.syllableIndex = '') {
                    this.syllableIndex = this.allSyllables.length
                } else {
                    this.syllableIndex = ''
                }
            }
        },
        watch: {
            awaitingNextAction() {
                if(this.awaitingNextAction){
                    this.increment()
                    this.$emit('action-updated')
                    this.$nextTick(() => {
                        this.previousSyllablesWidth = this.$refs['previous-syllable-width'] ? this.$refs['previous-syllable-width'].clientWidth : 0
                        this.syllableWidth = this.$refs['syllable-width'] ? this.$refs['syllable-width'].clientWidth : 0
                        this.bouncing = false
                        this.$nextTick(() => {
                            this.bouncing = true
                            setTimeout(() => this.bouncing = false, 125)
                        })
                    })
                }
            },
            awaitingPreviousAction() {
                if(this.awaitingPreviousAction) {
                    this.decrement()
                    this.$emit('action-updated')
                }
            }
        },
        data() {
            return {
                syllableIndex: 0,
                previousSyllablesWidth: 0,
                syllableWidth: 0,
                bouncing: false,
                lyrics: 
                    [
                        [
                            "I'll ", "tell ", "you ", "the ", "stor", "y ", "of ", "Bill", "y ", "the ", "Kid"
                        ],
                        [
                            "And ", "I'll ", "tell ", "of ", "the ", "things ", "that ", "this ", "young ","out",  "law ", "did"
                        ],
                        [ 
                            "Say ", "out ", "in ", "the ", "west ", "when ", "the ", "count", "ry ", "was ", "young"
                        ],
                        [
                            "When ", "a ", "gun ", "was ", "your ", "law ", "and ", "your ", "law ", "was ", "your ", "gun"
                        ],
                        [],
                        [
                            "Now ", "the ", "Mex", "i", "can ", "mai", "dens ", "liked ", "Bil", "ly ", "so ", "well"
                        ],
                        [
                            "How ", "man", "y ", "he ", "had, ", "no ", "ex", "pert ", "could ", "tell"
                        ],
                        [
                            "While ", "sing", "ing ", "and ", "drink", "ing ", "he ", "come ", "to ", "his ", "end"
                        ],
                        [
                            "Shot ", "down ", "by ", "Pat ", "Gar", "rett ", "who ", "once ", "was ", "his ", "friend"
                        ],
                        [],
                        [
                            "Pat ", "Gar", "rett ", "rode ", "up ", "to ", "the ", "win", "dow ", "that ", "night"
                        ],
                        [
                            "And ", "the ", "des", "ert ", "was ", "still ", "and ", "the ", "moon", "light ", "was ", "bright"
                        ],
                        [
                            "And ", "he ", "list'ned ", "a", "while ", "as ", "the ", "Kid ", "told ", "his ", "tale"
                        ],
                        [
                            "Of ", "shoot", "ing ", "the ", "guard ", "at ", "the ", "Las ", "Cru", "ces ", "jail"
                        ],
                        [],
                        [
                            "You ", "sweet ", "Mex'", "can ", "mai", "dens, ", "come ", "give ", "me ", "your ", "hand"
                        ],
                        [
                            "At ", "the ", "age ", "of ", "six", "teen ", "I ", "killed ", "my ", "first ", "man"
                        ],
                        [
                            "It ", "was ", "out ", "in ", "New ", "Mex", "i", "co, ", "long ", "long ", "a", "go"
                        ],
                        [
                            "When ", "a ", "man's ", "on", "ly ", "chance ", "was ", "his ", "old ", ".4", "4"
                        ],
                        [],
                        [
                            "I ", "rode ", "down ", "the ", "bor", "der ", "and ", "robbed ", "in ", "Juar", "ez "
                        ],
                        [
                            "I ", "drank ", "to ", "the ", "mai", "dens, ", "the ", "happ", "iest ", "of ", "days"
                        ],
                        [
                            "My ", "pic", "ture ", "is ", "post", "ed ", "from ", "Tex", "as ", "to ", "Maine"
                        ],
                        [
                            "And ", "wo", "men ", "and ", "ri", "ding ", "and ", "rob", "bing's ", "my ", "game"
                        ],
                        [],
                        [
                            "On ", "the ", "same ", "night ", "that ", "young ", "Bil", "ly ", "died"
                        ],
                        [
                            "He ", "said ", "to ", "his ", "friends, ", '"I ', "just ", "ain't ", "sat", "is", "fied"
                        ],
                        [
                            "There's ", "twen", "ty-", "one ", "men ", "that ", "I've ", "put ", "bull", "ets ", "through"
                        ],
                        [
                            "And ", "the ", "sher", "riff ", "o'this ", "coun", "ty's ", "gon", "na ", "make ", "twen", "ty-", 'two."'
                        ],
                        [],
                        [
                            "Pat ", "Gar", "rett ", "then ", "fired ", "and ", "his ", "thumb-", "bust", "er ", "cracked"
                        ],
                        [
                            "And ", "Bil", "ly ", "fell ", "dead, ", "he ", "was ", "blowed ", "through ", "the ", "back"
                        ],
                        [
                            "Pat ", "rode ", "a", "way ", "and ", "the ", "Kid's ", "lay", "ing ", "dead"
                        ],
                        [
                            "And ", "this ", "was ", "the ", "last ", "song ", "of ", "Bil", "ly ", "the ", "Kid"
                        ]
                    ]

            }
        }
    }
</script>
<style scoped>
    .current {
        color: red;
    }
    .ball-container {
        transition: transform 0.25s;
        top: -30px;
    }
    .ball {
        width: 20px;
        height: 20px;
        right: 0px;
        background-color: red;
        animation-duration: 0.125s;
        animation-fill-mode: both;
    }
    .ball.bouncing {
        animation-name: bouncing;
    }
    @keyframes bouncing {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-50px);
        }
        100% {
            transform: translateY(0px);
        }
    }
</style>
