<script lang="ts">
  import cssData from '$lib/data/properties.json';

  let { children } = $props();
  let openCategories = $state<Set<number>>(new Set());

  function toggleCategory(index: number) {
    if (openCategories.has(index)) {
      openCategories.delete(index);
    } else {
      openCategories.add(index);
    }    openCategories = new Set(openCategories);
  }
</script>

<div class="h-dvh flex flex-col">
  <header class="bg-gray-300 h-16 shadow-sm z-10"></header>
  <div class="flex flex-1 overflow-hidden">

    <aside class="w-64 bg-gray-200 border-r border-gray-400 flex flex-col overflow-hidden">
      <h1 class="text-sm font-bold px-4 py-3 border-b border-gray-400 shadow-sm">
        CSS Basics
      </h1>
      <nav class="flex-1 overflow-y-auto">
        {#each cssData.categories as category, i}
          <div>
            <button
              onclick={() => toggleCategory(i)}
              class="w-full text-left px-4 py-2 text-sm font-semibold flex justify-between items-center hover:bg-gray-300 transition-colors"
            >
              <span>{category.title}</span>
              <span class="text-gray-500 text-xs">{openCategories.has(i) ? '▲' : '▼'}</span>
            </button>

            {#if openCategories.has(i)}
              <ul class="bg-gray-100">
                {#each category.properties as property}
                  <li>
                    <button
                      class="w-full text-left px-6 py-1.5 text-xs font-mono hover:bg-gray-300 hover:translate-x-1 transition-all"
                    >
                      {property}
                    </button>
                  </li>
                {/each}
              </ul>
            {/if}
          </div>
        {/each}
      </nav>
    </aside>

    {@render children()}
  </div>
</div>