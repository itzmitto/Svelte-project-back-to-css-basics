import type { PropertyMeta, ControlConfig } from './types';

// dummy property index data
export const properties: PropertyMeta[] = [
	{
		slug: 'border-radius',
		name: 'Border Radius',
		category: 'Layout',
		description: 'Rounds the corners of an element.'
	},
	{
		slug: 'font-size',
		name: 'Font Size',
		category: 'Typography',
		description: 'Controls the size of the text.'
	},
	{
		slug: 'box-shadow',
		name: 'Box Shadow',
		category: 'Effects',
		description: 'Adds a shadow around an element.'
	},
	{
		slug: 'opacity',
		name: 'Opacity',
		category: 'Effects',
		description: 'Controls the transparency of an element.'
	},
	{
		slug: 'background-color',
		name: 'Background Color',
		category: 'Colors',
		description: 'Sets the background color of an element.'
	}
];

// lookup table mapping css properties to their control config
export const controlLookup: Record<string, ControlConfig> = {
	'border-radius': { type: 'slider', min: 0, max: 50, step: 1, unit: 'px', default: 12 },
	'font-size': { type: 'slider', min: 8, max: 72, step: 1, unit: 'px', default: 16 },
	opacity: { type: 'slider', min: 0, max: 1, step: 0.01, unit: '', default: 1 },
	padding: { type: 'slider', min: 0, max: 80, step: 1, unit: 'px', default: 16 },
	margin: { type: 'slider', min: 0, max: 80, step: 1, unit: 'px', default: 0 },
	width: { type: 'slider', min: 0, max: 400, step: 1, unit: 'px', default: 100 },
	height: { type: 'slider', min: 0, max: 400, step: 1, unit: 'px', default: 100 },
	'font-weight': {
		type: 'select',
		options: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
		default: '400'
	},
	'text-align': {
		type: 'select',
		options: ['left', 'center', 'right', 'justify'],
		default: 'left'
	},
	display: {
		type: 'select',
		options: ['block', 'flex', 'grid', 'inline', 'inline-block', 'none'],
		default: 'block'
	},
	'background-color': { type: 'color', default: '#6366f1' },
	color: { type: 'color', default: '#000000' },
	'border-color': { type: 'color', default: '#000000' }
};
