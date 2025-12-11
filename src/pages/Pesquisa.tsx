import { useParams, Link } from "react-router-dom";
import { produtos } from "../data/produtos";
import ProductCard from "../components/ProdutoCard";

function Pesquisa() {
  const { termo } = useParams();
  const termoLower = termo ? termo.toLowerCase() : "";

  const resultados = produtos.filter(p =>
    p.jogador.toLowerCase().includes(termoLower) ||
    p.equipa.toLowerCase().includes(termoLower) ||
    p.nome.toLowerCase().includes(termoLower)
  );

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-20">
        Resultados para: <span className="text-gold">"{termo}"</span>
      </h1>

      {resultados.length === 0 ? (
        <p className="text-center text-2xl mt-20">
          Nenhum produto encontrado. Tenta "Jordan", "Kobe", "Lakers"...
        </p>
      ) : (
        <div className="card-grid">
          {produtos.map(p => (
            <ProductCard
              key={p.id}
              id={p.id}
              nome={p.nome}
              jogador={p.jogador}
              equipa={p.equipa}
              preco={p.preco}
              imagem={p.imagens[0]}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Pesquisa;