<main class="flex-1 overflow-y-auto bg-white">
	<div class="max-w-4xl mx-auto px-8 py-12 space-y-20">

		<!-- dit is de border-collapse -->
		<section id="border-collapse" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Border-Collapse</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>border-collapse</code> property controls whether table borders are separated
				or merged into a single border.
			</p>

			<p class="text-gray-600 leading-relaxed">
				By default, each table cell has its own individual border, resulting in a double border
				between adjacent cells. Setting <code>border-collapse: collapse</code> merges those
				borders into one clean single line. This is the most commonly used setting when
				styling tables in modern web development.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>table {'{'}
	border-collapse: collapse;
{'}'}

table {'{'}
	border-collapse: separate;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The first example merges all cell borders into a single border. The second keeps
				each cell border separate, which is the default browser behavior.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Border-Collapse Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>collapse — adjacent borders are merged into a single border</li>
					<li>separate — each cell has its own individual border (default)</li>
				</ul>
			</div>
		</section>

		<!-- dit is de border-spacing -->
		<section id="border-spacing" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Border-Spacing</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>border-spacing</code> property sets the distance between the borders of
				adjacent table cells.
			</p>

			<p class="text-gray-600 leading-relaxed">
				This property only has an effect when <code>border-collapse</code> is set to
				<code>separate</code>. You can provide one value to apply equal spacing on all sides,
				or two values to set horizontal and vertical spacing independently. It is similar to
				<code>gap</code> in flexbox and grid, but specifically for tables.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>table {'{'}
	border-collapse: separate;
	border-spacing: 8px;
{'}'}

table {'{'}
	border-collapse: separate;
	border-spacing: 16px 8px; /* horizontal | vertical */
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The first example adds 8px of space between all cell borders. The second sets
				16px of horizontal spacing and 8px of vertical spacing between cells.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Border-Spacing Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>0 — removes all spacing between cells</li>
					<li>px — fixed spacing between cell borders</li>
					<li>em / rem — spacing relative to the font size</li>
					<li>two values — first sets horizontal spacing, second sets vertical spacing</li>
				</ul>
			</div>
		</section>

		<!-- dit is de table-layout -->
		<section id="table-layout" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Table-Layout</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>table-layout</code> property defines the algorithm the browser uses to
				calculate the width of table columns.
			</p>

			<p class="text-gray-600 leading-relaxed">
				By default, the browser uses the <code>auto</code> algorithm which measures all content
				in every cell before determining column widths. This can be slow for large tables.
				Setting <code>table-layout: fixed</code> makes the browser calculate column widths
				based only on the first row, which is much faster and gives you more predictable
				control over column sizes when combined with an explicit <code>width</code> on the table.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>table {'{'}
	table-layout: fixed;
	width: 100%;
{'}'}

td {'{'}
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This is a common pattern for data tables — <code>fixed</code> layout with a full width
				and overflow handling on cells to prevent long content from breaking the layout.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Table-Layout Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>auto — column widths are determined by the content of all cells (default)</li>
					<li>fixed — column widths are determined by the first row or defined widths, ignoring cell content</li>
				</ul>
			</div>
		</section>

	</div>
</main>