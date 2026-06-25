<main class="flex-1 overflow-y-auto bg-white">
	<div class="max-w-4xl mx-auto px-8 py-12 space-y-20">

		<!-- dit is de display flex -->
		<section id="display-flex" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Display: Flex</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				Setting <code>display: flex</code> on an element turns it into a flex container,
				enabling the flexbox layout model for all its direct children.
			</p>

			<p class="text-gray-600 leading-relaxed">
				Flexbox is a one-dimensional layout system that arranges items in either a row or a column.
				Once a container becomes a flex container, its children — called flex items — can be
				aligned, distributed, and sized in powerful ways using additional flex properties.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>.container {'{'}
	display: flex;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This single line turns the element into a flex container. All direct children
				will automatically become flex items arranged in a row by default.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Display Flex vs Display Inline-Flex</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>flex — the container behaves as a block element, taking up the full width</li>
					<li>inline-flex — the container behaves as an inline element, fitting its content</li>
				</ul>
			</div>
		</section>

		<!-- dit is de flex-direction -->
		<section id="flex-direction" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Flex-Direction</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>flex-direction</code> property sets the direction in which flex items are placed inside the flex container.
			</p>

			<p class="text-gray-600 leading-relaxed">
				By default, flex items are laid out in a horizontal row from left to right. Changing
				the direction to <code>column</code> stacks items vertically from top to bottom.
				The <code>-reverse</code> variants flip the order of the items along the same axis.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>.container {'{'}
	display: flex;
	flex-direction: row;
{'}'}

.container {'{'}
	display: flex;
	flex-direction: column;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The first example lays items out horizontally. The second stacks them vertically.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Flex-Direction Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>row — items are placed left to right (default)</li>
					<li>row-reverse — items are placed right to left</li>
					<li>column — items are stacked top to bottom</li>
					<li>column-reverse — items are stacked bottom to top</li>
				</ul>
			</div>
		</section>

		<!-- dit is de justify-content -->
		<section id="justify-content" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Justify-Content</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>justify-content</code> property aligns flex items along the main axis of the flex container.
			</p>

			<p class="text-gray-600 leading-relaxed">
				The main axis runs in the direction set by <code>flex-direction</code> — horizontal for
				<code>row</code> and vertical for <code>column</code>. This property is useful for
				distributing space between items or centering them within the container.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>.container {'{'}
	display: flex;
	justify-content: space-between;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This example spreads flex items evenly, placing the first item at the start
				and the last item at the end of the container.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Justify-Content Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>flex-start — items are packed toward the start of the main axis (default)</li>
					<li>flex-end — items are packed toward the end of the main axis</li>
					<li>center — items are centered along the main axis</li>
					<li>space-between — equal space between items, no space at the edges</li>
					<li>space-around — equal space around each item, half-size space at the edges</li>
					<li>space-evenly — equal space between items and at the edges</li>
				</ul>
			</div>
		</section>

		<!-- dit is de align-items -->
		<section id="align-items" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Align-Items</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>align-items</code> property aligns flex items along the cross axis of the flex container.
			</p>

			<p class="text-gray-600 leading-relaxed">
				The cross axis runs perpendicular to the main axis — so if <code>flex-direction</code> is
				<code>row</code>, the cross axis is vertical. This property controls how items are
				aligned in that direction. A very common pattern is combining <code>justify-content: center</code>
				with <code>align-items: center</code> to perfectly center content both horizontally and vertically.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>.container {'{'}
	display: flex;
	justify-content: center;
	align-items: center;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This is one of the most commonly used flexbox patterns — it centers all flex items
				both horizontally and vertically inside the container.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Align-Items Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>stretch — items stretch to fill the container's cross axis (default)</li>
					<li>flex-start — items are aligned to the start of the cross axis</li>
					<li>flex-end — items are aligned to the end of the cross axis</li>
					<li>center — items are centered along the cross axis</li>
					<li>baseline — items are aligned by their text baseline</li>
				</ul>
			</div>
		</section>

		<!-- dit is de flex-wrap -->
		<section id="flex-wrap" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Flex-Wrap</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>flex-wrap</code> property controls whether flex items are forced onto a single line
				or can wrap onto multiple lines.
			</p>

			<p class="text-gray-600 leading-relaxed">
				By default, all flex items try to fit on one line, even if they overflow the container.
				Setting <code>flex-wrap: wrap</code> allows items to move to the next line when there is
				not enough space. This is especially useful for responsive layouts where the number of
				visible columns should adjust based on screen width.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>.container {'{'}
	display: flex;
	flex-wrap: wrap;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This example allows flex items to wrap onto the next line when the container runs out of space.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Flex-Wrap Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>nowrap — all items stay on a single line, may overflow (default)</li>
					<li>wrap — items wrap onto the next line from top to bottom</li>
					<li>wrap-reverse — items wrap onto the next line from bottom to top</li>
				</ul>
			</div>
		</section>

		<!-- dit is de gap -->
		<section id="gap" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Gap</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>gap</code> property sets the spacing between flex items inside a flex container.
			</p>

			<p class="text-gray-600 leading-relaxed">
				<code>gap</code> is a shorthand for <code>row-gap</code> and <code>column-gap</code>.
				It only adds space between items, never on the outer edges of the container. This makes it
				more predictable than using margins on individual flex items, and it works with both
				flexbox and grid layouts.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>.container {'{'}
	display: flex;
	gap: 16px;
{'}'}

.container {'{'}
	display: flex;
	gap: 16px 32px; /* row-gap | column-gap */
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The first example adds 16px of space between all flex items. The second sets different
				spacing for rows and columns separately.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Gap Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>px — fixed spacing between items</li>
					<li>rem — spacing relative to the root font size</li>
					<li>% — spacing relative to the container's width</li>
					<li>row-gap — controls only the vertical spacing between rows</li>
					<li>column-gap — controls only the horizontal spacing between columns</li>
				</ul>
			</div>
		</section>

	</div>
</main>