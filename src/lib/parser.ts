import * as csstree from 'css-tree';

export interface ControlGroup {
	property: string;
	label: string;
	controls: Control[];
}

export interface Control {
	property: string;
	type: 'number' | 'color' | 'select' | 'toggle';
	label: string;
	value: string | number | boolean;
	unit?: string;
	options?: string[];
}

function prettifyProperty(property: string) {
	return property
		.split('-')
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}

export function parseDeclaration(property: string, value: string): ControlGroup {
	const controls: Control[] = [];
	const valueAst = csstree.parse(value, { context: 'value' });
	const match = csstree.lexer.matchProperty(property, valueAst);

	if (match.error) {
		console.warn(`Mismatch or invalid CSS for ${property}:`, match.error.message);
		return { property, label: prettifyProperty(property), controls };
	}

	csstree.walk(valueAst, (node: any) => {
		let trace: any[];
		try {
			trace = match.getTrace(node);
		} catch {
			return; // Skip wrapper layout nodes
		}

		if (!trace) return;

		// 1. Identify the semantic type from the trace
		const isColor = trace.some((t) => t.type === 'Type' && t.name === 'color');
		const isLength = trace.some(
			(t) => t.type === 'Type' && (t.name === 'length' || t.name === 'percentage')
		);
		const isNumber = trace.some((t) => t.type === 'Type' && t.name === 'number');
		const isKeyword = trace.some((t) => t.type === 'Keyword');

		// 2. Generate the right control
		if (isColor) {
			controls.push({
				property,
				type: 'color',
				label: prettifyProperty(property),
				value: csstree.generate(node)
			});
		} else if (isLength || isNumber) {
			// Determine the unit safely across node types
			let unit: string | undefined = undefined;
			if (node.type === 'Percentage') {
				unit = '%';
			} else if (node.unit) {
				unit = node.unit;
			}

			controls.push({
				property,
				type: 'number',
				label: prettifyProperty(property),
				value: Number(node.value),
				unit: unit
			});
		} else if (isKeyword && node.type === 'Identifier') {
			// Fetch all options available for this specific layout property
			const options = getPropertyOptions(property);

			controls.push({
				property,
				// Smart UI choice: small lists make great toggles, long lists get selects
				type: options.length <= 3 ? 'toggle' : 'select',
				label: prettifyProperty(property),
				value: node.name,
				options: options.length > 0 ? options : undefined
			});
		}
	});

	return {
		property,
		label: prettifyProperty(property),
		controls
	};
}

/**
 * Smart helper that extracts all valid keyword strings for a given property.
 * It recursively unpacks linked CSS types (like turning <display-inside> into 'flex', 'grid', etc.)
 */
function getPropertyOptions(property: string): string[] {
	const keywords = new Set<string>();
	const visitedTypes = new Set<string>();

	function walkSyntax(syntaxNode: any) {
		if (!syntaxNode) return;

		// Use css-tree's built-in definition syntax walker
		csstree.definitionSyntax.walk(syntaxNode, (node) => {
			if (node.type === 'Keyword') {
				keywords.add(node.name);
			} else if (node.type === 'Type' && !visitedTypes.has(node.name)) {
				visitedTypes.add(node.name);
				try {
					// Resolve nested dictionary types (e.g. <display-outside>)
					const typeDef = csstree.lexer.getType(node.name);
					if (typeDef && typeDef.syntax) {
						walkSyntax(typeDef.syntax);
					}
				} catch {
					// Fail gracefully for internal system dictionary lookups
				}
			}
		});
	}

	try {
		const prop = csstree.lexer.getProperty(property);
		if (prop && prop.syntax) {
			walkSyntax(prop.syntax);
		}
	} catch {
		// Fallback safely if property lookup fails completely
	}

	return Array.from(keywords);
}