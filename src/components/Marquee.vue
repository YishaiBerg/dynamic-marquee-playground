<template>
  <div class>
    <v-card elevation="24" class="pa-3 wrapper" :style="{height: wrapperHeight + 'vh', width: wrapperWidth + 'vw'}">
      <dynamic-marquee direction="row">
        <div class="marquee-wrapper">
          <v-card v-for="i in elNum" :key="i" color="primary" dark class="pa-3 ma-3">Element {{i}}</v-card>
        </div>
      </dynamic-marquee>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import DynamicMarquee from "vue-dynamic-marquee";
import HelloWorld from "./HelloWorld.vue";
export default Vue.extend({
  name: "marquee",
  components: {
    // DynamicMarquee,
    // HelloWorld
  },
  props: {
    elNum: {
      type: Number,
      default: 1
    },
    wrapperHeight: {
      type: Number,
      default: 40
    },
    wrapperWidth: {
      type: Number,
      default: 25
    }
  }
});
</script>

<style scoped>
.wrapper {
  margin: 7vh auto 0;
}

.marquee-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>