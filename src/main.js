import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Vue from 'vue'
import App from './App.vue'

import vueCarousel from 'vue-carousel'

Vue.use(vueCarousel);
import * as VueGoogleMaps from 'vue2-google-maps'
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAVTiOGWzny23-DQzMV3joGxccjZ83QmYI',
    libraries: 'places',
  }
});


import '@/plugins/apexcharts'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
