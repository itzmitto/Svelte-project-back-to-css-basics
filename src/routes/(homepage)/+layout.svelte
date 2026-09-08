<script lang="ts">
	import cssData from '$lib/data/properties.json';
	import { goto } from '$app/navigation';
	let { children } = $props();
</script>

<div class="h-dvh flex flex-col">
	<header class="bg-gray-300 h-16 shadow-sm z-10 shrink-0 hidden md:visible"></header>

	<div class="flex flex-1 overflow-hidden">

		<!-- Sidebar: hidden on mobile, shown on md+ -->
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

		{@render children()}
	</div>
</div>