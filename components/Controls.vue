<template>
    <div>
    </div>
</template>

<script>
export default {
    created() {
        if(process.client) {
            window.addEventListener('keyup', this.keyup)
        }
    },
    methods: {
        keyup(e) {
            console.log(e)
            this.$emit('keyup', e)
        }
    }
}
</script>