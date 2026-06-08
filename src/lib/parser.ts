import * as csstree from 'css-tree';

interface CSSLine {
	property: string;
	inputs: InputDef[];
}

interface InputDef {
	type: 'number' | 'color' | 'select' | 'toggle';
	label: string;
	value: string | number | boolean;
	unit?: string;
	options?: string[];
}

export function parseDeclaration(property: string, value: string) {
	// parse raw nodes to get actual values
	const ast = csstree.parse(`${property}: ${value}`, { context: 'declaration' });
	const rawNodes: any[] = [];

	csstree.walk(ast, (node: any) => {
		rawNodes.push(node);
	});

	// get semantic types from the lexer
	const match = csstree.lexer.matchProperty(property, value);
	if (!match.matched) return [];

	console.log(match);
	console.log(rawNodes);
	return rawNodes;
}
