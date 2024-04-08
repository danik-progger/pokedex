<script lang="ts">
    import type { Pokemon } from "../routes/+page.ts";
    export let pokemon: Pokemon;
    export let pokemonId1: string;
    export let pokemonId2: string;
    export let clickable: boolean;
</script>

<main>
    {#if clickable}
        <a class="card" href="?pokemonId1={pokemon.id}&pokemonId2={pokemonId2}"> 
            <h2 class="pokemon-id">{pokemon.id}</h2>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.image} alt={pokemon.name}>
        </a>
        <!-- <a href="?pokemonId1={pokemonId1 }&pokemonId2={pokemon.id}"> 
            <h1>2</h1>
        </a> -->
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
		width: 150px;
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
	.card:hover {
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