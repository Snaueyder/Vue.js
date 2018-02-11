import VueRouter from 'vue-router' //librairie "vue-router" dans node_modules

import accueil from './components/accueil.vue' //fichier app.vue local
import info from './components/info.vue'
import add from './components/add.vue'
import edit from './components/edit.vue'

const routes = [
{ path: '/', component: accueil },
{ path: '/movie/add', name: 'add', component: add },
{ path: '/movie/:id', name: 'info', component: info },
{ path: '/movie/:id/edit', name: 'edit', component: edit }
]

const router = new VueRouter({
	routes
})

export default router  

