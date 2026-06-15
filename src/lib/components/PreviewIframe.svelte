<script lang="ts">
	// Accept both css and html as string props from the parent
	let { html = '', css = '' } = $props();

	let iframeElement: HTMLIFrameElement;

	// Blueprint blueprint that never changes its structural layout shell
	const baseSrcDoc = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <style>
                body { margin: 0; font-family: sans-serif; }
            </style>
            <style id="live-preview-styles"></style>
        </head>
        <body id="live-preview-body"></body>
        </html>
    `;

	// 1. Surgically inject the HTML contents only when the structural HTML changes
	$effect(() => {
		console.log('HTML changed:', html);
		const doc = iframeElement?.contentDocument;
		const body = doc?.getElementById('live-preview-body');
		if (body) {
			body.innerHTML = html;
		}
	});

	// 2. Surgically inject the CSS string without forcing a full document reload
	$effect(() => {
		console.log('CSS changed:', css);
		const doc = iframeElement?.contentDocument;
		const styleTag = doc?.getElementById('live-preview-styles');
		if (styleTag) {
			styleTag.textContent = css;
		}
	});
</script>

<iframe
	bind:this={iframeElement}
	srcdoc={baseSrcDoc}
	sandbox="allow-scripts allow-same-origin"
	title="CSS Preview Sandbox"
	class="w-full h-full border-0 block bg-white"
></iframe>