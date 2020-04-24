<template>
  <v-row>
    <v-col cols="6">
      <div class="d-flex justify-space-between">
        <div class>{{label}}:</div>
        <div class="d-flex align-center justify-space-between num-controls">
          <v-btn
            fab
            x-small
            :disabled="value === 1"
            @click="$emit('change-num', -1)"
            color="error"
            class="mx-3"
          >
            <h1>-</h1>
          </v-btn>
          <div>{{value}}</div>
          <v-btn fab x-small @click="$emit('change-num', 1)" color="success" class="mx-3">
            <h1>+</h1>
          </v-btn>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'num-input',
  props: {
    value: {
      type: Number,
      default: 1,
    },
    label: String,
  },
});
</script>

<style scoped>
.num-controls {
  width: 130px;
}
</style>