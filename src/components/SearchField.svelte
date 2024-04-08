<script lang="ts">
    import { search } from "../scripts/search.ts";
    let searchString: string;
</script>

<form on:submit={() => search(data, "name", searchString)}>
    <input type="text" bind:value={searchString} />
    <input type="submit" value="Search" />
</form>