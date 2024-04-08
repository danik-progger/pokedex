export type Pokemon = {
  name: string;
  url: string;
  id: number;
  image: string;
};

export const load = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const json = await response.json();
  const pokemons = json.results.map((pokemon: Pokemon) => {
    const id = +pokemon.url.split("/")[6];
    return {
      name: pokemon.name,
      url: pokemon.url,
      id: id,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon//${id}.png`,
    };
  });

  return { pokemons };
};
