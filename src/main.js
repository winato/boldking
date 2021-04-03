import Vue from 'vue'
import App from './App.vue'
import VueToast from 'vue-toast-notification';

import 'vue-toast-notification/dist/theme-sugar.css';

require('./validations');

Vue.use(VueToast);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
