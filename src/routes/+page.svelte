<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	import PokemonCard from '../components/PokemonCard.svelte';
	import Header from '../components/Header.svelte';
    import type { Pokemon } from "./+page.ts";

	export let data: PageData;

	let searchString;

	$: pokemonId1 = $page.url.searchParams.get('pokemonId1') || '';
	$: pokemonId2 = $page.url.searchParams.get('pokemonId2') || '';
	// $: pokemon1 = data.pokemons.find((pokemon: Pokemon) => +pokemonId1 === pokemon.id);
	// $: pokemon2 = data.pokemons.find((pokemon: Pokemon) => +pokemonId2 === pokemon.id);
</script>

<!-- {#if pokemon1}
	<PokemonCard pokemon={pokemon1} {pokemonId1} {pokemonId2} clickable={false} />
{/if}
{#if pokemon2}
	<PokemonCard pokemon={pokemon2} {pokemonId1} {pokemonId2} clickable={false}/>
{/if} -->

<Header>
	<form action="" slot="input">
		<input type="text" bind:value={searchString} />
		<input type="submit" value="Search" />
	</form>
</Header>

<ul class="pokemons">
	{#each filteredPokemons as pokemon (pokemon.id)}
		<PokemonCard {pokemon} {pokemonId1} {pokemonId2} clickable={true}/>
	{/each}
</ul>

<style>
	.pokemons {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 10px;
		padding: 10px;
	}
</style>
 