<script>
	async function triggerLocalNotification() {
		// 1. Request permission
		const permission = await Notification.requestPermission();

		if (permission === 'granted') {
			// 2. Trigger notification instantly or after a delay
			const reg = await navigator.serviceWorker.ready;

			await reg.showNotification("Camera Lens Ready!", {
				body: "Your capture was saved locally.",
				icon: "/pwa-192x192.png",
				badge: "/pwa-192x192.png",
			});
		}
	}
</script>

<button onclick={triggerLocalNotification}>
	Test Local Notification
</button>