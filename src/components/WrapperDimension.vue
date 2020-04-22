<template>
    <div>
        <num-input :value="height" @change-num="$emit('change-height', $event)" label="Wrapper height in vh"/>
        <num-input :value="width" @change-num="$emit('change-width', $event)" label="Wrapper width in vw"/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import NumInput from './NumInput.vue';

    export default Vue.extend({
        name: "wrapper-dimension",
        components: {
            NumInput
        },
        props: {
            width: {
                type: Number,
                default: 25
            },
            height: {
                type: Number,
                default: 40
            }
        },
    })
</script>

<style scoped>

</style>