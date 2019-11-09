<template>
    <div class="bg-green" @click="active = true" :class="{ 'active' : active }">

    </div>
</template>
<script>
export default {
    data(){
        return {
            active: false
        }
    },
    deactived() {
        this.active = false
    }
}
</script>