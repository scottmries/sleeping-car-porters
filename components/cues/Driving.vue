<template>
    <div class="h-full relative" >
        <div class="h-full flex justify-center items-center" :class="{ 'fadeIn' : fadeIn, 'driveOut' : driveOut }"
            :style="{ 'transform': 'translate(0, 0, 0)' }"
            >
            <video 
                src="~/assets/videos/driving1.mp4" 
                autoplay 
                loop="false" 
                width="962" 
                height="720" 
                muted
                ref="video1"
                v-show="videoSource === 1"
                ></video>
            <video 
                src="~/assets/videos/driving2.mp4" 
                autoplay 
                loop="false" 
                width="962" 
                height="720" 
                muted
                ref="video2"
                v-show="videoSource === 2"
                ></video>
            <video 
                src="~/assets/videos/driving3.mp4" 
                autoplay 
                loop="false" 
                width="962" 
                height="720" 
                muted
                ref="video3"
                v-show="videoSource === 3"
                ></video>
        </div>
    </div>

</template>

<script>
export default {
    props: ['awaitingNextAction'],
    data() {
        return {
            driveOut: false,
            fadeIn: true,
            videoSource: 1
        }
    },
    methods: {
        transform() {
            window.requestAnimationFrame(() => {
                if(Math.random() < 0.1) {
                    this.videoSource = Math.floor(Math.random() * 3) + 1
                }
                this.transform()
            })
        },
    },
    watch: {
        awaitingNextAction() {
            if(this.awaitingNextAction){
                this.fadeIn = false
                this.driveOut = true
                this.$emit('action-updated')
            }
        }
    }
}
</script>
<style>
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    .fadeIn {
        animation-name: 'fadeIn';
        animation-duration: 1s;
        animation-fill-mode: both;
    }
    @keyframes driveOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(50%);
            opacity: 0;
        }
    }
    .driveOut {
        animation-name: 'driveOut';
        animation-duration: 5s;
        animation-fill-mode: both;
        animation-timing-function: linear;
    }
</style>