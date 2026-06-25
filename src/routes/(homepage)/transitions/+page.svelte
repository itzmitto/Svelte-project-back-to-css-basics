
<main class="flex-1 overflow-y-auto bg-white">
	<div class="max-w-4xl mx-auto px-8 py-12 space-y-20">

		<!-- dit is de transition -->
		<section id="transition" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Transition</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>transition</code> property is a shorthand that allows CSS property changes
				to animate smoothly over a given duration instead of changing instantly.
			</p>

			<p class="text-gray-600 leading-relaxed">
				Without a transition, any change to a CSS property — such as a color on hover —
				happens immediately. Adding a transition makes that change animate gradually between
				the start and end values. The shorthand combines the property to animate, the duration,
				the timing function, and an optional delay into a single declaration. Multiple transitions
				can be applied at once by separating them with a comma.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>button {'{'}
	background-color: blue;
	transition: background-color 0.3s ease;
{'}'}

button:hover {'{'}
	background-color: green;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This example smoothly animates the background color from blue to green over 0.3
				seconds when the user hovers over the button.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Transition Shorthand Order</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>property — the CSS property to animate (e.g. <code>background-color</code>, <code>transform</code>)</li>
					<li>duration — how long the transition takes (e.g. <code>0.3s</code>)</li>
					<li>timing-function — the speed curve of the animation (e.g. <code>ease</code>, <code>linear</code>)</li>
					<li>delay — how long to wait before the transition starts (e.g. <code>0.1s</code>)</li>
					<li>all — animates every property that changes at the same time</li>
				</ul>
			</div>
		</section>

		<!-- dit is de transition-duration -->
		<section id="transition-duration" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Transition-Duration</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>transition-duration</code> property sets how long a transition animation
				takes to complete from start to finish.
			</p>

			<p class="text-gray-600 leading-relaxed">
				The value is written in seconds (<code>s</code>) or milliseconds (<code>ms</code>).
				If no duration is set, the default value is <code>0s</code>, which means the change
				happens instantly with no visible animation. When multiple transitions are defined,
				you can provide multiple duration values separated by commas to control each one individually.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>div {'{'}
	transition-property: background-color;
	transition-duration: 0.5s;
{'}'}

div {'{'}
	transition-property: background-color, transform;
	transition-duration: 0.3s, 1s;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The first example animates the background color over half a second. The second sets
				a different duration for each property — 0.3s for the color and 1s for the transform.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Transition-Duration Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>0s — no animation, change happens instantly (default)</li>
					<li>0.1s — very fast, subtle micro-interaction</li>
					<li>0.3s — fast, commonly used for hover effects</li>
					<li>0.5s — medium speed, smooth but noticeable</li>
					<li>1s — slow, used for larger or more dramatic animations</li>
					<li>ms — milliseconds can also be used (e.g. <code>300ms</code> equals <code>0.3s</code>)</li>
				</ul>
			</div>
		</section>

		<!-- dit is de transition-delay -->
		<section id="transition-delay" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Transition-Delay</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>transition-delay</code> property sets how long the browser waits before
				starting a transition animation.
			</p>

			<p class="text-gray-600 leading-relaxed">
				By default there is no delay and the transition starts immediately when the property
				changes. Adding a delay can be useful for staggering multiple animations or preventing
				transitions from triggering on accidental quick hovers. Like
				<code>transition-duration</code>, multiple delay values can be provided when animating
				multiple properties at the same time. Negative values are also allowed — they make the
				transition start partway through as if it had already been running.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>div {'{'}
	transition-property: background-color;
	transition-duration: 0.3s;
	transition-delay: 0.2s;
{'}'}

div {'{'}
	transition-property: background-color, transform;
	transition-duration: 0.3s;
	transition-delay: 0s, 0.5s;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The first example waits 0.2 seconds before starting the animation. The second starts
				the background color transition immediately but delays the transform animation by 0.5 seconds.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Transition-Delay Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>0s — no delay, transition starts immediately (default)</li>
					<li>0.1s — very short delay, barely noticeable</li>
					<li>0.2s — slight delay, useful for preventing accidental hover triggers</li>
					<li>0.5s — noticeable delay, useful for staggered animations</li>
					<li>negative values — transition starts mid-way as if it had already begun</li>
					<li>ms — milliseconds can also be used (e.g. <code>200ms</code> equals <code>0.2s</code>)</li>
				</ul>
			</div>
		</section>

	</div>
</main>