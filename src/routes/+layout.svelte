<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';
	import { createRegistry, setRegistry } from '#lib/registry.svelte.ts';
	import { onMount } from 'svelte';

	let { children }: LayoutProps = $props();

	const registry = createRegistry();
	setRegistry(registry);

	onMount(async () => {
		await registry.load();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
