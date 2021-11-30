<script>
	import "../app.css";
</script>

<slot />

<style lang="scss">
	:global(body) {
		background-image: url("/bg.jpg");
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
