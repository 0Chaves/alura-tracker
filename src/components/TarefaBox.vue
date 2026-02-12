<template>
    <div class="box has-text-weight-bold has-text-black">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TarefaBox',

})

</script>

<style scoped>
.box {
    background: #FAF0CA;
}
</style>