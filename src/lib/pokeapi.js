const API_URL = "https://pokeapi.co/api/v2";

const fetchOptions = {
  next: {
    revalidate: 3600,
  },
};

export async function getPokemonList(limit = 20, offset = 0) {
  const response = await fetch(
    `${API_URL}/pokemon?limit=${limit}&offset=${offset}`,
    fetchOptions
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar a lista de Pokémon.");
  }

  const data = await response.json();

  const pokemonDetails = await Promise.all(
    data.results.map(async (pokemon) => {
      const response = await fetch(pokemon.url, fetchOptions);

      if (!response.ok) {
        throw new Error(`Erro ao buscar ${pokemon.name}.`);
      }

      return response.json();
    })
  );

  return {
    count: data.count,
    results: pokemonDetails,
  };
}

export async function getPokemonByName(name) {
  const response = await fetch(
    `${API_URL}/pokemon/${encodeURIComponent(name.toLowerCase())}`,
    fetchOptions
  );

  // Se não encontrar o Pokémon, retorna null.
  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Erro ao buscar os dados do Pokémon.");
  }

  return response.json();
}