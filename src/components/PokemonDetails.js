import Link from "next/link";

export default function PokemonDetails({ pokemon }) {
  const image =
    pokemon.sprites.other?.["official-artwork"]?.front_default ||
    pokemon.sprites.front_default;

  return (
    <div className="details-container">

      <Link href="/" className="back-button">
        ← Voltar para Pokédex
      </Link>

      <section className="details-hero">

        <div className="details-image">
          <img
            src={image}
            alt={`Pokémon ${pokemon.name}`}
          />
        </div>

        <div className="details-main">

          <span className="pokemon-number">
            Nº {String(pokemon.id).padStart(3, "0")}
          </span>

          <h1>{pokemon.name}</h1>

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

          <div className="basic-info">

            <div>
              <span>Altura</span>
              <strong>{pokemon.height / 10} m</strong>
            </div>

            <div>
              <span>Peso</span>
              <strong>{pokemon.weight / 10} kg</strong>
            </div>

            <div>
              <span>Experiência base</span>
              <strong>
                {pokemon.base_experience ?? "Não informado"}
              </strong>
            </div>

          </div>

          {/* Informações adicionais */}
          <div className="extra-info">

            <p>
              <strong>Espécie:</strong>{" "}
              {pokemon.species.name}
            </p>

            <p>
              <strong>Ordem:</strong> {pokemon.order}
            </p>

            <p>
              <strong>Pokémon padrão:</strong>{" "}
              {pokemon.is_default ? "Sim" : "Não"}
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}