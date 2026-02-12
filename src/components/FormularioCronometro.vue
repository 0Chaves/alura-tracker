<template>
    <div class="display">
        <strong :class="color">{{ tempoFormatado }}</strong>
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
        },
        textColor: {
            type: String,
            default: '',
        }
    },
    computed: {
        tempoFormatado(): string{
            return new Date(this.timer * 1000).toISOString().slice(11, 19);
        },
        color(): string{
            if(this.textColor === "black") return "has-text-black"
            return ''
        }
    }
})
</script>

<style scoped>
.display{
    color: var(--text-primary);
}
</style>