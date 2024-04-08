<script lang="ts">
  	import { caughtPokemons } from "../lib/stores.ts";
    import type { Pokemon } from "../routes/+page.ts";
    export let pokemon: Pokemon;
    export let clickable: boolean;

	const catchPokemon = () => {
		 caughtPokemons.update(pokemons =>
			[...pokemons, pokemon]
		 );
	}
</script>

<main>
    {#if clickable}
        <button class="card" class:clickable={clickable} on:click={catchPokemon}> 
            <h2 class="pokemon-id">{pokemon.id}</h2>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.image} alt={pokemon.name}>
        </button>
    {:else}
        <div class="card" >
            <h2 class="pokemon-id">{pokemon.id}</h2>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.image} alt={pokemon.name}>
        </div>
    {/if}
</main>

<style>
    .card {
		border: none;
		min-width: 150px;
		height: 150px;
		padding: 10px;

		border-radius: 10px;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;

		background-color: #f5f5f5;
	}
	.clickable:hover {
		background-color: #eee;
	}
	.card h1, h2 {
		text-transform: capitalize;
		font-size: 1.2em;
		font-family: sans-serif;
	}
	.pokemon-id {
		font-size: 0.8em;
		position: absolute;
		left: 6px;
		top: 6px;
		color: #777;
	}
</style>