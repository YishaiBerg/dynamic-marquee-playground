<template>
  <div>
    <v-card color="cyan"><v-card-title>Dimensions:</v-card-title></v-card>
    <el-num :elNum="elNum" @change-elnum="$emit('change-elnum', $event)" />
    <wrapper-dimension
      :width="width"
      :height="height"
      @change-width="$emit('change-wrapper-width', $event)"
      @change-height="$emit('change-wrapper-height', $event)"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ElNum from "./ElNum.vue";
import WrapperDimension from "./WrapperDimension.vue";

export default Vue.extend({
  name: "controls",
  components: {
    ElNum,
    WrapperDimension
  },
  props: {
    elNum: {
      type: Number,
      default: 1
    },
    width: {
      type: Number,
      default: 25
    },
    height: {
      type: Number,
      default: 40
    }
  }
});
</script>
