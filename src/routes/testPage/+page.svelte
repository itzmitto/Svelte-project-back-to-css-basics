<script lang="ts">
	import { onMount } from 'svelte';
	import { EditorState } from '@codemirror/state';
	import { css } from '@codemirror/lang-css';
	import { abbreviationTracker, emmetConfig, expandAbbreviation } from '@emmetio/codemirror6-plugin';
	import { EditorView, keymap } from '@codemirror/view';
	import { indentWithTab } from '@codemirror/commands';
	import { html } from '@codemirror/lang-html';
	import { basicSetup } from 'codemirror';
	import { oneDark } from '@codemirror/theme-one-dark';
	import { autocompletion } from '@codemirror/autocomplete';
	import PreviewIframe from '$lib/components/PreviewIframe.svelte';
	import ControlRenderer from '$lib/controls/ControlRenderer.svelte';
	import { Accordion } from 'bits-ui';
	import { parseStylesheet, type UISelector, type UIValueControl } from '$lib/utils/cssParser';

	// --- Example loading ---

	const htmlFiles = import.meta.glob('/src/lib/examples/**/index.html', {
		query: '?raw', import: 'default', eager: true
	});
	const cssFiles = import.meta.glob('/src/lib/examples/**/index.css', {
		query: '?raw', import: 'default', eager: true
	});

	type Example = { name: string; html: string; css: string };

	function buildExamples(): Record<string, Example> {
		const result: Record<string, Example> = {};
		for (const path in htmlFiles) {
			const match = path.match(/\/examples\/(.+)\/index\.html$/);
			if (!match) continue;
			const name = match[1];
			result[name] = {
				name,
				html: htmlFiles[path] as string,
				css: cssFiles[`/src/lib/examples/${name}/index.css`] as string ?? ''
			};
		}
		return result;
	}

	export const examples = buildExamples();
	export const exampleNames = Object.keys(examples);

	// --- Reactive state ---

	let activeTab = $state<'css' | 'html'>('css');
	let selected = $state(exampleNames[0]); // FIX: was missing $state

	let cssContent = $derived(examples[selected].css);
	let htmlContent = $derived(examples[selected].html);

	function updateTick() {
		cssContent = cssState.doc.toString();
		htmlContent = htmlState.doc.toString();

		selectors = parseStylesheet(cssContent)
	}

	// --- Editor setup ---

	let editorElement: HTMLDivElement;
	let view: EditorView;
	let cssState: EditorState;
	let htmlState: EditorState;

	const baseExtensions = [
		basicSetup,
		oneDark,
		autocompletion(),
		EditorView.theme({ '&': { height: '100%' } }),
	];

	// Factory functions so we can recreate states when switching examples
	function makeCssState(doc: string): EditorState {
		return EditorState.create({
			doc,
			extensions: [
				...baseExtensions,
				css(),
				emmetConfig.of({ syntax: 'css' as any }),
				abbreviationTracker(),
				keymap.of([{ key: 'Tab', run: expandAbbreviation }, indentWithTab]),
				EditorView.updateListener.of((update) => {
					if (update.docChanged) {
						cssState = update.state; // keep our reference in sync with the view
						cssContent = update.state.doc.toString();

						updateTick();
					}
				})
			]
		});
	}

	function makeHtmlState(doc: string): EditorState {
		return EditorState.create({
			doc,
			extensions: [
				...baseExtensions,
				html(),
				emmetConfig.of({ syntax: 'html' as any }),
				abbreviationTracker(),
				keymap.of([{ key: 'Tab', run: expandAbbreviation }, indentWithTab]),
				EditorView.updateListener.of((update) => {
					if (update.docChanged) {
						htmlState = update.state;
						htmlContent = update.state.doc.toString();

						updateTick();
					}
				})
			]
		});
	}

	let selectors = $state<UISelector[]>([]);

	onMount(() => {
		cssState = makeCssState(cssContent);
		htmlState = makeHtmlState(htmlContent);

		view = new EditorView({ state: cssState, parent: editorElement });

		updateTick();
	});

	// --- Example switching ---

	export function setExample(name: string) {
		selected = name;
		const example = examples[name];

		// Recreate both states so they hold the new content
		cssState = makeCssState(example.css);
		htmlState = makeHtmlState(example.html);

		// Sync $state from CodeMirror's normalized version (same fix as onMount)
		cssContent = cssState.doc.toString();
		htmlContent = htmlState.doc.toString();

		// Point the shared view at whichever tab is currently active
		if (view) {
			view.setState(activeTab === 'css' ? cssState : htmlState);
		}
	}

	function switchTab(tab: 'css' | 'html') {
		if (!view) return;
		activeTab = tab;
		view.setState(tab === 'css' ? cssState : htmlState);
	}

	// --- Controls ---

	function handleControlChange(control: UIValueControl, value: string) {
		if (control.start === undefined || control.end === undefined) return;

		const changeSpec = { from: control.start, to: control.end, insert: value };

		if (activeTab === 'css') {
			// Dispatch to live view; updateListener handles syncing cssState + cssContent
			if (!view) return;
			view.dispatch({ changes: changeSpec });
		} else {
			// HTML tab is active: mutate cssState in the background without touching the view
			const tx = cssState.update({ changes: changeSpec });
			cssState = tx.state;
			cssContent = cssState.doc.toString();
		}

		selectors = parseStylesheet(cssContent);
	}
</script>

<!-- template unchanged -->
<div class="flex-1 grid grid-cols-2 grid-rows-2 gap-4 p-8 h-full">
	<div class="flex flex-col rounded-md overflow-hidden">
		<div class="bg-gray-900 flex text-white/80 px-2">
			<button
				class="px-4 py-2 cursor-pointer hover:text-white {activeTab === 'css' ? 'border-b-green-400 border-b-2 text-white font-bold' : ''}"
				onclick={() => switchTab('css')}
			>CSS</button>
			<button
				class="px-4 py-2 cursor-pointer hover:text-white {activeTab === 'html' ? 'border-b-green-400 border-b-2 text-white font-bold' : ''}"
				onclick={() => switchTab('html')}
			>HTML</button>
		</div>
		<div class="flex-1 overflow-y-auto" bind:this={editorElement}></div>
	</div>

	<div class="row-span-2">
		<PreviewIframe css={cssContent} html={htmlContent} />
	</div>

	<div class="bg-gray-900 text-gray-200 rounded-md border border-gray-800 shadow-lg overflow-hidden h-full flex flex-col">
		<div class="px-4 py-3 bg-gray-950 border-b border-gray-800 text-xs font-bold uppercase tracking-wider text-gray-400">
			CSS Visual Controls
		</div>

		<div class="flex-1 overflow-y-auto">
			<Accordion.Root type="single" class="divide-y divide-gray-800">
				{#each selectors as selector}
					<Accordion.Item class="group" value={selector.selector}>
						<Accordion.Header>
							<Accordion.Trigger class="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-semibold bg-gray-900/50 hover:bg-gray-800/60 transition-colors cursor-pointer group-data-[state=open]:bg-gray-800/40 group-data-[state=open]:text-green-400">
								<span>{selector.selector}</span>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-gray-500 transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-green-400">
									<path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
								</svg>
							</Accordion.Trigger>
						</Accordion.Header>
						<Accordion.Content class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-xs bg-gray-950/30 px-4 pb-2.5 pt-1 divide-y divide-gray-800/40">
							{#each selector.declarations as declaration}
								<div class="flex items-center justify-between py-2 gap-4 group/decl hover:bg-gray-800/20 -mx-4 px-4 transition-colors">

									<span class="font-mono text-gray-400 select-none truncate w-28 shrink-0 tracking-normal group-hover/decl:text-gray-300">
											{declaration.label}
									</span>

									<div class="flex-1 flex items-center justify-end gap-1.5 min-w-0">
										{#each declaration.controls as control}
											<ControlRenderer onChange={handleControlChange} {control} />
										{/each}
									</div>
								</div>
							{/each}
						</Accordion.Content>
					</Accordion.Item>
				{/each}
			</Accordion.Root>
		</div>
	</div>
</div>