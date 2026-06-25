<main class="flex-1 overflow-y-auto bg-white">
	<div class="max-w-4xl mx-auto px-8 py-12 space-y-20">

		<!-- dit is de float -->
		<section id="float" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Float</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>float</code> property places an element to the left or right side of its
				container, allowing other content to wrap around it.
			</p>

			<p class="text-gray-600 leading-relaxed">
				Floated elements are removed from the normal document flow but still affect the
				positioning of surrounding inline content such as text and images. Float was originally
				designed for wrapping text around images, which is still its most common use case today.
				In modern layouts, flexbox and grid are generally preferred over float for building
				full page structures, but float remains useful for specific text-wrap scenarios.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>/* image floated to the left with text wrapping around it */
img {'{'}
	float: left;
	margin-right: 16px;
{'}'}

/* image floated to the right */
img {'{'}
	float: right;
	margin-left: 16px;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The first example floats an image to the left so surrounding text wraps around its
				right side. The second floats it to the right so text wraps around its left side.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Float Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>left — floats the element to the left, content wraps on the right</li>
					<li>right — floats the element to the right, content wraps on the left</li>
					<li>none — removes any float, element returns to normal document flow (default)</li>
					<li>inline-start — floats toward the start of the text direction</li>
					<li>inline-end — floats toward the end of the text direction</li>
				</ul>
			</div>
		</section>

		<!-- dit is de clear -->
		<section id="clear" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Clear</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>clear</code> property controls whether an element is pushed below any
				preceding floated elements.
			</p>

			<p class="text-gray-600 leading-relaxed">
				When an element is floated, it is removed from the normal flow and surrounding
				elements may appear next to it unexpectedly. Using <code>clear</code> on a following
				element forces it to move below the floated element instead of wrapping beside it.
				A common pattern is applying <code>clear: both</code> to a container or footer element
				to ensure it always sits below all floated content above it.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>img {'{'}
	float: left;
{'}'}

/* this element will not wrap next to the float */
p {'{'}
	clear: left;
{'}'}

/* clearfix — forces a container to wrap its floated children */
.container::after {'{'}
	content: "";
	display: block;
	clear: both;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The first example prevents the paragraph from wrapping beside the floated image.
				The second is the classic clearfix technique that forces a container to expand
				around its floated children.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Clear Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>none — element is not pushed down, may appear beside floats (default)</li>
					<li>left — element is pushed below any left-floated elements</li>
					<li>right — element is pushed below any right-floated elements</li>
					<li>both — element is pushed below all floated elements on either side</li>
				</ul>
			</div>
		</section>

		<!-- dit is de object-fit -->
		<section id="object-fit" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Object-Fit</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>object-fit</code> property controls how a replaced element such as an
				<code>img</code> or <code>video</code> is scaled and cropped to fit its container.
			</p>

			<p class="text-gray-600 leading-relaxed">
				By default, images stretch to fill their container which can cause distortion.
				<code>object-fit</code> gives you control over how the content fills the defined
				width and height without losing its natural proportions. It works similarly to
				<code>background-size</code> but applies to actual HTML elements rather than
				CSS background images. The element must have an explicit width and height defined
				for this property to take effect.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>/* fill a container without distortion */
img {'{'}
	width: 300px;
	height: 200px;
	object-fit: cover;
{'}'}

/* fit the full image inside the container */
img {'{'}
	width: 300px;
	height: 200px;
	object-fit: contain;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The first example fills the container completely, cropping the image if needed.
				The second fits the entire image inside the container, leaving empty space if the
				aspect ratios do not match.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Object-Fit Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>fill — stretches the content to fill the container, may distort (default)</li>
					<li>cover — scales the content to fill the container, crops if necessary</li>
					<li>contain — scales the content to fit inside the container, adds empty space if needed</li>
					<li>none — content keeps its original size, may overflow or leave empty space</li>
					<li>scale-down — uses whichever is smaller between none and contain</li>
				</ul>
			</div>
		</section>

		<!-- dit is de object-position -->
		<section id="object-position" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Object-Position</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>object-position</code> property sets the alignment of the content inside
				a replaced element such as an <code>img</code> or <code>video</code> within its container.
			</p>

			<p class="text-gray-600 leading-relaxed">
				It works together with <code>object-fit</code> and behaves similarly to
				<code>background-position</code>. When <code>object-fit: cover</code> crops an image,
				<code>object-position</code> controls which part of the image remains visible.
				For example, setting it to <code>top</code> ensures faces in portrait photos are
				not cropped out. You can use keyword values, percentages, or exact pixel coordinates.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>/* keep the top of the image visible when cropped */
img {'{'}
	width: 300px;
	height: 200px;
	object-fit: cover;
	object-position: top;
{'}'}

/* focus on the right side of the image */
img {'{'}
	width: 300px;
	height: 200px;
	object-fit: cover;
	object-position: right center;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The first example keeps the top portion of the image visible when it is cropped,
				useful for portrait photos where the subject's face is at the top. The second
				focuses on the right side of the image.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Object-Position Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>center — centers the content in both directions (default)</li>
					<li>top — aligns the content to the top edge</li>
					<li>bottom — aligns the content to the bottom edge</li>
					<li>left — aligns the content to the left edge</li>
					<li>right — aligns the content to the right edge</li>
					<li>top right — aligns the content to the top right corner</li>
					<li>50% 50% — same as center using percentage values</li>
					<li>px values — sets a custom position using exact pixel coordinates</li>
				</ul>
			</div>
		</section>

	</div>
</main>