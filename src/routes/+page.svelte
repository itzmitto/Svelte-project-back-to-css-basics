<script lang="ts">
  import { basicSetup, EditorView } from 'codemirror';
  import { css } from '@codemirror/lang-css';
  import { oneDark } from '@codemirror/theme-one-dark';
  import { onDestroy, onMount } from 'svelte';
  import { type ControlGroup, parseDeclaration } from '$lib/parser';

  let cssString = $state('border-radius: 12px;\nbackground-color: red;');

  /** @type {HTMLDivElement} */
  let editorElement: HTMLDivElement;
  let view: EditorView;

  onMount(() => {
    view = new EditorView({
      doc: cssString,
      extensions: [
        basicSetup,
        css(),
        oneDark,
        EditorView.updateListener.of((update) => {
          // Only update if the user manually typed it
          if (update.docChanged && update.transactions.some(tr => tr.isUserEvent('input') || tr.isUserEvent('delete'))) {
            cssString = view.state.doc.toString();
          }
        }),
      ],
      parent: editorElement,
    });
  });

  onDestroy(() => view?.destroy());

  const controls = $derived.by((): ControlGroup[] => {
    const lines = cssString.split('\n');
    const result = [];

    for (const line of lines) {
      const match = line.match(/^\s*([\w-]+):\s*([^;]*);?$/);
      if (match) {
        const [, property, value] = match;
        result.push(parseDeclaration(property, value));
      }
    }

    return result;
  });

  // Function to sync UI changes back to CodeMirror
  function updateCSSFromControl(property: string, newValue: string | number, unit: string = '') {
    const replacement = newValue === '' ? '' : `${newValue}${unit}`;
    const regex = new RegExp(`(${property}:\\s*)([^;]*)(;?)`, 'i');
    cssString = cssString.replace(regex, `$1${replacement}$3`);

    if (view) {
      view.dispatch({
        changes: { from: 0, to: view.state.doc.length, insert: cssString }
      });
    }
  }
</script>

<main class="flex flex-col w-dvw p-8 gap-8 overflow-y-auto">
  <div class="grid grid-rows-2 grid-cols-2 gap-8 min-h-full">
    <div class="bg-gray-300 w-full h-full rounded-md overflow-hidden flex flex-col">
      <h1 class="text-sm font-bold shadow-sm px-2 py-1">Code</h1>
      <div bind:this={editorElement} class="flex-1 overflow-auto [&>.cm-editor]:h-full"></div>
    </div>

    <div class="bg-gray-300 w-full h-full rounded-md overflow-hidden flex flex-col row-span-2">
      <h1 class="text-sm font-bold shadow-sm px-2 py-1">Preview</h1>
      <div class="flex-1 flex justify-center items-center">
        <div style={cssString} class="size-32 bg-green-500 text-center">
          Hello World!
        </div>
      </div>
    </div>

    <div class="bg-gray-300 w-full h-full rounded-md overflow-hidden flex flex-col">
      <h1 class="text-sm font-bold shadow-sm px-2 py-1">Controls</h1>
      <div class="flex-1 overflow-y-auto p-4 space-y-4">
        {#each controls as group}
          <div class="space-y-2">
            <h3 class="text-sm font-bold border-b border-gray-400 pb-1">{group.label}</h3>

            {#each group.controls as control}
              <div class="flex items-center justify-between gap-2">
                <label class="text-sm w-1/3 truncate" title={control.label}>
                  {control.label}
                </label>

                <div class="flex-1 flex items-center gap-2">
                  {#if control.type === 'color'}
                    <input
                      type="color"
                      value={control.value}
                      oninput={(e) => updateCSSFromControl(control.property, e.currentTarget.value)}
                      class="h-6 w-10 cursor-pointer p-0 bg-transparent border-0"
                    />
                    <span class="text-xs font-mono">{control.value}</span>

                  {:else if control.type === 'number'}
                    <input
                      type="number"
                      value={control.value}
                      oninput={(e) => updateCSSFromControl(control.property, e.currentTarget.value, control.unit)}
                      class="w-full px-1 text-sm border rounded"
                    />
                    {#if control.unit}
                      <span class="text-xs font-mono">{control.unit}</span>
                    {/if}

                  {:else if control.type === 'select' || control.type === 'toggle'}
                    <select
                      value={control.value}
                      onchange={(e) => updateCSSFromControl(control.property, e.currentTarget.value)}
                      class="w-full px-1 text-sm border rounded bg-white"
                    >
                      {#if control.options}
                        {#each control.options as opt}
                          <option value={opt}>{opt}</option>
                        {/each}
                      {/if}
                    </select>
                  {/if}
                </div>
              </div>
            {/each}
          </div>
        {/each}
      </div>
    </div>
  </div>

  <div class="h-48 bg-gray-300 rounded-md shrink-0">
    <h1>Excercises</h1>
  </div>
</main>