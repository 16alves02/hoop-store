import { useParams, Link } from 'react-router-dom';
import { produtos } from '../data/produtos';

function Pesquisa() {
  const { termo } = useParams();
  const termoLower = termo?.toLowerCase() || '';

  const resultados = produtos.filter(p =>
    p.jogador.toLowerCase().includes(termoLower) ||
    p.equipa.toLowerCase().includes(termoLower) ||
    p.nome.toLowerCase().includes(termoLower)
  );

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-yellow-400 mb-8">
          Resultados para: <span className="text-white">"{termo}"</span>
        </h1>

        {resultados.length === 0 ? (
          <p className="text-2xl text-gray-400 text-center py-20">
            Nenhum produto encontrado. Tenta "Jordan", "Kobe", "Lakers"...
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {resultados.map(p => (
              <Link to={`/produto/${p.id}`} key={p.id} className="group">
                <div className="bg-gray-900 rounded-lg overflow-hidden transform transition hover:scale-105">
                  <img src={p.imagens[0]} alt={p.nome} className="w-full h-80 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-yellow-400">{p.jogador}</h3>
                    <p className="text-gray-400">{p.equipa}</p>
                    <p className="text-2xl font-bold mt-4">€{p.preco}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Pesquisa;