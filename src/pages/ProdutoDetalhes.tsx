import { useParams } from 'react-router-dom';
import { produtos } from '../data/produtos';
import { useState } from 'react';

function ProdutoDetail() {
  const { id } = useParams();
  const produto = produtos.find(p => p.id === Number(id));
  const [imagemAtual, setImagemAtual] = useState(0);

  if (!produto) return <div>Produto não encontrado</div>;

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Galeria */}
        <div>
          <img src={produto.imagens[imagemAtual]} alt={produto.nome} className="w-full rounded-lg" />
          <div className="flex gap-4 mt-6">
            {produto.imagens.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="mini"
                className={`w-24 h-24 object-cover rounded cursor-pointer border-4 ${imagemAtual === index ? 'border-yellow-400' : 'border-gray-700'}`}
                onClick={() => setImagemAtual(index)}
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <h1 className="text-4xl font-black text-yellow-400">{produto.jogador}</h1>
          <p className="text-2xl text-gray-400 mt-2">{produto.equipa}</p>
          <p className="text-5xl font-black mt-8">€{produto.preco}</p>
          <p className="mt-8 text-lg leading-relaxed">{produto.descricao}</p>
          <button className="mt-10 bg-yellow-400 text-black px-12 py-5 text-xl font-bold rounded hover:bg-yellow-300">
            ADICIONAR AO CARRINHO
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProdutoDetail;