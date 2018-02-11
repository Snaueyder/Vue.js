<template>
	<div>
		<b>New movie: </b><br><br>
		Title : <input type="text" v-model="movie_to_add.title" /><br />
		Year : <input type="text" v-model="movie_to_add.year" /><br />
		Language: <input type="text" v-model="movie_to_add.language" /><br />
		Director: <input type="text" v-model="movie_to_add.director" /><br />
		Date of birth of the director: <input type="text" v-model="movie_to_add.directorDate" /><br />
		Genre: <input type="text" v-model="movie_to_add.genre" /><br />
		Synopsis : <textarea v-model="movie_to_add.synopsys"></textarea><br />
		<router-link to="/"><button v-on:click="newMovie">Add</button></router-link>
		
	</div>
</template>

<script>
export default {
	data() {
		return {
			movie_to_add: this.$store.state.movie_to_add
		}
	},
	methods: {
		newMovie: function(){
			this.$store.commit('newMovie');
		}
	}
}
</script>

<style>

</style>