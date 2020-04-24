<template>
  <div>
      <div class="d-flex justify-content-center">
        <v-radio-group :value="direction" @change="$emit('change-direction', $event)">
          <v-radio label="column" value="column"></v-radio>
          <v-radio label="row" value="row"></v-radio>
        </v-radio-group>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'direction',
  props: {
    direction: {
      type: String,
      default: 'column',
    },
  },
});
</script>

<style scoped>
</style>