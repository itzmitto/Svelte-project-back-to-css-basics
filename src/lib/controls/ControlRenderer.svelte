<script lang="ts">
	import type { UIValueControl } from '$lib/utils/cssParser';

	let { control, onChange }: {
		control: UIValueControl;
		onChange?: (control: UIValueControl, value: string) => void;
	} = $props();

	function emitValue(value: string) {
		onChange?.(control, value);
	}

	// Dynamic slider scales based on whether it is a unitless fraction (like opacity)
	const isFraction = $derived(control.numberValue && control.unit !== '%');
	const min = 0;
	const max = $derived(isFraction ? 1 : 100);
	const step = $derived(isFraction ? 0.01 : 1);
</script>

{#if control.type === 'number'}
	<input
		type="number"
		value={control.numberValue}
		oninput={(e) => {
			let rawValue = e.currentTarget.value;

			// Snap back to 0 if input is NaN/garbage
			if (rawValue !== '' && Number.isNaN(Number(rawValue))) {
				e.currentTarget.value = '0';
				const unit = control.unit ?? control.fallbackUnit ?? '';
				return emitValue(`0${unit}`);
			}

			// Pause emissions on empty backspace to prevent state collision
			if (rawValue === '') return;

			let appliedUnit = control.unit ?? '';

			// Upgrade unitless 0 to the fallback unit when changing to non-zero
			if (rawValue !== '0' && !appliedUnit && control.fallbackUnit) {
				appliedUnit = control.fallbackUnit;
				control.unit = appliedUnit;
			}

			emitValue(`${rawValue}${appliedUnit}`);
		}}
		onblur={(e) => {
			// Clean up empty input on blur
			if (e.currentTarget.value === '') {
				e.currentTarget.value = '0';
				const unit = control.unit ?? control.fallbackUnit ?? '';
				emitValue(`0${unit}`);
			}
		}}
	/>

{:else if control.type === 'color'}
	<input
		type="color"
		value={control.rawString}
		oninput={(e) => emitValue(e.currentTarget.value)}
	/>

{:else if control.type === 'select'}
	<select oninput={(e) => emitValue(e.currentTarget.value)}>
		{#each control.options ?? [] as option}
			<option
				value={option}
				selected={option === control.rawString}
			>
				{option}
			</option>
		{/each}
	</select>

{:else if control.type === 'slider'}
	<input
		type="range"
		{min}
		{max}
		{step}
		value={control.numberValue ?? 0}
		oninput={(e) => {
            const rawValue = e.currentTarget.value;
            if (rawValue === '') return;

            let appliedUnit = control.unit ?? '';

            if (rawValue !== '0' && !appliedUnit && control.fallbackUnit) {
                appliedUnit = control.fallbackUnit;
                control.unit = appliedUnit;
            }

            emitValue(`${rawValue}${appliedUnit}`);
        }}
	/>

{:else}
	<input
		type="text"
		value={control.rawString}
		oninput={(e) => emitValue(e.currentTarget.value)}
	/>
{/if}

<style>
		@reference '../../routes/layout.css';

    input,
    select {
        @apply w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-100 outline-none transition-colors;
        @apply placeholder:text-gray-500;
        @apply hover:border-gray-600;
        @apply focus:border-green-500 focus:ring-1 focus:ring-green-500;
    }

    input[type='number'] {
        @apply text-right;
    }

    input[type='color'] {
        @apply h-10 cursor-pointer p-1;
    }

    input[type='range'] {
        @apply h-2 cursor-pointer appearance-none rounded-full bg-gray-700 p-0;
    }

    input[type='range']::-webkit-slider-thumb {
        @apply h-4 w-4 appearance-none rounded-full border border-green-400 bg-green-500;
    }

    input[type='range']::-moz-range-thumb {
        @apply h-4 w-4 rounded-full border border-green-400 bg-green-500;
    }

    select {
        @apply cursor-pointer;
    }

    option {
        @apply bg-gray-800 text-gray-100;
    }
</style>