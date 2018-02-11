<template>
        <!--<p id="msg">{{test}}</p>-->
        <router-view></router-view>
</template>

<script>

export default {
	/*components: {
		"movie-item": import home from components/
	}*/
    data() {
        return {
            test: this.$store.state.message
        }
    },
    computed: {
        message() {
            return this.$store.state.message;
        }
    }
}
</script>

<style>
#msg {
  color: red;
}
</style>

