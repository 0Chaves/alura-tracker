<template>
    <div>
        <CardTarefa />
        <CardTarefa />
        <CardTarefa />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardTarefa from './CardTarefa.vue';

export default defineComponent({
    name: 'ListaTarefas',
    components: {
        CardTarefa,
    },
    props:{
        tarefas: Array,
        setTarefas: Function, 
    }
})
</script>

<style scoped>
</style>