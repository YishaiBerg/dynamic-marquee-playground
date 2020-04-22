<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">Dynamic Marquee</div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/YishaiBerg/vue-dynamic-marquee" target="_blank" text>
        <v-icon>mdi-github</v-icon>
        <!-- <span class="mr-2">Latest Release</span> -->
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <v-row>
          <v-col cols="12" lg="6">
            <controls
              :elNum="elNum"
              :width="wrapperWidth"
              :height="wrapperHeight"
              @change-elnum="changeElNum"
              @change-wrapper-height="wrapperHeight += $event"
              @change-wrapper-width="wrapperWidth += $event"
            />
          </v-col>
          <v-col cols="12" lg="6">
            <Marquee :elNum="elNum" :wrapperHeight="wrapperHeight" :wrapperWidth="wrapperWidth" />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Marquee from "./components/Marquee.vue";
import Controls from "./components/Controls.vue";
export default Vue.extend({
  name: "App",

  components: {
    HelloWorld,
    Marquee,
    Controls
  },

  data: () => ({
    elNum: 1,
    wrapperHeight: 40,
    wrapperWidth: 25
  }),

  methods: {
    changeElNum(num: number) {
      if (this.elNum + num > 0) {
        this.elNum += num;
      }
    }
  }
});
</script>
