<main class="flex-1 overflow-y-auto bg-white">
	<div class="max-w-4xl mx-auto px-8 py-12 space-y-20">

		<!-- dit is de transform -->
		<section id="transform" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Transform</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>transform</code> property applies a visual transformation to an element,
				such as moving, rotating, scaling, or skewing it.
			</p>

			<p class="text-gray-600 leading-relaxed">
				Transforms do not affect the document flow — the element still occupies its original
				space in the layout, but it is visually moved or changed on screen. Multiple transform
				functions can be combined in a single declaration by separating them with a space.
				Transforms are also commonly used together with transitions and animations to create
				smooth visual effects.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>div {'{'}
	transform: rotate(45deg);
{'}'}

div {'{'}
	transform: translateX(100px) scale(1.5);
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The first example rotates the element 45 degrees clockwise. The second moves it
				100px to the right and scales it up to 1.5 times its original size at the same time.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Transform Functions</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>translateX(px) — moves the element horizontally</li>
					<li>translateY(px) — moves the element vertically</li>
					<li>translate(x, y) — moves the element both horizontally and vertically</li>
					<li>rotate(deg) — rotates the element clockwise by the given degrees</li>
					<li>scaleX(n) — stretches or shrinks the element horizontally</li>
					<li>scaleY(n) — stretches or shrinks the element vertically</li>
					<li>scale(n) — scales the element uniformly in both directions</li>
					<li>skewX(deg) — tilts the element along the horizontal axis</li>
					<li>skewY(deg) — tilts the element along the vertical axis</li>
					<li>none — removes all applied transforms</li>
				</ul>
			</div>
		</section>

		<!-- dit is de transform-origin -->
		<section id="transform-origin" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Transform-Origin</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>transform-origin</code> property sets the point around which a transformation is applied.
			</p>

			<p class="text-gray-600 leading-relaxed">
				By default, transformations such as rotation and scaling happen from the center of the element.
				With <code>transform-origin</code> you can move that anchor point to any position — for example
				to a corner, an edge, or a completely custom coordinate. This changes the visual result of
				the transformation without moving the element itself.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>div {'{'}
	transform: rotate(45deg);
	transform-origin: top left;
{'}'}

div {'{'}
	transform: rotate(45deg);
	transform-origin: 50% 50%;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The first example rotates the element from its top left corner instead of its center.
				The second is equivalent to the default behavior, rotating around the exact center.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Transform-Origin Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>center — anchor point at the center of the element (default)</li>
					<li>top left — anchor point at the top left corner</li>
					<li>top right — anchor point at the top right corner</li>
					<li>bottom left — anchor point at the bottom left corner</li>
					<li>bottom right — anchor point at the bottom right corner</li>
					<li>50% 50% — same as center using percentage values</li>
					<li>0 0 — same as top left using coordinate values</li>
					<li>px values — sets a custom anchor point using exact pixel coordinates</li>
				</ul>
			</div>
		</section>

	</div>
</main>