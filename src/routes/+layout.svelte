<script>
  	import { caughtPokemons } from "../lib/stores.ts";
</script>

<nav>
	<a href="/">Home</a>
	<a href="/my_pokemons">My Pokemons ({$caughtPokemons.length})</a>
</nav>

<slot />

<style>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 40px;
        padding: 8px;
        background-color: #999;
        border-radius: 20px;
    }
    a {
        font-size: 0.8em;
        background-color: #f5f5f5;
        border-radius: 14px;
        padding: 10px;
        /* text-decoration: underline; */
    }
    a:hover {
        background-color: #eee;
    }
</style>