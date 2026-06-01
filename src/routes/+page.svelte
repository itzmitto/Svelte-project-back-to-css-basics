<script>
  import { onMount, onDestroy } from 'svelte';
  import { EditorView, basicSetup } from 'codemirror';
  import { html } from '@codemirror/lang-html';
  import { oneDark } from '@codemirror/theme-one-dark';

  let editorElement;
  let view;
  let previewContainer;
  let shadowRoot;

  const initialCode = `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      background-color: lightblue;
    }
    h1 {
      color: white;
      text-align: center;
    }
    p {
      font-family: verdana;
      font-size: 20px;
    }
  </style>
</head>
<body>
  <h1>My First CSS Example</h1>
  <p>This is a paragraph.</p>
</body>
</html>`;

  function runCode(code) {
    if (!shadowRoot) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(code, 'text/html');

    let styles = Array.from(doc.querySelectorAll('style'))
      .map(s => s.textContent)
      .join('\n');

    // Belangrijke fix: vervang 'body' door ':host'
    styles = styles.replace(/body\s*\{/gi, ':host {'); 

    const content = doc.body.innerHTML || code;

    shadowRoot.innerHTML = `
      <style>
        ${styles}
      </style>
      ${content}
    `;
  }

  onMount(() => {
    shadowRoot = previewContainer.attachShadow({ mode: 'open' });

    view = new EditorView({
      doc: initialCode,
      extensions: [
        basicSetup,
        html(),
        oneDark,
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            runCode(view.state.doc.toString());
          }
        }),
      ],
      parent: editorElement,
    });

    runCode(initialCode);
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
      <div class="bg-gray-200 rounded-md w-full h-full flex flex-col overflow-hidden">
        <h1 class="text-sm font-bold px-3 py-2 bg-gray-300 rounded-t-md">Dit is de preview van de code</h1>
        <div bind:this={previewContainer} class="flex-1 overflow-auto p-2 bg-white"></div>
      </div>
      <div class="bg-gray-200 rounded-md w-full h-full"></div>
      <div class="bg-gray-200 rounded-md w-full h-full"></div>
    </section>
  </main>
</div>