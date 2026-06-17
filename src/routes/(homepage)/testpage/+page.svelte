<main class="flex-1 overflow-y-auto bg-white">
	<div class="max-w-4xl mx-auto px-8 py-12 space-y-20">

		<!-- dit is de element -->
		<section id="element" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Element Selectors</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				An HTML element is defined by a start tag, some content, and an end tag.
				An element selector targets all HTML elements of a specific type.
			</p>

			<p class="text-gray-600 leading-relaxed">
				Element selectors are the most basic CSS selectors. They apply styles to
				every occurrence of a specific HTML tag such as paragraphs, headings,
				images, or buttons.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>p {'{'}
	color: blue;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This example changes the text color of every paragraph element on the page.
			</p>
		</section>

		<!-- dit is de class -->
		<section id="class" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Class Selectors</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				A class selector targets elements that contain a specific class attribute.
			</p>

			<p class="text-gray-600 leading-relaxed">
				Classes can be reused across multiple elements, making them one of the
				most commonly used selector types in modern web development.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>.button {'{'}
	background-color: blue;
	color: white;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This selector applies styles to every element with the class
				<code>.button</code>.
			</p>
		</section>

		<!-- dit is de id -->
		<section id="id" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">ID Selectors</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				An ID selector targets a single unique element using its ID attribute.
			</p>

			<p class="text-gray-600 leading-relaxed">
				IDs should only be used once per page. They have a higher specificity
				than classes and element selectors.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>#header {'{'}
	background-color: black;
	color: white;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This selector targets the element with the ID
				<code>header</code>.
			</p>
		</section>

		<!-- dit is de attribute selectors -->
		<section id="attribute-selectors" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Attribute Selectors</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				Attribute selectors target elements based on their attributes or
				attribute values.
			</p>

			<p class="text-gray-600 leading-relaxed">
				They allow developers to style elements without adding extra classes
				or IDs.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>a[target="_blank"] {'{'}
	color: red;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This example styles links that open in a new browser tab.
			</p>
		</section>

		<!-- dit is de pseudo classes -->
		<section id="pseudo-classes" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Pseudo-Classes</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				A pseudo-class defines a special state of an element.
			</p>

			<p class="text-gray-600 leading-relaxed">
				Pseudo-classes are commonly used to style elements when users interact
				with them or when they match a certain condition.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>button:hover {'{'}
	background-color: green;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The <code>:hover</code> pseudo-class applies styles when the mouse
				pointer is over an element.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Pseudo-Classes</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>:hover</li>
					<li>:focus</li>
					<li>:first-child</li>
					<li>:last-child</li>
					<li>:nth-child()</li>
				</ul>
			</div>
		</section>

		<!-- dit is de pseudo elements -->
		<section id="pseudo-elements" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Pseudo-Elements</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				A pseudo-element targets a specific part of an element.
			</p>

			<p class="text-gray-600 leading-relaxed">
				Unlike pseudo-classes, pseudo-elements allow you to style portions of
				content such as the first letter, first line, or generated content.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>p::first-letter {'{'}
	font-size: 2rem;
	color: red;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The <code>::first-letter</code> pseudo-element styles only the first
				letter of a paragraph.
			</p>

			<div class="bg-gray-100 border border-gray-100 rounded-lg p-4">
				<h3 class="font-semibold mb-2">Common Pseudo-Elements</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>::before</li>
					<li>::after</li>
					<li>::first-letter</li>
					<li>::first-line</li>
					<li>::selection</li>
				</ul>
			</div>
		</section>

	</div>
</main>