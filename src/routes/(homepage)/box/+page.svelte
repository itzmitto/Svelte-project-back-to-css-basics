<main class="flex-1 overflow-y-auto bg-white">
	<div class="max-w-4xl mx-auto px-8 py-12 space-y-20">

		<!-- dit is de width -->
		<section id="width" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Width</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>width</code> property sets the horizontal size of an element.
			</p>

			<p class="text-gray-600 leading-relaxed">
				By default, block elements take up the full width of their parent container.
				You can override this with a fixed value in pixels, a relative percentage,
				or keywords like <code>auto</code>, <code>min-content</code>, and <code>max-content</code>.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>div {'{'}
	width: 400px;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This example sets the element to a fixed width of 400 pixels.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Width Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>px — fixed pixel width</li>
					<li>% — percentage of the parent container's width</li>
					<li>auto — browser calculates the width automatically</li>
					<li>100vw — full width of the viewport</li>
					<li>min-content / max-content — fits the smallest or largest content size</li>
				</ul>
			</div>
		</section>

		<!-- dit is de height -->
		<section id="height" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Height</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>height</code> property sets the vertical size of an element.
			</p>

			<p class="text-gray-600 leading-relaxed">
				By default, an element's height is determined by its content. Setting an explicit height
				can be useful for layout purposes, but be careful — if the content is taller than the
				defined height, it may overflow outside the element.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>div {'{'}
	height: 200px;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This example sets the element to a fixed height of 200 pixels regardless of its content.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Height Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>px — fixed pixel height</li>
					<li>% — percentage of the parent container's height</li>
					<li>auto — height adjusts to fit the content (default)</li>
					<li>100vh — full height of the viewport</li>
					<li>min-height / max-height — sets a minimum or maximum height limit</li>
				</ul>
			</div>
		</section>

		<!-- dit is de margin -->
		<section id="margin" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Margin</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>margin</code> property sets the space outside an element, between the element and its neighbors.
			</p>

			<p class="text-gray-600 leading-relaxed">
				Margins are transparent and push other elements away. You can set all four sides at once
				using the shorthand, or target individual sides with <code>margin-top</code>,
				<code>margin-right</code>, <code>margin-bottom</code>, and <code>margin-left</code>.
				Setting <code>margin: 0 auto</code> is a common technique to horizontally center a block element.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>div {'{'}
	margin: 20px;          /* all sides */
	margin: 10px 20px;     /* top/bottom | left/right */
	margin: 10px 20px 30px 40px; /* top | right | bottom | left */
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The shorthand follows a clockwise order: top, right, bottom, left.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Margin Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>px — fixed space in pixels</li>
					<li>% — percentage relative to the parent's width</li>
					<li>auto — lets the browser calculate the margin, useful for centering</li>
					<li>0 — removes all margin</li>
					<li>negative values — pulls the element closer to or overlapping its neighbor</li>
				</ul>
			</div>
		</section>

		<!-- dit is de padding -->
		<section id="padding" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Padding</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>padding</code> property sets the space between an element's content and its border.
			</p>

			<p class="text-gray-600 leading-relaxed">
				Unlike margin, padding is inside the element and takes on the element's background color.
				Just like margin, you can use the shorthand to set all sides at once, or target each side
				individually with <code>padding-top</code>, <code>padding-right</code>,
				<code>padding-bottom</code>, and <code>padding-left</code>.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>div {'{'}
	padding: 20px;          /* all sides */
	padding: 10px 20px;     /* top/bottom | left/right */
	padding: 10px 20px 30px 40px; /* top | right | bottom | left */
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The same clockwise shorthand applies as with margin: top, right, bottom, left.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Padding Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>px — fixed inner spacing in pixels</li>
					<li>% — percentage relative to the parent's width</li>
					<li>em / rem — relative to the element's or root font size</li>
					<li>0 — removes all padding</li>
				</ul>
			</div>
		</section>

		<!-- dit is de border -->
		<section id="border" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Border</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>border</code> property adds a visible line around an element, between the padding and the margin.
			</p>

			<p class="text-gray-600 leading-relaxed">
				The <code>border</code> shorthand combines three values: the width, the style, and the color.
				The border style is required — without it, no border will be shown. You can also target
				individual sides with <code>border-top</code>, <code>border-right</code>,
				<code>border-bottom</code>, and <code>border-left</code>.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>div {'{'}
	border: 2px solid black;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This example adds a 2 pixel solid black border around the element.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Border-Style Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>solid — a single continuous line</li>
					<li>dashed — a series of short dashes</li>
					<li>dotted — a series of dots</li>
					<li>double — two parallel lines</li>
					<li>none — removes the border entirely</li>
				</ul>
			</div>
		</section>

		<!-- dit is de box-sizing -->
		<section id="box-sizing" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Box-Sizing</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>box-sizing</code> property defines how the total width and height of an element is calculated.
			</p>

			<p class="text-gray-600 leading-relaxed">
				By default, <code>width</code> and <code>height</code> only apply to the content area.
				Padding and border are added on top, which can make sizing unpredictable.
				Setting <code>box-sizing: border-box</code> includes padding and border inside the
				defined width and height, making layouts much easier to manage. Most developers apply
				this globally to all elements.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>* {'{'}
	box-sizing: border-box;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This is a common global reset that makes every element include its padding and border
				within its total width and height.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Box-Sizing Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>content-box — default; padding and border are added outside the width and height</li>
					<li>border-box — padding and border are included inside the width and height</li>
				</ul>
			</div>
		</section>

	</div>
</main>