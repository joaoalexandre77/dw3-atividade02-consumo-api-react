import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container not-found">

      <h1>Pokémon não encontrado!</h1>

      <p>
        Não conseguimos encontrar o Pokémon solicitado.
      </p>

      <Link href="/" className="back-button">
        Voltar para a Pokédex
      </Link>

    </main>
  );
}