<template>
    <div class="flex justify-center items-center h-full number">
        {{ number }}
    </div>
</template>
<script>
export default {
    props: ['awaitingNextAction'],
    data() {
        return {
            number: 1
        }
    },
    methods: {
        increment() {
            if(this.number < 10) {
                this.number++
            } else if (this.number = '') {
                this.number = 1
            } else {
                this.number = ''
            }
        },
        decrement() {
            if(this.number > 1) {
                this.number--
            } else if (this.number = '') {
                this.number = 10
            } else {
                this.number = ''
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
    }
}
</script>
<style scoped>
    .number {
        font-size: 80vh;
    }
</style>