<template>
	<div>
		{{movie}}
		<p>coucou</p>
	</div>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	computed: {
		movie: function() {
			return this.$store.state.movies[$route.params.id];
		}
	}
}
</script>

<style>

</style>