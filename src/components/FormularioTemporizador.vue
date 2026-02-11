<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <FormularioCronometro :timer="timer"/>
        <button class="button" @click="start" :disabled="isRunning">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
        </button>
        <button class="button" @click="stop" :disabled="!isRunning">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormularioCronometro from './FormularioCronometro.vue';

export default defineComponent({
    name: 'FormularioTemporizador',
    emits: ['onStop'],
    components: {
        FormularioCronometro,
    },
    data() {
        return{
            timer: 0,
            isRunning: false,
            timerId: 0,
        }
    },
    methods:{
        start(){
            if(!this.isRunning){
                this.isRunning = true;
                this.timerId = setInterval(() => {this.timer++}, 1000)
            }
        },
        stop(){
            this.isRunning = false;
            this.$emit("onStop", this.timer)
            clearInterval(this.timerId)
            this.timer = 0
        },
    }
})
</script>