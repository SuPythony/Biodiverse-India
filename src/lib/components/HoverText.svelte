<script lang="ts">
	let hovering = false;

	export let text: string;
	export let width = "auto";
</script>

<div class="relative inline-block cursor-pointer">
	<div
		style="width: {width};"
		class="{hovering
			? 'visible'
			: 'hidden'} bg-red-600 text-center rounded-md p-3 absolute z-1 bottom-125% -ml-50%"
	>
		<b><slot /></b>
	</div>
	<p
		on:mouseover={() => (hovering = true)}
		on:focus={() => (hovering = true)}
		on:mouseout={() => (hovering = false)}
		on:blur={() => (hovering = false)}
		class="no-underline border-b-2 border-dotted border-text"
	>
		{text}
	</p>
</div>
