<template>
	<div>
		Search : <input type="text" v-model="search" /><br>
		<router-link :to="{ name: 'add' }">+ Add</router-link>
		<ul>
			<li v-for="(movie, index) in movies_search" v-bind:key="movie.title" v-bind:title="message">
				<b>{{movie.title}} ({{movie.year}})</b><br />
				<router-link :to="{ name: 'info', params: { id: index } }">+ Info</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			search: "",
		}
	},
	computed: {
		movies_search: function() {
			return this.$store.state.movies.filter(m => m.title.indexOf(this.search)!=-1);
		}
	}
}
</script>

<style>

</style>