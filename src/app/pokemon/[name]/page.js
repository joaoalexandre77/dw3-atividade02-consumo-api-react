import { notFound } from "next/navigation";

import { getPokemonByName } from "../../../lib/pokeapi";

import PokemonDetails from "../../../components/PokemonDetails";

export default async function PokemonPage({ params }) {

  // Recupera o nome recebido pela URL
  const { name } = await params;

  // Busca os dados individuais do Pokémon
  const pokemon = await getPokemonByName(name);

  // Se não encontrar, exibe a página 404
  if (!pokemon) {
    notFound();
  }

  return (
    <main className="container">

      <PokemonDetails pokemon={pokemon} />

    </main>
  );
}