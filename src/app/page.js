import { getPokemonList } from "../lib/pokeapi";
import PokemonGrid from "../components/PokemonGrid";

export default async function Home() {
  let pokemonList = [];
  let error = false;

  try {
    const data = await getPokemonList(20, 0);

    pokemonList = data.results;

  } catch (err) {
    console.error("Erro ao carregar Pokémon:", err);
    error = true;
  }

  return (
    <main className="container">

      <section className="page-intro">

        <span className="section-label">
          CATÁLOGO POKÉMON
        </span>

        <h1>
          Explore o mundo Pokémon
        </h1>

        <p>
          Descubra informações, características e habilidades
          dos seus Pokémon favoritos.
        </p>

        {!error && (
          <span className="total-pokemon">
            Exibindo {pokemonList.length} Pokémon
          </span>
        )}

      </section>

      {error ? (

        <div className="error-message">
          <h2>Não foi possível carregar os Pokémon.</h2>

          <p>
            Verifique sua conexão com a internet e tente novamente.
          </p>
        </div>

      ) : (

        <PokemonGrid pokemonList={pokemonList} />

      )}

    </main>
  );
}