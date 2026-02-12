<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input v-model="descricao" type="text" class="input" placeholder="Qual tarefa você deseja iniciar?">
            </div>
            <div class="column ">
                <FormularioTemporizador @onStop="finalizarTarefa" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormularioTemporizador from './FormularioTemporizador.vue';

export default defineComponent({
    name: 'FormularioTarefa',
    emits: ['onStop'],
    components: {
        FormularioTemporizador,
    },
    data() {
        return {
            descricao: ''
        }
    },
    methods: {
        finalizarTarefa(duracao: number): void {
            this.$emit('onStop', {
                duracao: duracao,
                descricao: this.descricao
            })
            this.descricao = ''
        }
    }
})
</script>

<style>
.formulario{
    color: var(--text-primary);
    background-color: var(--bg-primary);
}
</style>