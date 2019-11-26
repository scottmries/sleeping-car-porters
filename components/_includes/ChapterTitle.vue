<template>
    <div>
    </div>
</template>
<script>
export default {
    props: ['number'],
    data() {
        return {
            numerals: ['I', 'II', 'III', 'IV', 'V', 'VI'],
            awaitingDevolve: false
        }
    },
    computed: {
        numeralText() {
            return this.numerals[this.number]
        }
    },
    methods: {
        devolve() {
            this.awaitingDevolve = true
        },
        stopDevolve() {
            this.awaitingDevolve = false
        }
    }
}
</script>