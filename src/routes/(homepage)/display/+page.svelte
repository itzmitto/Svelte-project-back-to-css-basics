<main class="flex-1 overflow-y-auto bg-white">
	<div class="max-w-4xl mx-auto px-8 py-12 space-y-20">

		<!-- dit is de display -->
		<section id="display" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Display</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>display</code> property defines how an element is rendered in the document layout.
			</p>

			<p class="text-gray-600 leading-relaxed">
				It is one of the most important CSS properties for controlling layout. Every HTML element
				has a default display value — for example, <code>div</code> elements are <code>block</code>
				by default, while <code>span</code> elements are <code>inline</code>. Changing the display
				value completely changes how an element behaves in the flow of the page.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>div {'{'}
	display: flex;
{'}'}

span {'{'}
	display: block;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The first example turns a block element into a flex container. The second makes
				an inline element behave like a block element.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Display Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>block — takes up the full width and starts on a new line</li>
					<li>inline — sits within text flow, no width or height control</li>
					<li>inline-block — sits in text flow but allows width and height</li>
					<li>flex — enables flexbox layout on the element</li>
					<li>grid — enables grid layout on the element</li>
					<li>none — removes the element from the page completely</li>
				</ul>
			</div>
		</section>

		<!-- dit is de visibility -->
		<section id="visibility" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Visibility</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>visibility</code> property shows or hides an element without removing it from the document layout.
			</p>

			<p class="text-gray-600 leading-relaxed">
				Unlike <code>display: none</code>, setting <code>visibility: hidden</code> makes the
				element invisible but it still occupies its original space in the layout. This is useful
				when you want to hide content without causing other elements to shift or reflow.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>div {'{'}
	visibility: hidden;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This example hides the element visually, but the space it occupies remains in the layout.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Visibility Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>visible — the element is shown (default)</li>
					<li>hidden — the element is invisible but still takes up space</li>
					<li>collapse — used in tables to hide rows or columns without affecting layout</li>
				</ul>
			</div>
		</section>

		<!-- dit is de opacity -->
		<section id="opacity" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Opacity</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>opacity</code> property sets the transparency level of an element.
			</p>

			<p class="text-gray-600 leading-relaxed">
				The value ranges from <code>0</code> to <code>1</code>, where <code>0</code> is fully
				transparent and <code>1</code> is fully visible. Unlike <code>visibility: hidden</code>,
				an element with <code>opacity: 0</code> is still interactive — it can still receive
				mouse events and clicks. Opacity also affects all child elements inside the element.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>div {'{'}
	opacity: 0.5;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This example makes the element and all its children 50% transparent.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Opacity Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>0 — fully transparent, element is invisible</li>
					<li>0.25 — 25% visible, mostly transparent</li>
					<li>0.5 — 50% visible, semi-transparent</li>
					<li>0.75 — 75% visible, slightly transparent</li>
					<li>1 — fully visible, no transparency (default)</li>
				</ul>
			</div>
		</section>

		<!-- dit is de overflow -->
		<section id="overflow" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Overflow</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>overflow</code> property controls what happens when content is too large to fit inside its container.
			</p>

			<p class="text-gray-600 leading-relaxed">
				By default, content that overflows will simply spill outside the element's boundaries.
				With <code>overflow</code> you can choose to hide the excess content, add a scrollbar,
				or let it overflow as normal. You can also control each axis separately using
				<code>overflow-x</code> for horizontal and <code>overflow-y</code> for vertical overflow.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>div {'{'}
	width: 200px;
	height: 100px;
	overflow: scroll;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This example adds a scrollbar to the element when its content exceeds 200 by 100 pixels.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Overflow Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>visible — content overflows outside the element (default)</li>
					<li>hidden — overflow is clipped and the excess content is not visible</li>
					<li>scroll — always shows a scrollbar, even if content fits</li>
					<li>auto — only shows a scrollbar when the content actually overflows</li>
					<li>clip — similar to hidden but also blocks programmatic scrolling</li>
				</ul>
			</div>
		</section>

	</div>
</main>