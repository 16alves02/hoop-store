import { Link } from 'react-router-dom';

type ProdutoCardProps = {
  id: number;
  nome: string;
  jogador: string;
  equipa: string;
  preco: number;
  imagem: string;
};

function ProdutoCard({ id, nome, jogador, equipa, preco, imagem }: ProdutoCardProps) {
  return (
    <Link to={`/produto/${id}`} className="group">
      <div className="bg-gray-900 rounded-lg overflow-hidden transform transition hover:scale-105 shadow-xl">
        <img src={imagem} alt={nome} className="w-full h-80 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-bold text-yellow-400">{jogador}</h3>
          <p className="text-gray-400 text-sm">{equipa}</p>
          <p className="text-2xl font-black mt-4">€{preco}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProdutoCard;