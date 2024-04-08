<script lang="ts">
    import { caughtPokemons } from "../../lib/stores";
    import PokemonCard from "../../components/PokemonCard.svelte";
</script>

<ul class="pokemons">
	{#each $caughtPokemons as pokemon}
		<PokemonCard {pokemon} clickable={false}/>
	{/each}
</ul>

<style>
	.pokemons {
		width: 100vw;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 10px;
		padding: 10px;
		/* margin-left: calc(100% - 150px );  */
	}
</style>
 