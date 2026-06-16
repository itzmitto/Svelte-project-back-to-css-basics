<script lang="ts">
	import { onMount } from 'svelte';
	import './layout.css';

	export const prerender = true;

	let { children } = $props();

	onMount(async () => {
		// Double check we are explicitly in a secure browser context
		if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
			const { registerSW } = await import('virtual:pwa-register');
			registerSW({
				immediate: true,
				onOfflineReady() {
					console.log('Success! Your CSS Editor works offline!');
				}
			});
		}
	});
</script>

<svelte:head>
	<title>Back To Basics</title>
</svelte:head>

{@render children()}