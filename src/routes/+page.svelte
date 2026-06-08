<script lang="ts">
  import { basicSetup, EditorView } from 'codemirror';
  import { css } from '@codemirror/lang-css';
  import { oneDark } from '@codemirror/theme-one-dark';
  import { onDestroy, onMount } from 'svelte';
  import { parseDeclaration } from '$lib/parser';

  let cssString = $state('border-radius: 12px;');

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
          if (update.docChanged) {
            cssString = view.state.doc.toString();
          }
        }),
      ],
      parent: editorElement,
    });
  });

  onDestroy(() => view?.destroy());

  const controls = $derived.by(() => {
    const lines = cssString.split('\n');
    const result = [];

    for (const line of lines) {
      const match = line.match(/^\s*([\w-]+):\s*([^;]+);$/);
      if (match) {
        const [, property, value] = match;
        console.log(property, value);

        result.push(parseDeclaration(property, value));
      }
    }

    return result;
  });
</script>

<div class="grid grid-rows-2 grid-cols-2 gap-8 p-8 h-full flex-1">
  <div class="bg-gray-300 w-full h-full rounded-md overflow-hidden flex flex-col">
    <h1 class="text-sm font-bold shadow-sm px-2 py-1">Code</h1>
    <div bind:this={editorElement}></div>
  </div>
  <div class="bg-gray-300 w-full h-full rounded-md overflow-hidden flex flex-col">
    <h1 class="text-sm font-bold shadow-sm px-2 py-1">Preview</h1>
    <div class="flex-1 flex justify-center items-center">
      <div style={cssString} class="size-32 bg-green-500 text-center">
        Hello World!
      </div>
    </div>
  </div>
  <div class="bg-gray-300 w-full h-full rounded-md overflow-hidden flex flex-col">
    <h1 class="text-sm font-bold shadow-sm px-2 py-1">Controls</h1>
    <div>
      {controls.length}
      <ul>
        {#each controls as control}
          <li>---</li>
          {#each control as node}
            <li>{node.type}</li>
          {/each}
        {/each}
      </ul>
    </div>
  </div>
  <div class="bg-gray-300 w-full h-full rounded-md overflow-hidden flex flex-col">
    <h1 class="text-sm font-bold shadow-sm px-2 py-1">Exercises</h1>
  </div>
</div>