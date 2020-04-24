<template>
  <num-input label="Elements in slot" :value="elNum" @change-num="$emit('change-elnum', $event)" />
</template>

<script lang="ts">
import Vue from 'vue';
import NumInput from './NumInput.vue';

export default Vue.extend({
  name: 'el-num',
  components: {
    NumInput,
  },
  props: {
    elNum: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {};
  },
});
</script>

<style scoped>
</style>