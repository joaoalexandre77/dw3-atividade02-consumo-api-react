import { notFound } from "next/navigation";

import { getPokemonByName } from "../../../lib/pokeapi";

import PokemonDetails from "../../../components/PokemonDetails";

export default async function PokemonPage({ params }) {

  const { name } = await params;

  const pokemon = await getPokemonByName(name);

  if (!pokemon) {
    notFound();
  }

  return (
    <main className="container">

      <PokemonDetails pokemon={pokemon} />

    </main>
  );
}