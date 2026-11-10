import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo">
          <span>⚡</span>
          Pokédex
        </Link>

        <p>Explore o mundo Pokémon</p>
      </div>
    </header>
  );
}