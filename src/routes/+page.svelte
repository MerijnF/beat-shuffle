<script lang="ts">
	import { getRegistry } from '#lib/registry.svelte.ts';

	const registry = await getRegistry();
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

{#if registry.packIdsLoaded}
	<p>Registry loaded with {registry.packIds.length} packs</p>
	<ul>
		{#each registry.packIds as packId (packId)}
			<li>{packId}</li>
		{/each}
	</ul>
{:else}
	<p>Loading registry...</p>
{/if}
