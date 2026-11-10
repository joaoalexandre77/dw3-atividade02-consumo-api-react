import Link from "next/link";

export default function PokemonCard({ pokemon }) {
  const image =
    pokemon.sprites.other["official-artwork"].front_default ||
    pokemon.sprites.front_default;

  return (
    <Link
      href={`/pokemon/${pokemon.name}`}
      className="pokemon-card"
    >
      <div className="pokemon-image">
        <img
          src={image}
          alt={`Pokémon ${pokemon.name}`}
        />
      </div>

      <div className="pokemon-info">
        <span className="pokemon-number">
          Nº {String(pokemon.id).padStart(3, "0")}
        </span>

        <h2>{pokemon.name}</h2>

        <div className="pokemon-types">
          {pokemon.types.map((item) => (
            <span
              key={item.type.name}
              className={`type-badge type-${item.type.name}`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}