<template>
    <div>
        <strong>{{ tempoFormatado }}</strong>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FormularioCronometro',
    props: {
        timer: {
            type: Number,
            default: 0,
        }
    },
    computed: {
        tempoFormatado(): string{
            return new Date(this.timer * 1000).toISOString().slice(11, 19);
        }
    }
})
</script>

<style></style>