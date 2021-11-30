<script lang="ts" context="module">
	let index = 0;
</script>

<script lang="ts">
	import { openIndex, prevIndex } from "$lib/stores";
	import { fly } from "svelte/transition";

	let thisIndex = index++;

	export let title: string = "Title";
</script>

{#if thisIndex === $openIndex}
	<div
		in:fly={{ x: $prevIndex < thisIndex ? 100 : -100 }}
		class="bg-cardBg rounded-md md:min-h-3/4 min-h-1/2 p-5 pt-2 md:w-3/6 w-4/5 break-words flex justify-top flex-col items-center"
	>
		<h1 class="font-bold text-4xl">{title}</h1>
		<hr class="w-11/12 border-hrColor mt-2" />
		<div class="mt-3 w-full">
			<slot />
		</div>
	</div>
{/if}
