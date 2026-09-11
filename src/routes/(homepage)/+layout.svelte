<script lang="ts">
	import cssData from '$lib/data/properties.json';
	import { goto } from '$app/navigation';
	let { children } = $props();

	let sidebarOpen = $state(false);

	function closeSidebar() {
		sidebarOpen = false;
	}

	function navigate(route: string) {
		goto(route);
		closeSidebar();
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') closeSidebar();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="h-dvh flex flex-col">
	<!-- Desktop header: hidden on mobile -->
	<header class="bg-gray-300 h-16 shadow-sm z-10 shrink-0 hidden md:block"></header>

	<!-- Mobile header: hidden on md+ -->
	<header class="bg-gray-300 h-14 shadow-sm z-10 shrink-0 flex md:hidden items-center px-2">
		<button
			onclick={() => (sidebarOpen = true)}
			aria-label="Open menu"
			aria-expanded={sidebarOpen}
			class="p-2 -ml-1 cursor-pointer"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</button>
		<span class="ml-2 text-sm font-bold">CSS Basics</span>
	</header>

	<div class="flex flex-1 overflow-hidden relative">

		<!-- Sidebar: hidden on mobile, shown statically on md+ -->
		<aside class="w-64 bg-gray-200 border-r border-gray-400 hidden md:flex flex-col overflow-hidden shrink-0">
			<button onclick={() => goto('/')} class="text-sm font-bold px-4 py-3 border-b border-gray-400 shadow-sm cursor-pointer">
				CSS Basics
			</button>
			<nav class="flex-1 overflow-y-auto">
				{#each cssData.categories as category, i}
					<div>
						<button
							class="w-full text-left px-4 py-2 text-sm font-semibold flex justify-between items-center hover:bg-gray-300 transition-colors cursor-pointer"
							onclick={() => goto(category.route)}
						>
							<span>{category.title}</span>
						</button>
					</div>
				{/each}
			</nav>
		</aside>

		<!-- Mobile backdrop -->
		{#if sidebarOpen}
			<button
				aria-label="Close menu"
				class="fixed inset-0 bg-black/40 z-20 md:hidden"
				onclick={closeSidebar}
			></button>
		{/if}

		<!-- Mobile sidebar drawer -->
		<aside
			class="fixed inset-y-0 left-0 w-64 bg-gray-200 border-r border-gray-400 flex flex-col overflow-hidden shrink-0 z-30 md:hidden transition-transform duration-200 ease-out {sidebarOpen ? 'translate-x-0' : '-translate-x-full'}"
		>
			<div class="flex items-center justify-between px-4 py-3 border-b border-gray-400 shadow-sm">
				<button onclick={() => navigate('/')} class="text-sm font-bold cursor-pointer">
					CSS Basics
				</button>
				<button onclick={closeSidebar} aria-label="Close menu" class="p-1 cursor-pointer">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<nav class="flex-1 overflow-y-auto">
				{#each cssData.categories as category, i}
					<div>
						<button
							class="w-full text-left px-4 py-2 text-sm font-semibold flex justify-between items-center hover:bg-gray-300 transition-colors cursor-pointer"
							onclick={() => navigate(category.route)}
						>
							<span>{(i + 1) + '. ' + category.title}</span>
						</button>
					</div>
				{/each}
			</nav>
		</aside>

		{@render children()}
	</div>
</div>