<script lang="ts">
	import { onMount } from 'svelte';
	import './layout.css';

	let { children } = $props();

	onMount(async () => {
		// dit is de service worker die er voor zorgt dat deze website / app offline gebruikt kan worden
		if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {

			// https://vite-pwa-org.netlify.app/frameworks/svelte.html
			const { registerSW } = await import('virtual:pwa-register');
			registerSW({
				immediate: true
			});
		}
	});
</script>

<svelte:head>
	<title>Back To Basics</title>
</svelte:head>

{@render children()}