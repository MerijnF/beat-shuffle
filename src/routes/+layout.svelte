<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';
	import { createRegistry } from '#lib/registry.svelte.ts';

	let { children }: LayoutProps = $props();

	createRegistry();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
