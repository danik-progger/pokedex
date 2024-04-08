import { writable, type Writable } from "svelte/store";
import type { Pokemon } from "../routes/+page.ts"; 

 export const caughtPokemons: Writable<Pokemon[]> = writable([ ])