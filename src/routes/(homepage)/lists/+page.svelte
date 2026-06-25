<main class="flex-1 overflow-y-auto bg-white">
	<div class="max-w-4xl mx-auto px-8 py-12 space-y-20">

		<!-- dit is de list-style -->
		<section id="list-style" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">List-Style</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>list-style</code> property is a shorthand for setting all list-related
				styling properties at once.
			</p>

			<p class="text-gray-600 leading-relaxed">
				It combines <code>list-style-type</code>, <code>list-style-position</code>, and
				<code>list-style-image</code> into a single declaration. You can provide one, two,
				or all three values in any order. It is commonly used to quickly remove the default
				styling from a list by setting it to <code>none</code>.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>ul {'{'}
	list-style: none;
{'}'}

ul {'{'}
	list-style: square inside;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The first example removes all list styling entirely. The second sets square markers
				positioned inside the content area of the list.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">List-Style Shorthand Order</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>list-style-type — the marker style (e.g. disc, square, decimal)</li>
					<li>list-style-position — whether the marker is inside or outside the content</li>
					<li>list-style-image — a custom image used as the marker</li>
					<li>none — removes all list styling at once</li>
				</ul>
			</div>
		</section>

		<!-- dit is de list-style-type -->
		<section id="list-style-type" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">List-Style-Type</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>list-style-type</code> property sets the appearance of the marker on list items.
			</p>

			<p class="text-gray-600 leading-relaxed">
				By default, unordered lists use a filled circle disc marker and ordered lists use
				decimal numbers. You can change this to a wide variety of other marker styles,
				or remove it entirely by setting the value to <code>none</code>. This property
				can be applied to both the list container and individual list items.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>ul {'{'}
	list-style-type: square;
{'}'}

ol {'{'}
	list-style-type: upper-roman;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The first example changes unordered list markers to squares. The second uses
				uppercase Roman numerals for an ordered list.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common List-Style-Type Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>disc — filled circle, default for unordered lists</li>
					<li>circle — hollow circle</li>
					<li>square — filled square</li>
					<li>decimal — numbers 1, 2, 3, default for ordered lists</li>
					<li>decimal-leading-zero — numbers 01, 02, 03</li>
					<li>lower-alpha — lowercase letters a, b, c</li>
					<li>upper-alpha — uppercase letters A, B, C</li>
					<li>lower-roman — lowercase roman numerals i, ii, iii</li>
					<li>upper-roman — uppercase roman numerals I, II, III</li>
					<li>none — removes the marker entirely</li>
				</ul>
			</div>
		</section>

		<!-- dit is de list-style-position -->
		<section id="list-style-position" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">List-Style-Position</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>list-style-position</code> property controls whether the list marker
				appears inside or outside the content area of the list item.
			</p>

			<p class="text-gray-600 leading-relaxed">
				By default, markers are placed outside the content area, meaning they sit to the
				left of the text and do not affect text flow. Setting the value to <code>inside</code>
				moves the marker into the content area, so it flows with the text. This is visible
				when list items wrap onto multiple lines — with <code>outside</code>, the wrapped
				text aligns under the first line, while with <code>inside</code> it aligns under
				the marker.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>ul {'{'}
	list-style-position: outside;
{'}'}

ul {'{'}
	list-style-position: inside;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The first example keeps markers outside the text block, which is the default browser behavior.
				The second moves the marker inside, making it part of the text flow.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">List-Style-Position Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>outside — marker sits outside the content area, text wraps under the first line (default)</li>
					<li>inside — marker is part of the content area, text wraps under the marker</li>
				</ul>
			</div>
		</section>

	</div>
</main>