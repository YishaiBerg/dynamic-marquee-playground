<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on }">
          <v-btn color="purple darken-1" dark v-on="on">Installation and Usage</v-btn>
        </template>
        <v-card class="prism-comp">
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Installation and Usage</v-toolbar-title>
          </v-toolbar>
          <v-row justify="center">
            <blockquote class="blockquote">Install from npm</blockquote>
          </v-row>
          <v-row justify="center">
            <prism>{{texts.npm}}</prism>
          </v-row>
          <v-row justify="center">
            <blockquote class="blockquote">Or pull from CDN</blockquote>
          </v-row>
          <v-row justify="center">
            <prism language="html">{{texts.cdn}}</prism>
          </v-row>
          <v-row justify="center">
            <blockquote class="blockquote">Register component globally</blockquote>
          </v-row>
          <v-row justify="center">
            <prism language="javascript">{{texts.global}}</prism>
          </v-row>
          <v-row justify="center">
            <blockquote class="blockquote">Or import locally</blockquote>
          </v-row>
          <v-row justify="center">
            <prism language="html">{{texts.local}}</prism>
          </v-row>
                    <v-row justify="center">
            <blockquote class="blockquote">The slot contents will translate across the component's immediate wrapper. Take note that since the slot will be absolutly positioned, the wrapper's width and height cannot rely on the contents.</blockquote>
          </v-row>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// @ts-ignore
import Prism from 'vue-prism-component';

export default Vue.extend({
  name: 'install',
  components: {
    Prism,
  },
  data() {
    return {
      dialog: false,
      texts: {
        npm: `yarn add vue-dynamic-marquee \n // or \n npm i vue-dynamic-marquee`,
        cdn: `\<script src="https://cdn.jsdelivr.net/npm/vue-dynamic-marquee@0.x/dist/vue-dynamic-marquee.umd.min.js"\>\<\/script\>
\<script\>
    Vue.component('dynamic-marquee', window['vue-dynamic-marquee'])
\<\/script\>`,
        global: `//in main.js
    import DynamicMarquee from 'vue-dynamic-marquee';
    Vue.component('dynamic-marquee', DynamicMarquee);`,
        local: `\<template\>
    \<div\>
	    \<dynamic-marquee\>
	        \<!--your content to be animated--\>
	    \<\/dynamic-marquee\>
    \<\/div\>
\</template\>
\<script\>
import DynamicMarquee from 'vue-dynamic-marquee';
\<\/script\>`,
      },
    };
  },
});
</script>

<style>
.prism-comp code {
  box-shadow: none !important;
}
</style>