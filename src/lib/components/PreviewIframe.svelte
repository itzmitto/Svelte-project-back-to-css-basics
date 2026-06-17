<script lang="ts">
	let { html = '', css = '' } = $props();
	let iframeElement: HTMLIFrameElement;

	const baseSrcDoc = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <style>body { margin: 0; font-family: sans-serif; }</style>
            <style id="live-preview-styles"></style>
            <script>
            	if (window.navigation) {
								window.navigation.addEventListener('navigate', (event) => {
									event.preventDefault();
									console.warn('Navigation blocked inside sandbox:', event.destination.url);
								});
            	}

							document.addEventListener('click', (event) => {
								if (event.target.tagName != null) {
									if (event.target.tagName === 'a') {
											event.preventDefault();
											console.warn('Navigation blocked inside sandbox:', event.target.getAttribute('href'));
									}

								}
							});
						<\/script>
        </head>
        <body id="live-preview-body"></body>
        </html>
    `;

	function injectContent() {
		const doc = iframeElement?.contentDocument;
		const body = doc?.getElementById('live-preview-body');
		const styleTag = doc?.getElementById('live-preview-styles');
		if (body) body.innerHTML = html;
		if (styleTag) styleTag.textContent = css;
	}

	// Runs on every html/css change. On first mount the iframe isn't loaded
	// yet, so this is a no-op — onload handles that case. On subsequent prop
	// changes (user typing, control changes) the iframe IS loaded, so it works.
	$effect(() => {
		// Reading html and css here registers them as dependencies
		html; css;
		injectContent();
	});
</script>

<iframe
	bind:this={iframeElement}
	srcdoc={baseSrcDoc}
	onload={injectContent}
	allow="vibrate"
	sandbox="allow-scripts allow-same-origin"
	title="CSS Preview Sandbox"
	class="w-full h-full border-0 block bg-white"
></iframe>