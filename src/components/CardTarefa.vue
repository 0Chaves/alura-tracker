<template>
    <TarefaBox>
        <div class="columns">
            <div class="column is-7">
                <span>{{tarefa.descricao || 'Tarefa sem descrição' }}</span>
            </div>
            <div class="column ">
                <FormularioCronometro :timer='tarefa.duracao' textColor="black"/>
            </div>
        </div>
    </TarefaBox>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import FormularioCronometro from './FormularioCronometro.vue';
import Tarefa from '@/interfaces/Tarefa';
import TarefaBox from './TarefaBox.vue';

export default defineComponent({
    name: 'CardTarefa',
    props: {
        tarefa: {
            type: Object as PropType<Tarefa>,
            required: true
        }
    },
    components: {
        FormularioCronometro,
        TarefaBox
    }
})
</script>

<style scoped>
.box {
    background: #FAF0CA;
}
</style>