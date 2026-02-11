<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <FormularioTarefa @onStop="salvarTarefa"/>
      <div class="lista">
        <CardTarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
      </div>
    </div>

  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioTarefa from './components/FormularioTarefa.vue';
import ListaTarefas from './components/ListaTarefas.vue';
import Tarefa from './interfaces/Tarefa';
import CardTarefa from './components/CardTarefa.vue';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    FormularioTarefa,
    CardTarefa
  },
  data(){
    return{
      tarefas: [] as Tarefa[]
    }
  },
  methods: {
    salvarTarefa (tarefa: Tarefa) {
      this.tarefas.push(tarefa)
    }
  }
});
</script>

<style>
.lista{
  padding: 2rem;
}
</style>
