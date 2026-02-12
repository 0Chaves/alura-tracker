<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': darkMode}">
    <div class="column is-one-quarter">
      <BarraLateral @onDarkMode="toggleDarkMode"/>
    </div>
    <div class="column is-three-quarter conteudo">
      <FormularioTarefa @onStop="salvarTarefa"/>
      <div class="lista">
        <TarefaBox v-if="listaVazia">
          <span>Você não tem nada produzido hoje</span>
        </TarefaBox>
        <CardTarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioTarefa from './components/FormularioTarefa.vue';
import Tarefa from './interfaces/Tarefa';
import CardTarefa from './components/CardTarefa.vue';
import TarefaBox from './components/TarefaBox.vue';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    FormularioTarefa,
    TarefaBox,
    CardTarefa,
  },
  data(){
    return{
      tarefas: [] as Tarefa[],
      darkMode: false
    }
  },
  methods: {
    salvarTarefa (tarefa: Tarefa) {
      this.tarefas.push(tarefa)
    },
    toggleDarkMode(darkMode: boolean){
      this.darkMode = darkMode
    }
  },
  computed: {
    listaVazia () : boolean {
      return this.tarefas.length === 0
    }
  }
});
</script>

<style>
.lista{
  padding: 2rem;
}
main {
  --bg-primary: #fff;
  --text-primary: #000;
}
main.modo-escuro{
  --bg-primary: #2b2d42;
  --text-primary: #ddd;
}
.conteudo{
  background-color: var(--bg-primary);
}
</style>
