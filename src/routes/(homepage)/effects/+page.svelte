<main class="flex-1 overflow-y-auto bg-white">
	<div class="max-w-4xl mx-auto px-8 py-12 space-y-20">

		<!-- dit is de box-shadow -->
		<section id="box-shadow" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Box-Shadow</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>box-shadow</code> property adds one or more shadow effects around an element's box.
			</p>

			<p class="text-gray-600 leading-relaxed">
				A box shadow is defined by a horizontal offset, a vertical offset, an optional blur radius,
				an optional spread radius, and a color. Positive offset values move the shadow to the right
				and downward, while negative values move it to the left and upward. Multiple shadows can
				be stacked by separating them with a comma. Adding the <code>inset</code> keyword moves
				the shadow inside the element instead of outside.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>/* horizontal | vertical | blur | color */
div {'{'}
	box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
{'}'}

/* inset shadow */
div {'{'}
	box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
{'}'}

/* multiple shadows */
div {'{'}
	box-shadow: 2px 2px 4px rgba(0,0,0,0.1),
				8px 8px 16px rgba(0,0,0,0.05);
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The first example adds a soft drop shadow below and to the right of the element.
				The second places the shadow inside the element. The third stacks two shadows for
				a layered depth effect.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Box-Shadow Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>offset-x — horizontal distance of the shadow (positive = right, negative = left)</li>
					<li>offset-y — vertical distance of the shadow (positive = down, negative = up)</li>
					<li>blur-radius — how blurred the shadow is, higher value means softer edge</li>
					<li>spread-radius — how much the shadow expands or shrinks</li>
					<li>color — the color of the shadow, often using rgba for transparency</li>
					<li>inset — moves the shadow to the inside of the element</li>
					<li>none — removes all shadows (default)</li>
				</ul>
			</div>
		</section>

		<!-- dit is de text-shadow -->
		<section id="text-shadow" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Text-Shadow</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>text-shadow</code> property adds one or more shadow effects to the text
				content of an element.
			</p>

			<p class="text-gray-600 leading-relaxed">
				It works similarly to <code>box-shadow</code> but applies only to the text characters
				themselves rather than the element's box. It accepts a horizontal offset, a vertical
				offset, an optional blur radius, and a color. There is no spread radius and no
				<code>inset</code> keyword for text shadows. Multiple shadows can be layered by
				separating them with a comma, which can be used to create glowing or embossed text effects.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>/* horizontal | vertical | blur | color */
h1 {'{'}
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
{'}'}

/* glowing effect */
h1 {'{'}
	text-shadow: 0 0 8px rgba(255, 255, 0, 0.8);
{'}'}

/* multiple shadows for depth */
h1 {'{'}
	text-shadow: 1px 1px 0 #ccc,
				 2px 2px 0 #bbb,
				 3px 3px 0 #aaa;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The first example adds a soft shadow behind the text. The second creates a glowing
				effect. The third stacks multiple shadows to give the text a 3D layered appearance.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Text-Shadow Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>offset-x — horizontal distance of the shadow</li>
					<li>offset-y — vertical distance of the shadow</li>
					<li>blur-radius — how blurred the shadow is, higher means softer</li>
					<li>color — the color of the shadow, often using rgba for transparency</li>
					<li>multiple shadows — separated by commas for layered effects</li>
					<li>none — removes all text shadows (default)</li>
				</ul>
			</div>
		</section>

		<!-- dit is de filter -->
		<section id="filter" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Filter</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>filter</code> property applies visual effects such as blur, brightness,
				contrast, and grayscale directly to an element and its contents.
			</p>

			<p class="text-gray-600 leading-relaxed">
				Filters are applied to the entire element including its children, background, and
				borders. Multiple filter functions can be combined in a single declaration by
				separating them with a space — the browser applies them in order from left to right.
				Filters are commonly used for image styling, hover effects, and creating disabled
				or loading states.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>/* blur an image */
img {'{'}
	filter: blur(4px);
{'}'}

/* grayscale on hover */
img {'{'}
	filter: grayscale(100%);
{'}'}

/* combine multiple filters */
img {'{'}
	filter: brightness(1.2) contrast(1.1) saturate(1.3);
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The first example blurs the image by 4 pixels. The second turns it fully grayscale.
				The third combines brightness, contrast, and saturation adjustments at the same time.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Filter Functions</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>blur(px) — blurs the element by the given radius</li>
					<li>brightness(%) — adjusts brightness, values above 1 brighten, below 1 darken</li>
					<li>contrast(%) — adjusts contrast, higher values increase difference between light and dark</li>
					<li>grayscale(%) — converts the element to grayscale, 100% is fully gray</li>
					<li>saturate(%) — adjusts color intensity, 0% removes all color</li>
					<li>opacity(%) — same as the opacity property but applied as a filter</li>
					<li>sepia(%) — applies a warm brown sepia tone to the element</li>
					<li>invert(%) — inverts the colors, 100% fully inverts</li>
					<li>drop-shadow() — adds a shadow that follows the shape of the content</li>
					<li>none — removes all filters (default)</li>
				</ul>
			</div>
		</section>

		<!-- dit is de backdrop-filter -->
		<section id="backdrop-filter" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Backdrop-Filter</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>backdrop-filter</code> property applies visual effects to the area behind
				an element rather than to the element itself.
			</p>

			<p class="text-gray-600 leading-relaxed">
				This makes it possible to create frosted glass effects, blurred overlays, and
				translucent panels that let the content behind them show through in a visually
				styled way. For <code>backdrop-filter</code> to be visible, the element must have
				a transparent or semi-transparent background — otherwise the backdrop effect is
				hidden behind the element's own background. It accepts the same filter functions
				as the regular <code>filter</code> property.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>/* frosted glass effect */
.modal {'{'}
	background-color: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(12px);
{'}'}

/* dark blurred overlay */
.overlay {'{'}
	background-color: rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(8px) brightness(0.8);
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The first example creates a frosted glass panel by combining a semi-transparent
				white background with a backdrop blur. The second creates a dark blurred overlay
				that dims and blurs the content behind it.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Backdrop-Filter Functions</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>blur(px) — blurs the content behind the element</li>
					<li>brightness(%) — adjusts the brightness of the backdrop</li>
					<li>contrast(%) — adjusts the contrast of the backdrop</li>
					<li>saturate(%) — adjusts the color intensity of the backdrop</li>
					<li>grayscale(%) — removes color from the backdrop</li>
					<li>sepia(%) — applies a warm tone to the backdrop</li>
					<li>none — removes all backdrop filters (default)</li>
				</ul>
			</div>
		</section>

	</div>
</main>