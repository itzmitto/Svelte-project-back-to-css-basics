<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="h-dvh flex flex-col">
	<header class="bg-gray-300 h-16 shadow-sm z-10"></header>
	<div class="flex h-full">
		<aside class="min-w-64 w-fit max-w-96 bg-gray-300"></aside>
		{@render children()}
	</div>
</div>

