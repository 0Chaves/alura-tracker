<template>
    <div class="box has-text-weight-bold has-text-black">
        <div class="columns">
            <div class="column is-7">
                <span>{{tarefa.descricao}}</span>
            </div>
            <div class="column ">
                <FormularioCronometro :timer='tarefa.duracao' textColor="black"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import FormularioCronometro from './FormularioCronometro.vue';
import Tarefa from '@/interfaces/Tarefa';

export default defineComponent({
    name: 'CardTarefa',
    props: {
        tarefa: {
            type: Object as PropType<Tarefa>,
            required: true
        }
    },
    components: {
        FormularioCronometro
    }
})
</script>

<style scoped>
.box {
    background: #FAF0CA;
}
</style>