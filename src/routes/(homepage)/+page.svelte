<!-- dit is de test pagina voor nu om alle exercises te maken--> 
<!-- dit is de test pagina voor nu om alle exercises te maken-->
<!-- dit is de test pagina voor nu om alle exercises te maken-->
<!-- dit is de test pagina voor nu om alle exercises te maken-->
<!-- dit is de test pagina voor nu om alle exercises te maken-->
<!-- dit is de test pagina voor nu om alle exercises te maken-->
<!-- dit is de test pagina voor nu om alle exercises te maken-->
<!-- dit is de test pagina voor nu om alle exercises te maken-->
<!-- dit is de test pagina voor nu om alle exercises te maken-->
<!-- dit is de test pagina voor nu om alle exercises te maken-->


<script lang="ts">
  import { basicSetup, EditorView } from 'codemirror';
  import { css } from '@codemirror/lang-css';
  import { html } from '@codemirror/lang-html';
  import { oneDark } from '@codemirror/theme-one-dark';
  import { onDestroy, onMount } from 'svelte';
  import { type ControlGroup, parseDeclaration } from '$lib/parser';
  import exercisesData from '$lib/data/exercises.json';
  let cssString = $state('border-radius: 12px;\nbackground-color: red;');

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
          if (update.docChanged && update.transactions.some(tr => tr.isUserEvent('input') || tr.isUserEvent('delete'))) {
            cssString = view.state.doc.toString();
          }
        }),
      ],
      parent: editorElement,
    });
    initExerciseEditors();
  });

  onDestroy(() => {
    view?.destroy();
    exerciseEditorViews.forEach(v => v?.destroy());
  });

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

  type Exercise = typeof exercisesData[number];

  let exerciseStates = $state(
    exercisesData.map((ex) => ({
      id: ex.id,
      activeTab: 'code' as 'code' | 'solution',
      userCode: ex.starterCode,
      checkResult: null as null | { passed: boolean; message: string },
      originalCode: ex.starterCode,
    }))
  );

  let exerciseEditorElements: HTMLDivElement[] = [];
  let exerciseEditorViews: EditorView[] = [];

  function initExerciseEditors() {
    exercisesData.forEach((ex, i) => {
      const el = exerciseEditorElements[i];
      if (!el) return;

      const editorView = new EditorView({
        doc: ex.starterCode,
        extensions: [
          basicSetup,
          html(),
          oneDark,
          EditorView.updateListener.of((update) => {
            if (update.docChanged && update.transactions.some(tr => tr.isUserEvent('input') || tr.isUserEvent('delete'))) {
              exerciseStates[i].userCode = editorView.state.doc.toString();
              exerciseStates[i].checkResult = null;
            }
          }),
        ],
        parent: el,
      });

      exerciseEditorViews[i] = editorView;
    });
  }

  function switchTab(exerciseIndex: number, tab: 'code' | 'solution') {
    exerciseStates[exerciseIndex].activeTab = tab;
    const editorView = exerciseEditorViews[exerciseIndex];
    if (!editorView) return;

    const ex = exercisesData[exerciseIndex];
    const newDoc = tab === 'solution' ? ex.solutionCode : exerciseStates[exerciseIndex].userCode;

    editorView.dispatch({
      changes: { from: 0, to: editorView.state.doc.length, insert: newDoc },
    });

    editorView.dispatch({
      effects: EditorView.editable.of(tab === 'code'),
    });
  }

  function checkCode(exerciseIndex: number) {
    const ex = exercisesData[exerciseIndex];
    const code = exerciseStates[exerciseIndex].userCode;

    if (code.trim() === ex.starterCode.trim()) {
      exerciseStates[exerciseIndex].checkResult = {
        passed: false,
        message: 'No changes have been made. Edit the code and try again.',
      };
      return;
    }

    const failed = ex.checks.filter(check => !new RegExp(check.pattern, 'i').test(code));

    if (failed.length === 0) {
      exerciseStates[exerciseIndex].checkResult = {
        passed: true,
        message: '✓ All checks passed! Great work.',
      };
    } else {
      exerciseStates[exerciseIndex].checkResult = {
        passed: false,
        message: `Missing: ${failed.map(f => f.description).join(', ')}.`,
      };
    }
  }

  function getPreviewSrc(exerciseIndex: number): string {
    const state = exerciseStates[exerciseIndex];
    const ex = exercisesData[exerciseIndex];

    const code = state.activeTab === 'solution' ? ex.solutionCode : state.userCode;
    return `data:text/html;charset=utf-8,${encodeURIComponent(code)}`;
  }
</script>

<main class="flex flex-col w-dvw p-8 gap-8 overflow-y-auto">
  <div class="grid grid-rows-2 grid-cols-2 gap-8 min-h-[600px]">
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

  <div class="flex flex-col gap-6">
    <h1 class="text-xl font-bold">Exercises</h1>

    {#each exercisesData as exercise, i}
      {@const state = exerciseStates[i]}

      <div class="flex gap-0 rounded-md overflow-hidden border border-gray-700 min-h-[400px]">

        <div class="flex flex-col w-1/2 bg-[#282c34]">
          <div class="flex items-center justify-between px-3 pt-2 pb-0 border-b border-gray-700">
            <div class="flex gap-0">
              <button
                class="px-4 py-2 text-sm font-medium transition-colors border-b-2 {state.activeTab === 'code'
                  ? 'text-white border-white'
                  : 'text-gray-400 border-transparent hover:text-gray-200'}"
                onclick={() => switchTab(i, 'code')}
              >
                Code
              </button>
              <button
                class="px-4 py-2 text-sm font-medium transition-colors border-b-2 {state.activeTab === 'solution'
                  ? 'text-white border-white'
                  : 'text-gray-400 border-transparent hover:text-gray-200'}"
                onclick={() => switchTab(i, 'solution')}
              >
                Solution
              </button>
            </div>

            {#if state.activeTab === 'code'}
              <button
                onclick={() => checkCode(i)}
                class="mb-1 px-4 py-1.5 rounded text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-400 transition-colors"
              >
                Check Code
              </button>
            {/if}
          </div>

          <div
            bind:this={exerciseEditorElements[i]}
            class="flex-1 overflow-auto [&>.cm-editor]:h-full [&>.cm-editor]:min-h-full"
          ></div>
        </div>

        <div class="flex flex-col w-1/2 bg-white border-l border-gray-300">
          <div class="flex items-center gap-2 px-4 py-2 border-b border-gray-200 bg-gray-100">
            <span class="w-3 h-3 rounded-full bg-red-500"></span>
            <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span class="w-3 h-3 rounded-full bg-green-500"></span>
            <span class="ml-2 text-sm text-gray-600 font-medium">Result</span>
          </div>

          <div class="flex-1 relative">
            {#if state.checkResult !== null && !state.checkResult.passed && state.activeTab === 'code'}
              <div class="p-4">
                <p class="text-red-500 font-mono text-sm">{state.checkResult.message}</p>
              </div>
            {:else if state.checkResult?.passed && state.activeTab === 'code'}
              <iframe
                title="Result"
                srcdoc={state.userCode}
                class="w-full h-full border-none"
                sandbox="allow-scripts"
              ></iframe>
            {:else if state.activeTab === 'solution'}
              <iframe
                title="Solution Result"
                srcdoc={exercisesData[i].solutionCode}
                class="w-full h-full border-none"
                sandbox="allow-scripts"
              ></iframe>
            {:else}
              <div class="p-4">
                <p class="text-red-500 font-mono text-sm">No changes have been made. Edit the code and try again.</p>
              </div>
            {/if}
          </div>
        </div>

      </div>
    {/each}
  </div>
</main>