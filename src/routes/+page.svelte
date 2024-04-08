<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	import PokemonCard from '../components/PokemonCard.svelte';
	import { generations } from '../scripts/generations.ts';
	import { caughtPokemons } from '../lib/stores.ts';
    import type { Pokemon } from "./+page.ts";
  	import { goto } from '$app/navigation';

	export let data: PageData;

	let searchString = "";
	$: filteredPokemons = data.pokemons.filter((pokemon: Pokemon) =>
		pokemon.name.toLowerCase().includes(searchString.toLowerCase())
	);

	$: selectedGenId = $page.url.searchParams.get('genId') || 'all';

	const updateParams = (name: string, value: string) => {
		const params = new URLSearchParams($page.url.searchParams);
		params.set(name, value);
		goto(`?${params.toString()}`);
	}
</script>

<header>
	<ul class="generations">
		{#each [{id: 'all', main_region: 'All'}, ...generations] as gen (gen.id)}
			<button class="generation" class:active = {gen.id.toString() === selectedGenId}  on:click={() => updateParams('genId', gen.id.toString())}>{gen.main_region}</button> 
		{/each}
	</ul>

	<input type="text" bind:value={searchString} />

</header>
<ul class="pokemons">
	{#each filteredPokemons as pokemon (pokemon.id)}
		<PokemonCard {pokemon} clickable={true}/>
	{/each}
</ul>

<style>
	.pokemons {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 10px;
		padding: 10px;
		/* margin-left: calc(100% - 150px );  */
	}
	.generations {
		width: max(400px, 60%);
		display: flex;
		/* justify-content: space-between; */
		flex-wrap: wrap;
		gap: 15px;
	}
	.generation {
		padding: 8px 15px;
		border-radius: 8px;
	}

	.active {
		background-color: #999;
		color: #f5f5f5;
	}

	header {
		margin: 30px 40px 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	input {
		border: solid 2px #eee;
		border-radius: 8px;

		width: min(300px, 20%);
		height: 32px;
		padding: 8px;
	}
</style>
 