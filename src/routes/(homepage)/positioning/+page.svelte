<main class="flex-1 overflow-y-auto bg-white">
	<div class="max-w-4xl mx-auto px-8 py-12 space-y-20">

		<!-- dit is de position -->
		<section id="position" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Position</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>position</code> property specifies how an element is positioned in the document.
			</p>

			<p class="text-gray-600 leading-relaxed">
				By default, elements follow the normal document flow. Changing the position value allows
				you to place elements precisely using the <code>top</code>, <code>right</code>,
				<code>bottom</code>, and <code>left</code> properties. The behavior of those offset
				properties depends entirely on which position value is set.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>div {'{'}
	position: absolute;
	top: 20px;
	left: 40px;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This example removes the element from the normal flow and places it 20px from the top
				and 40px from the left of its nearest positioned ancestor.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Position Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>static — default, element follows normal document flow, offset properties have no effect</li>
					<li>relative — element stays in flow but can be offset relative to its original position</li>
					<li>absolute — removed from flow, positioned relative to the nearest positioned ancestor</li>
					<li>fixed — removed from flow, positioned relative to the browser viewport</li>
					<li>sticky — stays in flow until a scroll threshold is reached, then acts like fixed</li>
				</ul>
			</div>
		</section>

		<!-- dit is de top -->
		<section id="top" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Top</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>top</code> property sets the distance between an element and the top edge of its positioning context.
			</p>

			<p class="text-gray-600 leading-relaxed">
				The <code>top</code> property only has an effect when the element's <code>position</code> is set to
				<code>relative</code>, <code>absolute</code>, <code>fixed</code>, or <code>sticky</code>.
				For <code>relative</code> elements it offsets from the element's natural position.
				For <code>absolute</code> and <code>fixed</code> elements it offsets from the positioning ancestor or viewport.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>div {'{'}
	position: absolute;
	top: 50px;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This example places the element 50 pixels from the top edge of its nearest positioned ancestor.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Top Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>px — fixed distance from the top edge</li>
					<li>% — percentage relative to the height of the containing block</li>
					<li>auto — browser determines the position (default)</li>
					<li>negative values — moves the element upward beyond the top edge</li>
				</ul>
			</div>
		</section>

		<!-- dit is de right -->
		<section id="right" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Right</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>right</code> property sets the distance between an element and the right edge of its positioning context.
			</p>

			<p class="text-gray-600 leading-relaxed">
				Like <code>top</code>, the <code>right</code> property only works when a <code>position</code> value
				other than <code>static</code> is set. When both <code>left</code> and <code>right</code> are defined
				on the same element, <code>left</code> takes priority in left-to-right layouts.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>div {'{'}
	position: fixed;
	right: 20px;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This example pins the element 20 pixels from the right edge of the viewport.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Right Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>px — fixed distance from the right edge</li>
					<li>% — percentage relative to the width of the containing block</li>
					<li>auto — browser determines the position (default)</li>
					<li>negative values — moves the element beyond the right edge</li>
				</ul>
			</div>
		</section>

		<!-- dit is de bottom -->
		<section id="bottom" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Bottom</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>bottom</code> property sets the distance between an element and the bottom edge of its positioning context.
			</p>

			<p class="text-gray-600 leading-relaxed">
				The <code>bottom</code> property behaves the same way as <code>top</code> but works from the opposite direction.
				When both <code>top</code> and <code>bottom</code> are set at the same time, <code>top</code> takes
				priority unless a height is not defined, in which case both values stretch the element.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>div {'{'}
	position: fixed;
	bottom: 0;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This example pins the element to the very bottom of the viewport, commonly used for sticky footers or chat widgets.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Bottom Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>0 — flush against the bottom edge</li>
					<li>px — fixed distance from the bottom edge</li>
					<li>% — percentage relative to the height of the containing block</li>
					<li>auto — browser determines the position (default)</li>
					<li>negative values — moves the element below the bottom edge</li>
				</ul>
			</div>
		</section>

		<!-- dit is de left -->
		<section id="left" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Left</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>left</code> property sets the distance between an element and the left edge of its positioning context.
			</p>

			<p class="text-gray-600 leading-relaxed">
				The <code>left</code> property works in the same way as <code>right</code> but from the opposite side.
				It is commonly used together with <code>top</code> to precisely place absolutely or
				fixed positioned elements anywhere on the page.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>div {'{'}
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This is a common technique to horizontally center an absolutely positioned element
				by combining <code>left: 50%</code> with a negative <code>translateX</code>.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Left Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>px — fixed distance from the left edge</li>
					<li>% — percentage relative to the width of the containing block</li>
					<li>auto — browser determines the position (default)</li>
					<li>negative values — moves the element beyond the left edge</li>
				</ul>
			</div>
		</section>

		<!-- dit is de z-index -->
		<section id="z-index" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Z-Index</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>z-index</code> property controls the stacking order of positioned elements along the z-axis.
			</p>

			<p class="text-gray-600 leading-relaxed">
				Elements with a higher <code>z-index</code> appear in front of elements with a lower value.
				<code>z-index</code> only works on elements that have a <code>position</code> value other than
				<code>static</code>. When elements overlap, <code>z-index</code> determines which one is
				displayed on top.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>.modal {'{'}
	position: fixed;
	z-index: 100;
{'}'}

.overlay {'{'}
	position: fixed;
	z-index: 99;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This example places the modal on top of the overlay because it has a higher <code>z-index</code> value.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Z-Index Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>0 — default stacking order</li>
					<li>1 — slightly above normal stacked elements</li>
					<li>10 — commonly used for dropdowns and tooltips</li>
					<li>100 — commonly used for modals and overlays</li>
					<li>-1 — places the element behind its parent or siblings</li>
					<li>9999 — places the element above nearly everything on the page</li>
				</ul>
			</div>
		</section>

	</div>
</main>