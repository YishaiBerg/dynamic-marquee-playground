import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
// import DynamicMarquee from 'vue-dynamic-marquee';
import DynamicMarquee from './dydemo/DynamicMarquee';

Vue.config.productionTip = false;

Vue.component('dynamic-marquee', DynamicMarquee)

new Vue({
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
