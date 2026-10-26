import { asset } from '$app/paths';
import { createContext, onMount } from 'svelte';

export function createRegistry() {
	const registry = $state({
		packIds: [] as string[],
		packIdsLoaded: false,
		load
	});
	
	setRegistry(registry);
	onMount(async () => load());

	return registry;

	async function load() {
		await loadIds();
	}

	async function loadIds() {
		const response = await fetch(asset('registry.json'));
		if (response.ok) {
			const data = await response.json();
			registry.packIds = data.packs;
			registry.packIdsLoaded = true;
		} else {
			throw new Error(`Failed to load registry: ${response.status} ${response.statusText}`);
		}
	}
}

export const [getRegistry, setRegistry] = createContext<{
	packIds: string[];
	packIdsLoaded: boolean;
	load: () => Promise<void>;
}>();
