import type { PageLoad } from "./$types";

export type Pokemon = {
  name: string;
  url: string;
  id: number;
  image: string;
};

export const load = (async ({ fetch, url }) => {
  const genId = url.searchParams.get("genId") || 'all';
  let json = [];
  if (genId === 'all') {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    json = await response.json();
    json = json.results;
  } else {
    const response = await fetch(
      `https://pokeapi.co/api/v2/generation/${genId}`
    );
    json = await response.json();
    json = json.pokemon_species;
  }

  // console.log(genId, json);

  const pokemons = json.map((pokemon: Pokemon) => {
    const id = +pokemon.url.split("/")[6];
    return {
      name: pokemon.name,
      url: pokemon.url,
      id: id,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon//${id}.png`,
    };
  });

  return { pokemons };
}) satisfies PageLoad;
