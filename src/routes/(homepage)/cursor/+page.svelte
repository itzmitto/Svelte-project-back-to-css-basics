<main class="flex-1 overflow-y-auto bg-white">
	<div class="max-w-4xl mx-auto px-8 py-12 space-y-20">

		<!-- dit is de cursor -->
		<section id="cursor" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Cursor</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>cursor</code> property sets the appearance of the mouse pointer when it
				hovers over an element.
			</p>

			<p class="text-gray-600 leading-relaxed">
				Changing the cursor gives users visual feedback about what an element does or how
				they can interact with it. For example, showing a pointer cursor on a button signals
				it is clickable, while a not-allowed cursor signals something is disabled. You can
				use one of the many built-in keyword values or provide a custom image file as a
				cursor using the <code>url()</code> function with a keyword fallback.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>button {'{'}
	cursor: pointer;
{'}'}

input:disabled {'{'}
	cursor: not-allowed;
{'}'}

/* custom cursor with fallback */
div {'{'}
	cursor: url("cursor.png"), auto;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The first example shows a hand pointer on a button. The second shows a not-allowed
				cursor on a disabled input. The third uses a custom image with <code>auto</code>
				as a fallback in case the image fails to load.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Common Cursor Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>default — the default arrow cursor (default)</li>
					<li>pointer — a hand icon, used for clickable elements like links and buttons</li>
					<li>text — an I-beam cursor, used for selectable or editable text</li>
					<li>move — a four-directional arrow, used for draggable elements</li>
					<li>grab — an open hand, used for elements that can be grabbed and dragged</li>
					<li>grabbing — a closed hand, used while actively dragging an element</li>
					<li>not-allowed — a circle with a line, used for disabled or forbidden actions</li>
					<li>wait — a loading spinner, used when the page or action is processing</li>
					<li>crosshair — a precise crosshair, used for drawing or selecting areas</li>
					<li>zoom-in / zoom-out — a magnifying glass, used for zoomable content</li>
					<li>none — completely hides the cursor over the element</li>
				</ul>
			</div>
		</section>

		<!-- dit is de pointer-events -->
		<section id="pointer-events" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Pointer-Events</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>pointer-events</code> property controls whether an element can receive
				mouse or touch interactions such as clicks, hover, and drag events.
			</p>

			<p class="text-gray-600 leading-relaxed">
				Setting <code>pointer-events: none</code> makes an element completely transparent
				to all mouse and touch input — clicks and hovers pass straight through to whatever
				is behind it. This is useful for overlay elements, decorative layers, or temporarily
				disabling interactivity without hiding an element. Unlike the <code>disabled</code>
				HTML attribute, this property works on any element and is controlled purely through CSS.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>/* overlay that does not block clicks */
.overlay {'{'}
	pointer-events: none;
{'}'}

/* re-enable events on a child inside a none parent */
.overlay .button {'{'}
	pointer-events: auto;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The first example makes the overlay invisible to all mouse events so clicks pass
				through to elements underneath. The second re-enables pointer events on a specific
				child element even though its parent has them disabled.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">Pointer-Events Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>auto — element receives pointer events as normal (default)</li>
					<li>none — element is invisible to all mouse and touch events, clicks pass through</li>
				</ul>
			</div>
		</section>

		<!-- dit is de user-select -->
		<section id="user-select" class="scroll-mt-20 space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">User-Select</h1>

			<p class="text-lg text-gray-700 leading-relaxed">
				The <code>user-select</code> property controls whether the user can select and
				highlight text content inside an element.
			</p>

			<p class="text-gray-600 leading-relaxed">
				By default, text on a page can be selected by clicking and dragging. Setting
				<code>user-select: none</code> prevents this, which is useful for UI elements like
				buttons, labels, and navigation items where accidental text selection would feel
				unintended. Setting it to <code>all</code> makes the entire content of the element
				select at once with a single click, which is helpful for code snippets or shareable
				links that users need to copy quickly.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<pre><code>/* prevent text selection on buttons */
button {'{'}
	user-select: none;
{'}'}

/* select all content with one click */
.code-snippet {'{'}
	user-select: all;
{'}'}

/* allow normal text selection */
p {'{'}
	user-select: text;
{'}'}</code></pre>
			</div>

			<p class="text-gray-600">
				The first example prevents text from being selected on a button. The second makes
				the entire code snippet select instantly on a single click. The third explicitly
				allows normal text selection on a paragraph.
			</p>

			<div class="bg-gray-100 rounded-lg p-4 border">
				<h3 class="font-semibold mb-2">User-Select Values</h3>
				<ul class="list-disc pl-6 space-y-1">
					<li>auto — the browser decides based on the element type (default)</li>
					<li>text — the user can select text normally</li>
					<li>none — text cannot be selected at all</li>
					<li>all — the entire content is selected with a single click</li>
				</ul>
			</div>
		</section>

	</div>
</main>