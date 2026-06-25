<main class="flex-1 overflow-y-auto bg-white">
	<div class="max-w-4xl mx-auto px-8 py-12 space-y-20">

		<!-- dit is de color -->
		<section id="color" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Color</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>color</code> property sets the foreground color of an element's text content.
			</p>

			<p class="text-gray-600 leading-relaxed">
				Colors can be defined using named values, HEX codes, RGB, RGBA, HSL, or HSLA values.
				This gives developers great flexibility in styling text and other foreground elements.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>p {'{'}
	color: red;
	color: #ff0000;
	color: rgb(255, 0, 0);
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				All three examples above produce the same red text color using different color notations.
			</p>
		</section>

		<!-- dit is de background -->
		<section id="background" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Background</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>background</code> property is a shorthand for setting multiple background
				properties at once.
			</p>

			<p class="text-gray-600 leading-relaxed">
				Instead of writing separate properties for color, image, size, and position,
				you can combine them all into one <code>background</code> declaration.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>div {'{'}
	background: #ff0000 url("image.jpg") no-repeat center / cover;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This shorthand sets the background color, image, repeat behavior, position, and size all in one line.
			</p>
		</section>

		<!-- dit is de background-color -->
		<section id="background-color" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Background-Color</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>background-color</code> property sets the background color of an element.
			</p>

			<p class="text-gray-600 leading-relaxed">
				It accepts the same color formats as the <code>color</code> property, including
				named colors, HEX, RGB, and HSL. It also supports <code>transparent</code> as a value.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>div {'{'}
	background-color: lightblue;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This example gives the element a light blue background color.
			</p>
		</section>

		<!-- dit is de background-image -->
		<section id="background-image" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Background-Image</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>background-image</code> property sets one or more images as the background of an element.
			</p>

			<p class="text-gray-600 leading-relaxed">
				By default, the image is repeated both horizontally and vertically to fill the element.
				You can also use CSS gradients as a background image.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>div {'{'}
	background-image: url("photo.jpg");
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This example sets <code>photo.jpg</code> as the background image of the element.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Background-Image Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>url("image.jpg") — loads an image file</li>
					<li>linear-gradient() — creates a linear color gradient</li>
					<li>radial-gradient() — creates a circular color gradient</li>
					<li>none — removes any background image</li>
				</ul>
			</div>
		</section>

		<!-- dit is de background-size -->
		<section id="background-size" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Background-Size</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>background-size</code> property controls how a background image is scaled within its element.
			</p>

			<p class="text-gray-600 leading-relaxed">
				You can define the size using specific pixel or percentage values, or use the
				keywords <code>cover</code> and <code>contain</code> for responsive scaling.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>div {'{'}
	background-image: url("photo.jpg");
	background-size: cover;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The <code>cover</code> value scales the image to fully cover the element, cropping if necessary.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Background-Size Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>cover — scales the image to cover the entire element</li>
					<li>contain — scales the image to fit inside the element</li>
					<li>100% 100% — stretches the image to fill width and height</li>
					<li>auto — keeps the image at its original size</li>
				</ul>
			</div>
		</section>

		<!-- dit is de background-position -->
		<section id="background-position" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Background-Position</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>background-position</code> property sets the starting position of a background image within its element.
			</p>

			<p class="text-gray-600 leading-relaxed">
				You can use keyword values like <code>center</code>, <code>top</code>, or <code>right</code>,
				or define an exact position using pixels or percentages.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>div {'{'}
	background-image: url("photo.jpg");
	background-position: center;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				This example centers the background image both horizontally and vertically inside the element.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Background-Position Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>center — centers the image in both directions</li>
					<li>top / bottom / left / right — aligns the image to an edge</li>
					<li>top right — places the image in the top-right corner</li>
					<li>50% 50% — same as center using percentages</li>
					<li>20px 40px — positions image 20px from left, 40px from top</li>
				</ul>
			</div>
		</section>

	</div>
</main>