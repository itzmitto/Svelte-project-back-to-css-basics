import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		SvelteKitPWA({
			registerType: 'autoUpdate',

			manifest: {
				name: 'Back To Basics',
				short_name: 'Back To Basics',
				description: 'A simple CSS editor for standard CSS',
				theme_color: '#ffffff',
				icons: [
					{
						src: '/favicon.png',
						sizes: '512x512',
						type: 'image/png'
					}
				],
			},

			workbox: {
				globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,gif,webp,woff,woff2,eot,ttf,otf}'],
				navigateFallback: '/',
			}
		})
	]
});
