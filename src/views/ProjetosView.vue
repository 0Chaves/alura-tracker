<template>
    <section class="projetos">
        <h1 class="title">Projetos</h1>
        <form @submit.prevent="salvarProjeto">
            <div class="field">
                <label for="nomeDoProjeto" class="label">Nome do projeto</label>
                <input type="text" class="input" v-model="nomeDoProjeto">
            </div>
            <div class="field">
                <button class="button" type="submit">Salvar</button>
            </div>
        </form>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <td>{{ projeto.id }}</td>
                    <td>{{ projeto.nome }}</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts">
import Projeto from '@/interfaces/Projeto';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ProjetosView',
    data(){
        return{
            projetos:[] as Projeto[],
            nomeDoProjeto: '',
            id: 1,
        }
    },
    methods:{
        salvarProjeto(){
            if(this.nomeDoProjeto){
                const projeto : Projeto = {
                    id: this.id++,
                    nome: this.nomeDoProjeto
                }
                this.projetos.push(projeto)
                this.nomeDoProjeto = ''
            }
        }
    }
})

</script>

<style scoped>
.projetos{
    padding: 1.25rem;
}
</style>