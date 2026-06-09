<script lang="ts">
	import { basicSetup, EditorView } from 'codemirror';
	import { css } from '@codemirror/lang-css';
	import { oneDark } from '@codemirror/theme-one-dark';
	import { onDestroy, onMount } from 'svelte';

	let content = $state('background: green;');

	let editorElement: HTMLDivElement;
	let view: EditorView;

	onMount(() => {
		view = new EditorView({
			doc: content,
			extensions: [
				basicSetup,
				css(),
				oneDark,
				EditorView.updateListener.of((update) => {
					// Only update if the user manually typed it
					if (update.docChanged && update.transactions.some(tr => tr.isUserEvent('input') || tr.isUserEvent('delete'))) {
						content = view.state.doc.toString();
					}
				}),
			],
			parent: editorElement
		});
	});

	onDestroy(() => view?.destroy());
</script>

<div class="flex h-full p-8 gap-8">
	<div class="flex-1">
		<div class="rounded-lg overflow-hidden" bind:this={editorElement}></div>
	</div>
	<div class="flex-1 h-full bg-gray-100 rounded-lg shadow-[-2px_2px_3px_inset_gray]"></div>
</div>