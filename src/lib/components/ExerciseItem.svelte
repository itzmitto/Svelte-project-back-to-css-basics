<script lang="ts">
	import { basicSetup, EditorView } from 'codemirror';
	import { Compartment } from '@codemirror/state';
	import { html } from '@codemirror/lang-html';
	import { oneDark } from '@codemirror/theme-one-dark';
	import { onDestroy, onMount } from 'svelte';

	// Compartment lets us swap the editable facet at runtime via dispatch
	const editableCompartment = new Compartment();

	// Match the shape of exercisesData entries — extend as your JSON grows
	type Check = { pattern: string; description: string };
	type Exercise = {
		id: string | number;
		starterCode: string;
		solutionCode: string;
		checks: Check[];
	};

	let { exercise }: { exercise: Exercise } = $props();

	// --- Per-exercise reactive state ---
	let activeTab = $state<'code' | 'solution'>('code');
	let userCode = $state(exercise.starterCode);
	let checkResult = $state<{ passed: boolean; message: string } | null>(null);

	// --- CodeMirror ---
	let editorElement: HTMLDivElement;
	let editorView: EditorView;

	onMount(() => {
		editorView = new EditorView({
			doc: exercise.starterCode,
			extensions: [
				basicSetup,
				html(),
				oneDark,
				editableCompartment.of(EditorView.editable.of(true)),
				EditorView.updateListener.of((update) => {
					// Only react to actual user edits, not programmatic dispatches
					if (
						update.docChanged &&
						update.transactions.some(
							(tr) => tr.isUserEvent('input') || tr.isUserEvent('delete')
						)
					) {
						userCode = editorView.state.doc.toString();
						checkResult = null;
					}
				})
			],
			parent: editorElement
		});
	});

	onDestroy(() => editorView?.destroy());

	// --- Tab switching ---
	function switchTab(tab: 'code' | 'solution') {
		activeTab = tab;
		if (!editorView) return;

		// Show solution or restore the user's in-progress code
		const doc = tab === 'solution' ? exercise.solutionCode : userCode;
		editorView.dispatch({
			changes: { from: 0, to: editorView.state.doc.length, insert: doc }
		});
		// Lock the editor when showing the solution.
		// Compartment.reconfigure() returns a proper StateEffect, which is what dispatch expects.
		editorView.dispatch({
			effects: editableCompartment.reconfigure(EditorView.editable.of(tab === 'code'))
		});
	}

	// --- Code checking ---
	function checkCode() {
		if (userCode.trim() === exercise.starterCode.trim()) {
			checkResult = {
				passed: false,
				message: 'No changes have been made. Edit the code and try again.'
			};
			return;
		}

		const failed = exercise.checks.filter(
			(check) => !new RegExp(check.pattern, 'i').test(userCode)
		);

		checkResult =
			failed.length === 0
				? { passed: true, message: '✓ All checks passed! Great work.' }
				: { passed: false, message: `Missing: ${failed.map((f) => f.description).join(', ')}.` };
	}
</script>

<div class="flex gap-0 rounded-md overflow-hidden border border-gray-700 min-h-[400px]">

	<!-- Left: editor -->
	<div class="flex flex-col w-1/2 bg-[#282c34]">
		<div class="flex items-center justify-between px-3 pt-2 pb-0 border-b border-gray-700">
			<div class="flex gap-0">
				<button
					class="px-4 py-2 text-sm font-medium transition-colors border-b-2
						{activeTab === 'code' ? 'text-white border-white' : 'text-gray-400 border-transparent hover:text-gray-200'}"
					onclick={() => switchTab('code')}
				>
					Code
				</button>
				<button
					class="px-4 py-2 text-sm font-medium transition-colors border-b-2
						{activeTab === 'solution' ? 'text-white border-white' : 'text-gray-400 border-transparent hover:text-gray-200'}"
					onclick={() => switchTab('solution')}
				>
					Solution
				</button>
			</div>

			{#if activeTab === 'code'}
				<button
					onclick={checkCode}
					class="mb-1 px-4 py-1.5 rounded text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-400 transition-colors"
				>
					Check Code
				</button>
			{/if}
		</div>

		<div
			bind:this={editorElement}
			class="flex-1 overflow-auto [&>.cm-editor]:h-full [&>.cm-editor]:min-h-full"
		></div>
	</div> 

	<!-- Right: result -->
	<div class="flex flex-col w-1/2 bg-white border-l border-gray-300">
		<div class="flex items-center gap-2 px-4 py-2 border-b border-gray-200 bg-gray-100">
			<span class="w-3 h-3 rounded-full bg-red-500"></span>
			<span class="w-3 h-3 rounded-full bg-yellow-400"></span>
			<span class="w-3 h-3 rounded-full bg-green-500"></span>
			<span class="ml-2 text-sm text-gray-600 font-medium">Result</span>
		</div>

		<div class="flex-1 relative">
			{#if activeTab === 'solution'}
				<iframe
					title="Solution"
					srcdoc={exercise.solutionCode}
					class="w-full h-full border-none"
					sandbox="allow-scripts"
				></iframe>
			{:else if checkResult?.passed}
				<iframe
					title="Result"
					srcdoc={userCode}
					class="w-full h-full border-none"
					sandbox="allow-scripts"
				></iframe>
			{:else}
				<div class="p-4">
					<p class="text-gray-500 font-mono text-sm">
						{checkResult?.message ?? 'Edit the code above, then click Check Code.'}
					</p>
				</div>
			{/if}
		</div>
	</div>

</div>