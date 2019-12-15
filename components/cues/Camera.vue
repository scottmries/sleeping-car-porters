<template>
    <div class="relative" :style="{ 'transform' : `rotateZ(${rotation})` }">
        <img class="relative" src="http://192.168.0.57:4747/mjpegfeed?640x480" />
    </div>
</template>
<script>
export default {
    props: {
        rotation: {
            default: 0
        }
    }
}
</script>
<style scoped>
    img {
        transform: translateY(-10px);
    }
</style>