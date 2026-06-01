import type { Component } from 'svelte';

export interface PropertyMeta {
	slug: string;
	name: string;
	category: string;
	description: string;
}

export interface ControlConfig {
	type: 'slider' | 'color' | 'select' | 'toggle' | 'number' | 'text' | 'multiple';
	min?: number;
	max?: number;
	step?: number;
	unit?: string;
	options?: string[]; // for select or multiple
	default: number | string | boolean;
}

export interface DynamicControl {
	property: string; // e.g. "border-radius"
	label: string; // e.g. "border-radius" or a friendly name if we have one
	config: ControlConfig;
	value: number | string | boolean;
}

export interface PreviewComponent {
	component: Component;
}
