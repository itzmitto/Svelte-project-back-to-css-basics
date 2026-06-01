<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { basicSetup, EditorView } from 'codemirror';
  import { css } from '@codemirror/lang-css';
  import { oneDark } from '@codemirror/theme-one-dark';
  import { controlLookup, properties } from '$lib/properties';
  import type { DynamicControl } from '$lib/types';

  // the active property from the sidebar (default to first)
  let activeSlug = $state(properties[0].slug)
  let activeProperty = $derived(properties.find(p => p.slug === activeSlug)!)

  // source of truth
  let cssString = $state('border-radius: 12px;')

  // dynamically parsed controls
  let controls = $state<DynamicControl[]>([])

  // parse css string into dynamic controls whenever it changes
  $effect(() => {
    const lines = cssString.split('\n')
    const parsed: DynamicControl[] = []

    for (const line of lines) {
      const match = line.match(/^\s*([\w-]+)\s*:\s*(.+?);?\s*$/)
      if (!match) continue

      const [, property, rawValue] = match
      const config = controlLookup[property]
      if (!config) continue

      // parse the value back to the right type
      let value: number | string | boolean = rawValue.trim()
      if (config.type === 'slider') {
        value = parseFloat(rawValue) || (config.default as number)
      }

      parsed.push({ property, label: property, config, value })
    }

    controls = parsed
  })

  // when a control changes, update that line in the css string
  function onControlChange(property: string, newValue: number | string | boolean) {
    const config = controlLookup[property]
    const unit = config.unit ?? ''
    const newLine = `${property}: ${newValue}${unit};`

    cssString = cssString
      .split('\n')
      .map(line => {
        const match = line.match(/^\s*([\w-]+)\s*:/)
        return match?.[1] === property ? newLine : line
      })
      .join('\n')
    navigator.vibrate?.(10)
  }

  // when a property is selected from sidebar, set a default css line for it
  function selectProperty(slug: string) {
    activeSlug = slug
    const config = controlLookup[slug]
    if (!config) return
    const unit = config.type === 'slider' ? (config.unit ?? '') : ''
    cssString = `${slug}: ${config.default}${unit};`
  }

  /** @type {HTMLDivElement} */
  let editorElement: HTMLDivElement
  let view: EditorView

  onMount(() => {
    view = new EditorView({
      doc: cssString,
      extensions: [
        basicSetup,
        css(),
        oneDark,
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            cssString = view.state.doc.toString()
          }
        }),
      ],
      parent: editorElement,
    })
  })

  onDestroy(() => view?.destroy())

  // keep editor in sync when controls update cssString
  $effect(() => {
    if (view && view.state.doc.toString() !== cssString) {
      view.dispatch({
        changes: { from: 0, to: view.state.doc.length, insert: cssString }
      })
    }
  })
</script>

<div class="flex flex-col h-dvh">
  <header class="w-full h-16 bg-gray-200"></header>
  <main class="flex-1 flex overflow-hidden">

    <!-- sidebar -->
    <aside class="w-64 bg-gray-300 flex flex-col">
      <div class="h-12 bg-gray-500 border-y flex items-center px-3 font-medium text-sm">CSS Tutorial</div>
      {#each properties as property}
        <button
          onclick={() => selectProperty(property.slug)}
          class="h-12 border-b flex items-center px-3 text-sm text-left transition-colors
            {activeSlug === property.slug ? 'bg-gray-600 text-white' : 'hover:bg-gray-400'}"
        >
          {property.name}
        </button>
      {/each}
    </aside>

    <section class="flex-1 grid grid-rows-2 grid-cols-2 gap-8 p-8 overflow-auto">

      <!-- code editor -->
      <div class="bg-gray-200 rounded-md w-full h-full overflow-hidden flex flex-col">
        <h1 class="text-sm font-bold px-3 py-2 bg-gray-300 rounded-t-md">CSS</h1>
        <div bind:this={editorElement} class="flex-1 overflow-auto"></div>
      </div>

      <!-- live preview -->
      <div class="bg-gray-200 rounded-md w-full h-full flex flex-col">
        <h1 class="text-sm font-bold px-3 py-2 bg-gray-300 rounded-t-md">Preview</h1>
        <div class="flex-1 flex items-center justify-center">
          <div style={cssString} class="w-24 h-24 bg-blue-400"></div>
        </div>
      </div>

      <!-- dynamic controls -->
      <div class="bg-gray-200 rounded-md w-full h-full flex flex-col p-4 gap-3 overflow-auto">
        <h1 class="text-sm font-bold">Controls</h1>

        {#if controls.length === 0}
          <p class="text-sm text-gray-500">No recognised properties yet, start typing CSS above.</p>
        {/if}

        {#each controls as control}
          <div>
            <div class="flex justify-between mb-1">
              <span class="text-sm">{control.label}</span>
              <span class="text-sm text-gray-500">{control.value}{control.config.unit ?? ''}</span>
            </div>

            {#if control.config.type === 'slider'}
              <input
                type="range"
                min={control.config.min}
                max={control.config.max}
                step={control.config.step}
                value={control.value}
                oninput={(e) => onControlChange(control.property, e.currentTarget.value)}
                class="w-full"
              />

            {:else if control.config.type === 'color'}
              <input
                type="color"
                value={control.value}
                oninput={(e) => onControlChange(control.property, e.currentTarget.value)}
                class="w-full h-8 cursor-pointer"
              />

            {:else if control.config.type === 'select'}
              <select
                value={control.value}
                onchange={(e) => onControlChange(control.property, e.currentTarget.value)}
                class="w-full text-sm p-1 rounded"
              >
                {#each control.config.options ?? [] as option}
                  <option value={option}>{option}</option>
                {/each}
              </select>
            {/if}
          </div>
        {/each}
      </div>

      <!-- empty slot -->
      <div class="bg-gray-200 rounded-md w-full h-full"></div>

    </section>
  </main>
</div>