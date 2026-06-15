import * as csstree from 'css-tree';

export interface UIValueControl {
	type: 'number' | 'slider' | 'color' | 'select' | 'text';
	rawString: string;

	start: number;
	end: number;

	numberValue?: number;
	unit?: string;
	fallbackUnit?: string;
	options?: string[];
}

export interface UIDeclaration {
	property: string;
	label: string;
	controls: UIValueControl[];
}

export interface UISelector {
	selector: string;
	declarations: UIDeclaration[];
}

// --------------------------------------------------
// HELPERS
// --------------------------------------------------

function prettifyProperty(property: string): string {
	return property
		.split('-')
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}

function extractSelectors(prelude: csstree.Rule['prelude']): string[] {
	if (prelude.type !== 'SelectorList') return [];

	const selectors: string[] = [];

	csstree.walk(prelude, {
		visit: 'Selector',
		enter(selectorNode: any) {
			selectors.push(
				csstree.generate(selectorNode).trim()
			);
		}
	});

	return selectors;
}

function getPropertyOptions(property: string): string[] {
	const keywords = new Set<string>();
	const visitedTypes = new Set<string>();

	function walkSyntax(syntaxNode: any) {
		if (!syntaxNode) return;

		csstree.definitionSyntax.walk(syntaxNode, (node) => {
			if (node.type === 'Keyword') {
				keywords.add(node.name);
			}

			if (
				node.type === 'Type' &&
				!visitedTypes.has(node.name)
			) {
				visitedTypes.add(node.name);

				try {
					const typeDef = csstree.lexer.getType(node.name);

					if (typeDef?.syntax) {
						walkSyntax(typeDef.syntax);
					}
				} catch {
					// ignore invalid types
				}
			}
		});
	}

	try {
		const propertyDef =
			csstree.lexer.getProperty(property);

		if (propertyDef?.syntax) {
			walkSyntax(propertyDef.syntax);
		}
	} catch {
		// ignore invalid properties
	}

	return [...keywords];
}

function AllowUnitlessNumber(property: string, node: csstree.CssNode): boolean {
	try {
		// 1. If it already has a unit (like 'px'), it's obviously not a unitless number
		if (node.type === 'Dimension' || node.type === 'Percentage') {
			return false;
		}

		// 2. We match the current individual node against the property's syntax
		const matchResult = csstree.lexer.matchProperty(property, node);

		// 3. If csstree successfully matches this single node as a valid standalone entity
		// for this property, it means it is syntactically a native unitless number!
		return matchResult.matched !== null;


	} catch {
		// Safe fallback for custom properties or parsing errors
		return false;
	}
}

// --------------------------------------------------
// CONTROL FACTORY
// --------------------------------------------------

function createControl(
	property: string,
	node: any,
	rawString: string,
	baseOffset: number
): UIValueControl | null {
	if (!node.loc) return null;

	const start =
		baseOffset + node.loc.start.offset;

	const end =
		baseOffset + node.loc.end.offset;

	// ----------------------------------------
	// Colors
	// ----------------------------------------

	if (node.type === 'Hash') {
		return {
			type: 'color',
			rawString,
			start,
			end
		};
	}

	try {
		const matchResult = csstree.lexer.matchType('color', node);

		if (matchResult.matched !== null) {
			return {
				type: 'color',
				rawString,
				start,
				end
			}
		}
	} catch {

	}

	// ----------------------------------------
	// Numbers / lengths
	// ----------------------------------------

	if (node.type === 'Dimension') {
		return {
			type: 'number',
			rawString,
			numberValue: Number(node.value),
			unit: node.unit,
			start,
			end
		};
	}

	if (node.type === 'Number') {
		return {
			type: 'number',
			rawString,
			numberValue: Number(node.value),
			start,
			end
		};
	}

	// ----------------------------------------
	// Percentages
	// ----------------------------------------

	if (node.type === 'Percentage') {
		return {
			type: 'slider',
			rawString,
			numberValue: Number(node.value),
			unit: '%',
			start,
			end
		};
	}

	// ----------------------------------------
	// Keywords
	// ----------------------------------------

	if (node.type === 'Identifier') {
		const options = getPropertyOptions(property);

		return {
			type: 'select',
			rawString,
			options:
				options.length > 0
					? options
					: undefined,
			start,
			end
		};
	}

	// ----------------------------------------
	// Unsupported functions
	// ----------------------------------------

	if (node.type === 'Function') {
		return {
			type: 'text',
			rawString,
			start,
			end
		};
	}

	return null;
}

// --------------------------------------------------
// PARSER
// --------------------------------------------------

export function parseStylesheet(
	cssText: string
): UISelector[] {
	try {
		const ast = csstree.parse(cssText, {
			positions: true
		});

		const mergedSelectors: Record<
			string,
			Record<string, UIDeclaration>
		> = {};

		csstree.walk(ast, {
			visit: 'Rule',
			enter(ruleNode: any) {
				processRuleNode(
					ruleNode,
					mergedSelectors
				);
			}
		});

		return Object.entries(
			mergedSelectors
		).map(([selector, declarations]) => ({
			selector,
			declarations:
				Object.values(declarations)
		}));
	} catch (error) {
		console.error(
			'CSS parsing error:',
			error
		);

		return [];
	}
}

// --------------------------------------------------
// RULE PROCESSOR
// --------------------------------------------------

function processRuleNode(
	ruleNode: csstree.Rule,
	accumulator: Record<
		string,
		Record<string, UIDeclaration>
	>
) {
	const selectors = extractSelectors(
		ruleNode.prelude
	);

	if (
		selectors.length === 0 ||
		!ruleNode.block
	) {
		return;
	}

	csstree.walk(ruleNode.block, {
		visit: 'Declaration',
		enter(declarationNode: any) {
			const declaration =
				processDeclarationNode(
					declarationNode
				);

			if (!declaration) return;

			for (const selector of selectors) {
				if (!accumulator[selector]) {
					accumulator[selector] = {};
				}

				accumulator[selector][
					declaration.property
					] = declaration;
			}
		}
	});
}

// --------------------------------------------------
// DECLARATION PROCESSOR
// --------------------------------------------------

function processDeclarationNode(
	declarationNode: csstree.Declaration
): UIDeclaration {
	return {
		property: declarationNode.property,
		label: prettifyProperty(
			declarationNode.property
		),
		controls: processValueNode(
			declarationNode.property,
			declarationNode.value
		)
	};
}

// --------------------------------------------------
// VALUE PROCESSOR
// --------------------------------------------------

function processValueNode(
	property: string,
	valueNode: csstree.CssNode
): UIValueControl[] {
	if (!valueNode || !('children' in valueNode) || !valueNode.children) {
		return [];
	}

	const controls: UIValueControl[] = [];
	const nodesArray = valueNode.children.toArray();

	for (const node of nodesArray) {
		// Because these are the original AST nodes, their loc offsets are already absolute
		// relative to the entire document. We pass '0' as the baseOffset so they stay exact.
		const control = createControl(property, node, csstree.generate(node), 0);

		if (control) {
			controls.push(control);
		}
	}

	// 2. Find a fallback unit from siblings if any exist (e.g., 'px')
	const siblingUnits = controls.map((c) => c.unit).filter((u): u is string => !!u);
	const defaultUnit = siblingUnits[0] || 'px';

	// 3. Second pass: Precision context application per node
	for (let i = 0; i < controls.length; i++) {
		const control = controls[i];
		const originalAstNode = nodesArray[i];

		if (control.type === 'number' && !control.unit) {
			// Check if THIS SPECIFIC TOKEN is allowed to be unitless in this position
			const isUnitless = AllowUnitlessNumber(property, originalAstNode);

			// If the spec demands a length here, apply the fallback unit
			if (!isUnitless) {
				control.fallbackUnit = defaultUnit;
			}
		}
	}

	if (controls.length > 0) {
		return controls;
	}

	// Fallback UI control block if no sub-tokens match
	const rawString = csstree.generate(valueNode);
	const baseOffset = valueNode.loc?.start.offset ?? 0;
	return [
		{
			type: 'text',
			rawString,
			start: baseOffset,
			end: valueNode.loc?.end.offset ?? (baseOffset + rawString.length)
		}
	];
}