<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?">
            </div>
            <div class="column ">
                <div class="is-flex is-align-items-center is-justify-content-space-between">
                    <FormularioCronometro :timer="timer" />
                    <button class="button" @click="start">
                        <span class="icon">
                            <i class="fas fa-play"></i>
                        </span>
                        <span>play</span>
                    </button>
                    <button class="button" @click="stop">
                        <span class="icon">
                            <i class="fas fa-stop"></i>
                        </span>
                        <span>stop</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormularioCronometro from './FormularioCronometro.vue';

export default defineComponent({
    name: 'FormularioTarefa',
    components: {
        FormularioCronometro,
    },
    methods: {
        start(){
            if(!this.isRunning){
                this.isRunning = true;
                this.timerId = setInterval(() => {this.timer++}, 1000)
            }
        },
        stop(){
            this.isRunning = false;
            clearInterval(this.timerId)
        },
    },
    data(){
        return {
            timer: 0,
            isRunning: false,
            timerId: 0,
        }
    },
})
</script>

<style scoped></style>