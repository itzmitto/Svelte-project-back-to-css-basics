<main class="flex-1 overflow-y-auto bg-white">
	<div class="max-w-4xl mx-auto px-8 py-12 space-y-20">

		<!-- dit is de media queries -->
		<section id="media-queries" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Media Queries</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				Media queries allow you to apply different CSS styles based on the characteristics
				of the user's device, such as screen width, height, or orientation.
			</p>

			<p class="text-gray-600 leading-relaxed">
				They are the foundation of responsive web design. By wrapping CSS rules inside a
				<code>@media</code> block, those styles only apply when the specified condition is met.
				The most common use case is changing the layout at certain screen widths — known as
				breakpoints. Media queries can target many conditions including screen width, height,
				orientation, resolution, and whether the user prefers dark mode.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>/* applies to all screens */
p {'{'}
	font-size: 16px;
{'}'}

/* applies only when screen is 768px or wider */
@media (min-width: 768px) {'{'}
	p {'{'}
		font-size: 20px;
	{'}'}
{'}'}

/* applies only when screen is 480px or narrower */
@media (max-width: 480px) {'{'}
	p {'{'}
		font-size: 14px;
	{'}'}
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This example increases the font size on larger screens and decreases it on smaller
				screens by using <code>min-width</code> and <code>max-width</code> breakpoints.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Media Query Conditions</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>min-width — applies styles when the screen is at least this wide</li>
					<li>max-width — applies styles when the screen is at most this wide</li>
					<li>min-height / max-height — targets the height of the viewport</li>
					<li>orientation: portrait — applies when the device is taller than it is wide</li>
					<li>orientation: landscape — applies when the device is wider than it is tall</li>
					<li>prefers-color-scheme: dark — applies when the user has dark mode enabled</li>
					<li>prefers-reduced-motion — applies when the user has reduced motion enabled</li>
				</ul>
			</div>
		</section>

		<!-- dit is de container queries -->
		<section id="container-queries" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Container Queries</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				Container queries allow you to apply styles to an element based on the size of its
				parent container rather than the size of the browser viewport.
			</p>

			<p class="text-gray-600 leading-relaxed">
				Media queries respond to the viewport, which means all components on the page react
				to the same breakpoints. Container queries solve this by letting each component
				respond to its own available space. This makes components truly reusable —
				a card component can rearrange itself whether it is placed in a narrow sidebar or a
				wide main content area, without needing separate media query breakpoints.
				To use container queries, the parent element must first be defined as a container
				using <code>container-type</code>.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>.card-wrapper {'{'}
	container-type: inline-size;
{'}'}

/* applies when the container is at least 400px wide */
@container (min-width: 400px) {'{'}
	.card {'{'}
		display: flex;
		flex-direction: row;
	{'}'}
{'}'}

/* applies when the container is narrower than 400px */
@container (max-width: 399px) {'{'}
	.card {'{'}
		display: flex;
		flex-direction: column;
	{'}'}
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This example switches the card layout from a column to a row when its container
				reaches 400px wide, regardless of the viewport size.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Container Query Values and Properties</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>container-type: inline-size — enables querying the container's width</li>
					<li>container-type: size — enables querying both width and height</li>
					<li>container-name — assigns a name to a container for targeted queries</li>
					<li>min-width — applies styles when the container is at least this wide</li>
					<li>max-width — applies styles when the container is at most this wide</li>
				</ul>
			</div>
		</section>

		<!-- dit is de aspect-ratio -->
		<section id="aspect-ratio" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Aspect-Ratio</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>aspect-ratio</code> property sets a preferred width-to-height ratio for an element,
				so it maintains its proportions as it scales.
			</p>

			<p class="text-gray-600 leading-relaxed">
				Before <code>aspect-ratio</code> existed, maintaining proportional dimensions required
				tricky padding hacks. Now you can simply declare the ratio and the browser calculates
				the missing dimension automatically. It is especially useful for video embeds, image
				containers, cards, and any element that should scale proportionally at any screen size.
				If both a width and a height are explicitly set, the aspect ratio is ignored.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>/* 16:9 video embed */
.video-container {'{'}
	width: 100%;
	aspect-ratio: 16 / 9;
{'}'}

/* perfect square */
.avatar {'{'}
	width: 80px;
	aspect-ratio: 1 / 1;
{'}'}

/* portrait card */
.card {'{'}
	width: 300px;
	aspect-ratio: 3 / 4;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The first example creates a responsive 16:9 video container that scales with its parent.
				The second creates a perfect square avatar, and the third a portrait-style card.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Aspect-Ratio Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>16 / 9 — widescreen video format</li>
					<li>4 / 3 — traditional screen and photo format</li>
					<li>1 / 1 — perfect square</li>
					<li>3 / 4 — portrait orientation, common for cards and posters</li>
					<li>2 / 1 — wide banner format</li>
					<li>auto — the element uses its natural dimensions (default)</li>
				</ul>
			</div>
		</section>

	</div>
</main>