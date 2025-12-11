import { produtos } from '../data/produtos';
import { Link } from 'react-router-dom';

function Produtos() {
  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-12 text-yellow-400">COLEÇÃO COMPLETA</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {produtos.map((p) => (
            <Link to={`/produto/${p.id}`} key={p.id} className="group">
              <div className="bg-gray-900 rounded-lg overflow-hidden transform transition hover:scale-105">
                <img src={p.imagens[0]} alt={p.nome} className="w-full h-96 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-yellow-400">{p.jogador}</h3>
                  <p className="text-gray-400">{p.equipa}</p>
                  <p className="text-3xl font-black mt-4">€{p.preco}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Produtos;