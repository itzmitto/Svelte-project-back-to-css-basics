<script>
  import { onMount, onDestroy } from 'svelte';
  import { EditorView, basicSetup } from 'codemirror';
  import { javascript } from '@codemirror/lang-javascript';
  import { oneDark } from '@codemirror/theme-one-dark';

  let editorElement;
  let view;
  let previewOutput = $state('');

  function runCode(code) {
    let output = '';
    const originalLog = console.log;
    const originalError = console.error;

    console.log = (...args) => {
      output += args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ') + '\n';
    };
    console.error = (...args) => {
      output += 'Error: ' + args.join(' ') + '\n';
    };

    try {
      new Function(code)();
    } catch (e) {
      output += 'Fout: ' + e.message + '\n';
    } finally {
      console.log = originalLog;
      console.error = originalError;
    }

    previewOutput = output;
  }

  onMount(() => {
    view = new EditorView({
      doc: '// Schrijf hier je code\nconsole.log("Hello world!");',
      extensions: [
        basicSetup,
        javascript(),
        oneDark,
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            runCode(view.state.doc.toString());
          }
        }),
      ],
      parent: editorElement,
    });

    runCode(view.state.doc.toString());
  });

  onDestroy(() => {
    view?.destroy();
  });
</script>

<div class="flex flex-col h-dvh">
  <header class="w-full h-16 bg-gray-200"></header>
  <main class="flex-1 flex overflow-hidden">
    <aside class="w-64 bg-gray-300">
      <div class="h-12 bg-gray-500 border-y text-center flex items-center px-2">CSS Tutorial</div>
      <div class="h-12 bg-gray-500 border-y text-center flex items-center px-2">Lorem Ipsum</div>
      <div class="h-12 bg-gray-500 border-y text-center flex items-center px-2">Lorem Ipsum</div>
      <div class="h-12 bg-gray-500 border-y text-center flex items-center px-2">Lorem Ipsum</div>
      <div class="h-12 bg-gray-500 border-y text-center flex items-center px-2">Lorem Ipsum</div>
    </aside>
    <section class="flex-1 grid grid-rows-2 grid-cols-2 gap-8 p-8 overflow-auto">
      <div class="bg-gray-200 rounded-md w-full h-full overflow-hidden flex flex-col">
        <h1 class="text-sm font-bold px-3 py-2 bg-gray-300 rounded-t-md">Dit is de code</h1>
        <div bind:this={editorElement} class="flex-1 overflow-auto" />
      </div>
      <div class="bg-gray-200 rounded-md w-full h-full flex flex-col">
        <h1 class="text-sm font-bold px-3 py-2 bg-gray-300 rounded-t-md">Dit is de preview van de code</h1>
        <pre class="flex-1 p-3 font-mono text-sm whitespace-pre-wrap overflow-auto">{previewOutput}</pre>
      </div>
      <div class="bg-gray-200 rounded-md w-full h-full"></div>
      <div class="bg-gray-200 rounded-md w-full h-full"></div>
    </section>
  </main>
</div>