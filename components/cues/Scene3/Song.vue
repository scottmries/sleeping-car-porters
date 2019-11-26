<template>
    <div>
        <div class="text-white text-xl flex justify-center align-end">
            <div>
                <div v-html="lyric"></div>
            </div>
        </div>
        <div>
            <div v-html="syllable"></div>
        </div>
    </div>
</template>

<script>
    // draw both the current syllable and the complete current lyric
    // get the window location of the current lyric
    // the location of where the ball lands is the running widths of all the previous lyrics plus half the width of the current width plus the location of the lyric
    // calculate the location on the next tick after the lyric has been rendered
    // longest lyric is the twenty-third one
    export default {
        props: ['awaitingNextAction', 'awaitingPreviousAction'],
        computed: {
            lyric() {
                return this.lyrics[this.lyricIndex].reduce((acc, lyric, index) => acc + ( index === this.syllableInCurrentLyricIndex ? '<span class="current">' + lyric + '<span>' : lyric ), "" )
            },
            syllable() {
                return this.allSyllables[this.syllableIndex]
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
            syllableInCurrentLyricIndex() {
                let syllablesInPreviousLyrics = 0
                let lyricIndex = 0
                let runningSyllables = this.lyrics[0].length
                while(syllablesInPreviousLyrics < this.syllableIndex) {
                    syllablesInPreviousLyrics += this.lyrics[lyricIndex].length
                    lyricIndex++
                }
                return this.syllableIndex - syllablesInPreviousLyrics
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
                            "And ", "he ", "list'ned", "a", "while ", "as ", "the ", "Kid ", "told ", "his ", "tale"
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
                            "It ", "was ", "out ", "in ", "New ", "Mex", "i", "co, ", "long ", "long ", "ago"
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
