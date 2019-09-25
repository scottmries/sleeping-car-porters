<template>
    <controls>
        <div class="relative">
            <div v-show="!on">
                <h2>This page will trigger the DMX lights for the psychedelic scene</h2>
                <a href="#" class="text-white" @click.prevent="on = !on">Start DMX</a>
            </div>
        </div>
    </controls>
</template>
<script>
    export default {
        data() {
            return {
                on: false
            }
        }    
    }
</script>