<template>
    <FormularioTarefa @onStop="salvarTarefa"/>
    <div class="lista">
        <TarefaBox v-if="listaVazia">
            <span>Você não tem nada produzido hoje</span>
        </TarefaBox>
        <CardTarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormularioTarefa from '@/components/FormularioTarefa.vue';
import TarefaBox from '@/components/TarefaBox.vue';
import CardTarefa from '@/components/CardTarefa.vue';
import Tarefa from '@/interfaces/Tarefa'


export default defineComponent({
    name: 'TarefasView',
    components: {
        FormularioTarefa,
        TarefaBox,
        CardTarefa,
    },
    data(){
        return{
            tarefas: [] as Tarefa[],
        }
    },
    methods:{
        salvarTarefa (tarefa: Tarefa) {
            this.tarefas.push(tarefa)
        },
    },
    computed: {
        listaVazia () : boolean {
            return this.tarefas.length === 0
        }
    }
})
</script>