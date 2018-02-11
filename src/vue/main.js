import Vue from 'vue' //librairie "vue" dans node_modules
import VueRouter from 'vue-router' //librairie "vue-router" dans node_modules

import app from './app.vue' //fichier app.vue local
import router from './routes.js' //fichier router.js local
import {my_store} from './store.js'


Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(app),
  store: my_store,
  router
})