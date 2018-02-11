import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const my_store = new Vuex.Store({
	state: {
		movie_to_add: {},
		movies : [
		{
			title: "L'étrange noël de M. Jack",
			year: 1994,
			language: "Multi",
			director: "Henry Selick",
			directorDate: "30 novembre 1952",
			genre: "Film d'animation, Film d'horreur, Film musical",
			synopsys: "Jack Skellington, un épouvantail squelettique surnommé « le Roi des citrouilles » (Pumpkin King en version originale), vit dans la ville d'Halloween. En tant que maître de l'épouvante, Jack occupe ses journées à préparer la prochaine fête d'Halloween."
		}, 
		{
			title: "Interstellar",
			year: 2014,
			language: "Multi",
			director: "Christopher Nolan",
			directorDate: "30 juillet 1970",
			genre: "Science-fiction",
			synopsys: "Alors que la Terre se meurt, une équipe d'astronautes franchit un trou de ver apparu près de Saturne conduisant à une autre galaxie, cela dans le but d'explorer un nouveau système stellaire et l'espoir de trouver une nouvelle planète habitable par l'humanité afin de la sauver."
		}
		]
	},
	mutations: {
		newMovie:state => {
            state.movies.push(state.movie_to_add);
            state.movie_to_add = {};
        }
	}
})