<script lang="ts">
	import { getRegistry } from '#lib/registry.svelte.ts';

	const registry = await getRegistry();
</script>

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
