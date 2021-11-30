<script lang="ts">
	import { openIndex, prevIndex } from "$lib/stores";
	import FaChevronLeft from "svelte-icons/fa/FaChevronLeft.svelte";
	import FaChevronRight from "svelte-icons/fa/FaChevronRight.svelte";
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	export let noOfCards = 0;
</script>

<div class="flex items-center justify-center w-full h-screen">
	<div
		class="change-button"
		class:disabled={$openIndex === 0}
		on:click={() => {
			dispatch("previous");
			if ($openIndex !== 0) {
				$prevIndex = $openIndex;
				$openIndex -= 1;
			}
		}}
	>
		<div class="w-5 h-5">
			<FaChevronLeft />
		</div>
	</div>
	<slot />
	<div
		class="change-button"
		class:disabled={$openIndex === noOfCards - 1}
		on:click={() => {
			dispatch("next");
			if ($openIndex !== noOfCards - 1) {
				$prevIndex = $openIndex;
				$openIndex += 1;
			}
		}}
	>
		<div class="w-5 h-5">
			<FaChevronRight />
		</div>
	</div>
</div>

<style lang="scss">
	.change-button {
		@apply h-52 md:h-3/4 w-8 flex justify-center items-center bg-gray-300 opacity-75 hover:opacity-100 hover:cursor-pointer transition-all duration-300 rounded-md;
	}

	.disabled {
		opacity: 0.25;
		&:hover {
			opacity: 0.25;
			cursor: not-allowed;
		}
	}
</style>
