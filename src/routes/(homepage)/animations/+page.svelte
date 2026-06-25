<main class="flex-1 overflow-y-auto bg-white">
	<div class="max-w-4xl mx-auto px-8 py-12 space-y-20">

		<!-- dit is de animation -->
		<section id="animation" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Animation</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>animation</code> property is a shorthand that applies a keyframe animation
				to an element, controlling how it moves, changes, or transforms over time.
			</p>

			<p class="text-gray-600 leading-relaxed">
				Unlike transitions which only animate between two states, animations are defined
				with <code>@keyframes</code> and can have multiple steps at any point during the
				animation. The shorthand combines the animation name, duration, timing function,
				delay, iteration count, and direction into a single declaration. Multiple animations
				can be applied at once by separating them with a comma.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>@keyframes fadeIn {'{'}
	from {'{'}
		opacity: 0;
	{'}'}
	to {'{'}
		opacity: 1;
	{'}'}
{'}'}

div {'{'}
	animation: fadeIn 1s ease 0.2s infinite;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This example defines a <code>fadeIn</code> keyframe animation and applies it to a
				div — running for 1 second with an ease curve, a 0.2 second delay, repeating infinitely.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Animation Shorthand Order</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>animation-name — the name of the @keyframes rule to use</li>
					<li>animation-duration — how long one cycle of the animation takes</li>
					<li>animation-timing-function — the speed curve of the animation</li>
					<li>animation-delay — how long to wait before the animation starts</li>
					<li>animation-iteration-count — how many times the animation repeats</li>
					<li>animation-direction — whether the animation plays forward, backward, or alternates</li>
					<li>animation-fill-mode — what styles apply before and after the animation</li>
				</ul>
			</div>
		</section>

		<!-- dit is de animation-name -->
		<section id="animation-name" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Animation-Name</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>animation-name</code> property specifies the name of the <code>@keyframes</code>
				rule that defines the animation to apply to an element.
			</p>

			<p class="text-gray-600 leading-relaxed">
				The name must match exactly with the identifier defined in the <code>@keyframes</code>
				rule. Without a matching <code>@keyframes</code> rule, no animation will play.
				Multiple animation names can be provided separated by commas to run several
				animations on the same element at once. Setting the value to <code>none</code>
				removes any animation from the element.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>@keyframes slideIn {'{'}
	from {'{'}
		transform: translateX(-100%);
	{'}'}
	to {'{'}
		transform: translateX(0);
	{'}'}
{'}'}

div {'{'}
	animation-name: slideIn;
	animation-duration: 0.5s;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This example links the element to the <code>slideIn</code> keyframe animation,
				which moves the element in from the left side of the screen.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Animation-Name Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>custom name — matches the identifier of a defined @keyframes rule</li>
					<li>none — no animation is applied (default)</li>
					<li>multiple names — separated by commas to run several animations at once</li>
				</ul>
			</div>
		</section>

		<!-- dit is de animation-duration -->
		<section id="animation-duration" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Animation-Duration</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>animation-duration</code> property sets how long one full cycle of an
				animation takes to complete.
			</p>

			<p class="text-gray-600 leading-relaxed">
				The value is written in seconds (<code>s</code>) or milliseconds (<code>ms</code>).
				If no duration is set the default value is <code>0s</code>, which means the animation
				completes instantly and nothing visible happens. When multiple animations are defined,
				you can provide multiple duration values separated by commas to control each one individually.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>div {'{'}
	animation-name: fadeIn;
	animation-duration: 1s;
{'}'}

div {'{'}
	animation-name: fadeIn, slideIn;
	animation-duration: 1s, 0.5s;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The first example runs the animation over one second. The second applies two
				animations with different durations — 1s for <code>fadeIn</code> and 0.5s for <code>slideIn</code>.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Animation-Duration Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>0s — no animation visible, completes instantly (default)</li>
					<li>0.2s — very fast, used for quick micro-animations</li>
					<li>0.5s — fast and smooth, common for entrance animations</li>
					<li>1s — one second, natural and comfortable speed</li>
					<li>2s — slow, used for subtle background or looping animations</li>
					<li>ms — milliseconds can also be used (e.g. <code>500ms</code> equals <code>0.5s</code>)</li>
				</ul>
			</div>
		</section>

		<!-- dit is de animation-timing-function -->
		<section id="animation-timing-function" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Animation-Timing-Function</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>animation-timing-function</code> property defines the speed curve of an
				animation, controlling how it accelerates or decelerates over its duration.
			</p>

			<p class="text-gray-600 leading-relaxed">
				The timing function is applied between each pair of keyframes, not across the entire
				animation as a whole. This means you can define a different timing function inside
				individual keyframe steps for fine-grained control. You can choose from built-in
				keyword values or define a completely custom curve using the <code>cubic-bezier()</code>
				function.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>div {'{'}
	animation-name: slideIn;
	animation-duration: 0.5s;
	animation-timing-function: ease-in-out;
{'}'}

div {'{'}
	animation-name: bounce;
	animation-duration: 1s;
	animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The first example uses the built-in <code>ease-in-out</code> curve for a smooth
				start and end. The second uses a custom cubic-bezier curve to create a bouncy overshoot effect.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Animation-Timing-Function Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>ease — starts slow, speeds up, then slows down at the end (default)</li>
					<li>linear — constant speed throughout the animation</li>
					<li>ease-in — starts slow and gradually speeds up</li>
					<li>ease-out — starts fast and gradually slows down</li>
					<li>ease-in-out — starts slow, speeds up in the middle, then slows down again</li>
					<li>cubic-bezier(x1, y1, x2, y2) — fully custom speed curve</li>
					<li>steps(n) — jumps through the animation in a set number of discrete steps</li>
				</ul>
			</div>
		</section>

	</div>
</main>