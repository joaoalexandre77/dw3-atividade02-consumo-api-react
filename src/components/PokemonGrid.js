import PokemonCard from "./PokemonCard";

export default function PokemonGrid({ pokemonList }) {
  return (
    <div className="pokemon-grid">
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
        />
      ))}
    </div>
  );
}