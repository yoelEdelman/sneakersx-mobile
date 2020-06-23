import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';


import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';

import Vuelidate from 'vuelidate'
import VueToastr from '@deveodk/vue-toastr'
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'


Vue.use(Ionic);
Vue.use(VueAxios, axios);
Vue.use(require('vue-moment'));
Vue.use(Vuelidate)
Vue.use(VueToastr, {
  defaultPosition: 'toast-top-center',
  defaultType: 'info',
  defaultTimeout: 4000
})


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');