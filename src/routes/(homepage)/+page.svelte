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
	import exercisesData from '$lib/data/exercises.json';
	import ExerciseItem from '$lib/components/ExerciseItem.svelte';

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

	console.log(exampleNames);

	// --- Reactive state ---

	let activeTab = $state<'css' | 'html'>('css');
	let selected = $state(exampleNames[0]);

	let cssContent = $derived(examples[selected].css);
	let htmlContent = $derived(examples[selected].html);

	function updateTick() {
		cssContent = cssState.doc.toString();
		htmlContent = htmlState.doc.toString();
		selectors = parseStylesheet(cssContent);
	}

	// --- Mobile panel state ---
	// Preview is always visible on mobile, so we only toggle between
	// the editor and the controls panel.
	let mobilePanel = $state<'editor' | 'controls'>('editor');

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
						cssState = update.state;
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
		cssState = makeCssState(example.css);
		htmlState = makeHtmlState(example.html);
		cssContent = cssState.doc.toString();
		htmlContent = htmlState.doc.toString();
		updateTick();
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
			if (!view) return;
			view.dispatch({ changes: changeSpec });
		} else {
			const tx = cssState.update({ changes: changeSpec });
			cssState = tx.state;
			cssContent = cssState.doc.toString();
		}
		selectors = parseStylesheet(cssContent);
	}
</script>

<!-- ASSI LAYOUT
	Mobile layout  (flex-col, top→bottom):
	  ┌─────────────┐  ← Preview    always visible, flex-1
	  │   Preview   │
	  ├─────────────┤  ← Editor OR Controls, flex-1
	  │ Editor/Ctrl │
	  └─────────────┘
	  [ Code ][ Controls ]  ← fixed bottom nav, 2 tabs

	Desktop layout  (2×2 grid, explicit placement):
	  ┌──────────┬──────────┐
	  │  Editor  │         │
	  ├──────────┤ Preview │
	  │ Controls │         │
	  └──────────┴──────────┘

	DOM order is Preview → Editor → Controls so that Preview sits on
	top naturally in the mobile flex column. Desktop grid uses
	col-start / row-start to restore the expected visual order.
-->

<div class="overflow-y-auto flex-1 h-full pb-16 md:pb-0">

	<!-- ── Panels area ───────────────────────────────────────────────────── -->
	<div class="
		h-[calc(100dvh-4rem)] md:h-full
		flex flex-col gap-4 p-4
		md:grid md:grid-cols-2 md:grid-rows-2 md:p-8 md:gap-4
	">

		<!-- Preview — always visible; top half on mobile, right col on desktop -->
		<div class="
			flex-1 min-h-0 rounded-md overflow-hidden
			md:flex-none md:col-start-2 md:row-start-1 md:row-span-2
		">
			<div>
				<select onchange={(e) => setExample(e.currentTarget.value)} class="">
					{#each exampleNames as name}
						<option value={name}>{name}</option>
					{/each}
				</select>
			</div>
			<PreviewIframe css={cssContent} html={htmlContent} />
		</div>

		<!-- Editor — bottom half on mobile (when active), top-left on desktop -->
		<div class="
			flex-1 min-h-0 flex-col rounded-md overflow-hidden
			md:flex-none md:col-start-1 md:row-start-1
			{mobilePanel === 'editor' ? 'flex' : 'hidden md:flex'}
		">
			<div class="bg-gray-900 flex text-white/80 px-2 shrink-0">
				<button
					class="px-4 py-2 cursor-pointer hover:text-white
						{activeTab === 'css' ? 'border-b-2 border-b-green-400 text-white font-bold' : ''}"
					onclick={() => switchTab('css')}
				>CSS</button>
				<button
					class="px-4 py-2 cursor-pointer hover:text-white
						{activeTab === 'html' ? 'border-b-2 border-b-green-400 text-white font-bold' : ''}"
					onclick={() => switchTab('html')}
				>HTML</button>
			</div>
			<div class="flex-1 overflow-y-auto" bind:this={editorElement}></div>
		</div>

		<!-- Controls — bottom half on mobile (when active), bottom-left on desktop -->
		<div class="
			flex-1 min-h-0 flex-col
			bg-gray-900 text-gray-200 rounded-md border border-gray-800 shadow-lg overflow-hidden
			md:flex-none md:col-start-1 md:row-start-2
			{mobilePanel === 'controls' ? 'flex' : 'hidden md:flex'}
		">
			<div class="px-4 py-3 bg-gray-950 border-b border-gray-800 text-xs font-bold uppercase tracking-wider text-gray-400 shrink-0">
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

	<!-- ── Exercises ─────────────────────────────────────────────────────── -->
	<div class="flex flex-col gap-6 p-4 md:p-8">
		<h1 class="text-xl font-bold text-white">Exercises</h1>
		{#each exercisesData as exercise}
			<ExerciseItem {exercise} />
		{/each}
	</div>
</div>

<!-- ── Mobile bottom tab bar (2 tabs preview is always shown) ──────────── -->
<nav
	class="md:hidden fixed bottom-0 inset-x-0 z-50 bg-gray-950 border-t border-gray-800"
	style="padding-bottom: env(safe-area-inset-bottom)"
>
	<div class="flex h-16">

		<button
			onclick={() => mobilePanel = 'editor'}
			class="flex-1 flex flex-col items-center justify-center gap-1 text-xs font-medium transition-colors
				{mobilePanel === 'editor' ? 'text-green-400' : 'text-gray-500 hover:text-gray-300'}"
		>
			<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
			</svg>
			Code
		</button>

		<button
			onclick={() => mobilePanel = 'controls'}
			class="flex-1 flex flex-col items-center justify-center gap-1 text-xs font-medium transition-colors
				{mobilePanel === 'controls' ? 'text-green-400' : 'text-gray-500 hover:text-gray-300'}"
		>
			<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
			</svg>
			Controls
		</button>

	</div>
</nav>