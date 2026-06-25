 <main class="flex-1 overflow-y-auto bg-white">
	<div class="max-w-4xl mx-auto px-8 py-12 space-y-20">

		<!-- dit is de display grid -->
		<section id="display-grid" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Display: Grid</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				Setting <code>display: grid</code> on an element turns it into a grid container,
				enabling the CSS grid layout model for all its direct children.
			</p>

			<p class="text-gray-600 leading-relaxed">
				Unlike flexbox which is one-dimensional, CSS grid is a two-dimensional layout system
				that lets you control both rows and columns at the same time. Once an element becomes
				a grid container, its direct children — called grid items — are automatically placed
				into the defined grid structure.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>.container {'{'}
	display: grid;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This single line turns the element into a grid container. Without defining columns
				or rows, all children are placed in a single column by default.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Display Grid vs Display Inline-Grid</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>grid — the container behaves as a block element, taking up the full width</li>
					<li>inline-grid — the container behaves as an inline element, fitting its content</li>
				</ul>
			</div>
		</section>

		<!-- dit is de grid-template-columns -->
		<section id="grid-template-columns" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Grid-Template-Columns</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>grid-template-columns</code> property defines the number and width of columns in a grid layout.
			</p>

			<p class="text-gray-600 leading-relaxed">
				Each value you provide represents one column track. You can use fixed units like
				<code>px</code>, flexible units like <code>fr</code>, or the <code>repeat()</code>
				function to avoid repetition. The <code>fr</code> unit stands for fraction and distributes
				the available space proportionally between columns.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>.container {'{'}
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
{'}'}

.container {'{'}
	display: grid;
	grid-template-columns: repeat(3, 1fr);
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				Both examples create a grid with three equal-width columns. The <code>repeat()</code>
				function is a shorthand for writing the same value multiple times.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Grid-Template-Columns Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>1fr — one flexible fraction of the available space</li>
					<li>repeat(3, 1fr) — shorthand for three equal columns</li>
					<li>200px 1fr — one fixed column and one flexible column</li>
					<li>repeat(auto-fill, minmax(200px, 1fr)) — responsive columns that fill the row automatically</li>
					<li>auto — column width is determined by its content</li>
				</ul>
			</div>
		</section>

		<!-- dit is de grid-template-rows -->
		<section id="grid-template-rows" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Grid-Template-Rows</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>grid-template-rows</code> property defines the number and height of rows in a grid layout.
			</p>

			<p class="text-gray-600 leading-relaxed">
				It works exactly like <code>grid-template-columns</code> but controls the vertical tracks
				instead. By default, row heights are determined by the content inside them. You can define
				explicit row heights using any length unit or the <code>fr</code> unit, as long as the
				grid container has a defined height.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>.container {'{'}
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 100px 200px;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This example creates a grid with three equal columns, a first row of 100px tall,
				and a second row of 200px tall.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Grid-Template-Rows Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>px — fixed row height in pixels</li>
					<li>fr — flexible fraction of the available height</li>
					<li>auto — row height adjusts to fit its content (default)</li>
					<li>repeat(3, 100px) — shorthand for three rows each 100px tall</li>
					<li>minmax(100px, auto) — row is at least 100px but grows with content</li>
				</ul>
			</div>
		</section>

		<!-- dit is de grid-area -->
		<section id="grid-area" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Grid-Area</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>grid-area</code> property assigns a name to a grid item or defines its exact
				position by specifying which row and column lines it spans.
			</p>

			<p class="text-gray-600 leading-relaxed">
				When used with <code>grid-template-areas</code> on the container, you can assign
				named areas to items and visually map out the entire layout in your CSS. This makes
				complex layouts easy to read and maintain without needing to count line numbers.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>.container {'{'}
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-template-rows: auto 1fr auto;
	grid-template-areas:
		"header header"
		"sidebar main"
		"footer footer";
{'}'}

.header  {'{'} grid-area: header;  {'}'}
.sidebar {'{'} grid-area: sidebar; {'}'}
.main    {'{'} grid-area: main;    {'}'}
.footer  {'{'} grid-area: footer;  {'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This example maps out a classic page layout with a full-width header, a sidebar and
				main content area side by side, and a full-width footer.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Grid-Area Usage</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>named area — assign a label used in <code>grid-template-areas</code></li>
					<li>row-start / column-start / row-end / column-end — place item by line numbers</li>
					<li>span — make an item span multiple rows or columns (e.g. <code>span 2</code>)</li>
					<li>auto — the browser places the item automatically</li>
				</ul>
			</div>
		</section>

		<!-- dit is de gap -->
		<section id="gap" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Gap</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>gap</code> property sets the spacing between rows and columns in a grid layout.
			</p>

			<p class="text-gray-600 leading-relaxed">
				<code>gap</code> is a shorthand for <code>row-gap</code> and <code>column-gap</code>.
				It only adds space between grid tracks, never on the outer edges of the container.
				If one value is provided it applies to both rows and columns. If two values are provided,
				the first sets the row gap and the second sets the column gap.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>.container {'{'}
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 24px;
{'}'}

.container {'{'}
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 16px 32px; /* row-gap | column-gap */
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The first example adds 24px of space between all rows and columns. The second sets
				16px between rows and 32px between columns separately.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Gap Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>px — fixed spacing between grid tracks</li>
					<li>rem — spacing relative to the root font size</li>
					<li>% — spacing relative to the container's width</li>
					<li>row-gap — controls only the vertical spacing between rows</li>
					<li>column-gap — controls only the horizontal spacing between columns</li>
				</ul>
			</div>
		</section>

	</div>
</main>