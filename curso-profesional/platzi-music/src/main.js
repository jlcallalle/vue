import Vue from 'vue'
import App from './App.vue'
import {ServerTable, ClientTable, Event} from 'vue-tables-2';

import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(ClientTable, {}, false, 'bootstrap3')



new Vue({
  el: '#app',
  render: h => h(App)
})

console.log('hola')