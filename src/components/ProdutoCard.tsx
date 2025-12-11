import { Link } from "react-router-dom";

type ProductCardProps = {
  id: number;
  nome: string;
  jogador: string;
  equipa: string;
  preco: number;
  imagem: string;
};

function ProductCard({ id, nome, jogador, equipa, preco, imagem }: ProductCardProps) {
  return (
    <Link to={`/produto/${id}`}>
      <div className="card">
        <img src={imagem} alt={nome} className="card-img" />
        <div className="card-body">
          <h3 className="card-title">{jogador}</h3>
          <p className="card-text">{equipa}</p>
          <p className="card-price">€{preco}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;