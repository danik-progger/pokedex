<script lang="ts">
  import type { Pokemon } from '../routes/+page.ts';
	import { generations } from '../scripts/generations.ts';
</script>

<ul class="generations">
	{#each generations as gen (gen.id)}
		<button class="generation">{gen.main_region}</button>
	{/each}
</ul>

<slot name="input" />

<style>
	.generations {
		width: max(400px, 60%);
		margin: 50px auto 20px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.generation {
		padding: 5px 10px;
		border-radius: 4px;
	}
</style>