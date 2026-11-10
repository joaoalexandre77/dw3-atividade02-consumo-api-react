import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Pokédex",
  description: "Catálogo de Pokémon utilizando a PokéAPI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />

        {children}

      </body>
    </html>
  );
}