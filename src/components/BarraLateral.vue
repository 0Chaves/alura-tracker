<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="">
        </h1>
        <button class="button" @click="toggleDarkMode">
            <div v-if="darkMode">
                <i class="fas fa-sun icon"></i>
                <span> {{ textoBotao }}</span>
            </div>
            <div v-else>
                <i class="fas fa-moon icon"></i>
                <span> {{ textoBotao }}</span>
            </div>
        </button>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BarraLateral',
    emits: ['onDarkMode'],
    data() {
        return {
            darkMode: false
        }
    },
    computed: {
        textoBotao(){
            if(this.darkMode) return "Desativar Dark Mode"
            return "Ativar Dark Mode"
        }
    },
    methods: {
        toggleDarkMode(){
            this.darkMode = !this.darkMode
            this.$emit('onDarkMode', this.darkMode)
        }
    },
})
</script>
<style scoped>
    header {
        padding: 1rem;
        background: #0d3b66;
        width: 100%;
        height: 100vh;
        text-align: center;
    }

    @media only screen and (max-width: 768px) {
        header{
            padding: 2.5rem;
            height: auto;
        }
    }
</style>