<template>
  <div class>
    <v-card
      elevation="24"
      class="pa-3 wrapper"
      :style="{height: wrapperHeight + 'vh', width: wrapperWidth + 'vw'}"
    >
      <dynamic-marquee 
      :direction="direction"
      :reverse="reverse"
      :repeat="repeat"
      :speed="speed"
      :pause="pause"
      :hoverPause="hoverPause"
      :repeatMargin="repeatMargin"
      >
        <div class="marquee-wrapper" :class="{'flex-column': direction === 'column'}">
          <v-card
            v-for="i in elNum"
            :key="i"
            color="primary"
            dark
            class="pa-3 ma-3 text-center"
          >Element {{i}}</v-card>
        </div>
      </dynamic-marquee>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// import DynamicMarquee from "vue-dynamic-marquee";
import HelloWorld from './HelloWorld.vue';
export default Vue.extend({
  name: 'marquee',
  components: {
    // DynamicMarquee,
    // HelloWorld
  },
  props: {
    elNum: {
      type: Number,
      default: 1,
    },
    wrapperHeight: {
      type: Number,
      default: 40,
    },
    wrapperWidth: {
      type: Number,
      default: 25,
    },
    speed: {
      type: Object,
      default() {
        return {
          type: 'pps',
          number: 100,
        };
      },
      validator(val) {
        return (
          val.type &&
          ['pps', 'duration'].includes(val.type) &&
          val.number &&
          !isNaN(val.number)
        );
      },
    },
    repeat: {
      type: Boolean,
      default: true,
    },
    repeatMargin: {
      type: Number,
      default: 10,
    },
    hoverPause: {
      type: Boolean,
      default: true,
    },
    pause: {
      type: Boolean,
      default: false,
    },
    direction: {
      type: String,
      default: 'column',
      validator(val) {
        return ['column', 'row'].includes(val);
      },
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
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