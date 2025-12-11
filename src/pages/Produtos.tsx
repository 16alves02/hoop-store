import ProductCard from "../components/ProdutoCard";
import { produtos } from "../data/produtos";
import { Link } from "react-router-dom";

function Produtos() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-20">COLEÇÃO COMPLETA</h1>

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
    </div>
  );
}

export default Produtos;