<main class="flex-1 overflow-y-auto bg-white">
	<div class="max-w-4xl mx-auto px-8 py-12 space-y-20">

		<!-- dit is de font-family -->
		<section id="font-family" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Font-Family</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>font-family</code> property specifies the typeface that should be used for the text of an element.
			</p>

			<p class="text-gray-600 leading-relaxed">
				You can list multiple fonts as a fallback chain. If the first font is not available on the user's device,
				the browser moves to the next one. It is best practice to end the list with a generic family
				like <code>serif</code>, <code>sans-serif</code>, or <code>monospace</code>.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>p {'{'}
	font-family: "Helvetica Neue", Arial, sans-serif;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This example tries to load <code>Helvetica Neue</code> first, falls back to <code>Arial</code>,
				and finally uses any available sans-serif font.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Generic Font Families</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>serif — fonts with small strokes at the ends (e.g. Times New Roman)</li>
					<li>sans-serif — clean fonts without strokes (e.g. Arial)</li>
					<li>monospace — every character has equal width (e.g. Courier New)</li>
					<li>cursive — handwriting-style fonts</li>
					<li>fantasy — decorative fonts</li>
				</ul>
			</div>
		</section>

		<!-- dit is de font-size -->
		<section id="font-size" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Font-Size</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>font-size</code> property sets the size of the text inside an element.
			</p>

			<p class="text-gray-600 leading-relaxed">
				Font sizes can be defined with absolute units like <code>px</code>, or relative units
				like <code>em</code>, <code>rem</code>, and <code>%</code>. Relative units are
				preferred in responsive design because they scale with the user's settings.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>p {'{'}
	font-size: 16px;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This example sets the paragraph text size to 16 pixels.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Font-Size Units</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>px — fixed pixel size</li>
					<li>em — relative to the parent element's font size</li>
					<li>rem — relative to the root element's font size</li>
					<li>% — percentage of the parent's font size</li>
					<li>vw — relative to 1% of the viewport width</li>
				</ul>
			</div>
		</section>

		<!-- dit is de font-weight -->
		<section id="font-weight" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Font-Weight</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>font-weight</code> property sets how thick or thin the characters of a text should appear.
			</p>

			<p class="text-gray-600 leading-relaxed">
				You can use keyword values like <code>normal</code> and <code>bold</code>, or numeric values
				ranging from 100 to 900. Not all fonts support every weight — if a weight is unavailable,
				the browser will use the closest available option.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>h1 {'{'}
	font-weight: bold;
{'}'}

p {'{'}
	font-weight: 400;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				<code>bold</code> is equivalent to <code>700</code>, and <code>normal</code> is equivalent to <code>400</code>.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Font-Weight Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>100 — Thin</li>
					<li>300 — Light</li>
					<li>400 — Normal</li>
					<li>500 — Medium</li>
					<li>700 — Bold</li>
					<li>900 — Black</li>
				</ul>
			</div>
		</section>

		<!-- dit is de line-height -->
		<section id="line-height" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Line-Height</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>line-height</code> property sets the vertical spacing between lines of text.
			</p>

			<p class="text-gray-600 leading-relaxed">
				A comfortable line height improves readability. It can be set as a unitless number,
				a percentage, or an explicit length. Using a unitless value like <code>1.5</code> is
				recommended because it scales proportionally with the font size.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>p {'{'}
	line-height: 1.6;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This example sets the line height to 1.6 times the font size, which is a common
				value for body text readability.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Line-Height Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>normal — browser default (usually around 1.2)</li>
					<li>1.5 — comfortable spacing for body text</li>
					<li>2 — double spacing</li>
					<li>24px — fixed pixel spacing</li>
					<li>150% — percentage relative to font size</li>
				</ul>
			</div>
		</section>

		<!-- dit is de text-align -->
		<section id="text-align" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Text-Align</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>text-align</code> property sets the horizontal alignment of text inside an element.
			</p>

			<p class="text-gray-600 leading-relaxed">
				Text alignment affects how the content is distributed across the width of its container.
				It only works on block-level elements or elements with a defined width.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>h1 {'{'}
	text-align: center;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This example centers the heading text horizontally within its container.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Text-Align Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>left — aligns text to the left (default)</li>
					<li>right — aligns text to the right</li>
					<li>center — centers the text</li>
					<li>justify — stretches lines so each line has equal width</li>
				</ul>
			</div>
		</section>

		<!-- dit is de text-decoration -->
		<section id="text-decoration" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Text-Decoration</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>text-decoration</code> property adds or removes decorative lines on text.
			</p>

			<p class="text-gray-600 leading-relaxed">
				It is commonly used to remove the default underline from links, or to add
				underlines, overlines, and strikethroughs to text elements.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>a {'{'}
	text-decoration: none;
{'}'}

del {'{'}
	text-decoration: line-through;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The first example removes the underline from links. The second adds a strikethrough to deleted text.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Text-Decoration Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>none — removes any decoration</li>
					<li>underline — adds a line below the text</li>
					<li>overline — adds a line above the text</li>
					<li>line-through — adds a strikethrough</li>
				</ul>
			</div>
		</section>

		<!-- dit is de text-transform -->
		<section id="text-transform" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Text-Transform</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>text-transform</code> property controls the capitalization of text.
			</p>

			<p class="text-gray-600 leading-relaxed">
				It can be used to make text uppercase, lowercase, or capitalize the first letter of
				each word — without changing the actual content in the HTML.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>h2 {'{'}
	text-transform: uppercase;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This example displays the heading text in all capital letters, regardless of how it was written in the HTML.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Text-Transform Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>none — no transformation, displays text as written</li>
					<li>uppercase — converts all characters to uppercase</li>
					<li>lowercase — converts all characters to lowercase</li>
					<li>capitalize — capitalizes the first letter of each word</li>
				</ul>
			</div>
		</section>

	</div>
</main>