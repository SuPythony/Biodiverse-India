<script lang="ts">
	import FaChevronDown from "svelte-icons/fa/FaChevronDown.svelte";
	import { slide } from "svelte/transition";
	import { openIndex, answers } from "$lib/stores";
	import { toast } from "@zerodevx/svelte-toast";
	import { onMount } from "svelte";

	let open = false;
	let thisAnswer;

	onMount(() => {
		thisAnswer = $answers[questionId];
		answers.subscribe((val) => (thisAnswer = val[questionId]));
	});

	function answered(option) {
		let temp = $answers;
		temp[questionId] = option;
		$answers = temp;
		if (option === correctOption) {
			toast.push("Correct Answer!", {
				theme: {
					"--toastBackground": "#48BB78",
					"--toastBarBackground": "#2F855A",
				},
			});
		} else {
			toast.push("Oops, wrong answer!", {
				theme: {
					"--toastBackground": "#F56565",
					"--toastBarBackground": "#C53030",
				},
			});
		}
	}

	export let question: string;
	export let slideIndex: number;
	export let correctOption: number;
	export let questionId: number;
</script>

<div
	class="flex justify-between items-center mb-3 hover:cursor-pointer border-b-2 border-hrColor"
	on:click={() => {
		open = !open;
	}}
>
	<h2 class="font-bold text-2xl">{question}</h2>
	<div class="w-4 h-4 transition-all duration-300 {open ? 'rotate-180' : ''}">
		<FaChevronDown />
	</div>
</div>

{#if open}
	<div in:slide out:slide={{ duration: $openIndex === slideIndex ? 400 : 0 }} class="px-3">
		<div class="flex justify-center mb-2">
			<slot name="image" />
		</div>
		<div class="flex justify-between items-center mb-2">
			<div
				class="option"
				on:click={() => {
					if (!thisAnswer) {
						answered(1);
					}
				}}
				class:disabled={thisAnswer}
				id={thisAnswer && correctOption === 1
					? "correct"
					: correctOption !== 1 && thisAnswer === 1
					? "wrong"
					: ""}
			>
				<slot name="option1" />
			</div>
			<div
				class="option"
				on:click={() => {
					if (!thisAnswer) {
						answered(2);
					}
				}}
				class:disabled={thisAnswer}
				id={thisAnswer && correctOption === 2
					? "correct"
					: correctOption !== 2 && thisAnswer === 2
					? "wrong"
					: ""}
			>
				<slot name="option2" />
			</div>
		</div>
		<div class="flex justify-between items-center">
			<div
				class="option"
				on:click={() => {
					if (!thisAnswer) {
						answered(3);
					}
				}}
				class:disabled={thisAnswer}
				id={thisAnswer && correctOption === 3
					? "correct"
					: correctOption !== 3 && thisAnswer === 3
					? "wrong"
					: ""}
			>
				<slot name="option3" />
			</div>
			<div
				class="option"
				on:click={() => {
					if (!thisAnswer) {
						answered(4);
					}
				}}
				class:disabled={thisAnswer}
				id={thisAnswer && correctOption === 4
					? "correct"
					: correctOption !== 4 && thisAnswer === 4
					? "wrong"
					: ""}
			>
				<slot name="option4" />
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.option {
		@apply flex items-center gap-2 text-base border-hrColor border-2 p-1 min-w-35% rounded-md hover:cursor-pointer hover:bg-purple-300 hover:bg-opacity-40 transition-all;
	}

	.disabled {
		@apply hover:cursor-not-allowed hover:bg-transparent hover:bg-opacity-100;
	}

	#correct {
		@apply bg-green-400;
	}

	#wrong {
		@apply bg-red-600;
	}
</style>
