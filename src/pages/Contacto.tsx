import { useState } from 'react';

function Contacto() {
  const [formData, setFormData] = useState({
    nome: '', email: '', mensagem: ''
  });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simula envio
    console.log('Mensagem enviada:', formData);
    setEnviado(true);
    setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-5xl font-black text-yellow-400 text-center mb-12">CONTACTO</h1>
        
        {enviado && (
          <div className="bg-green-600 text-white p-6 rounded text-center mb-8">
            Mensagem enviada com sucesso! Obrigado por entrares em contacto com a HOOP.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <input
            type="text"
            placeholder="Nome completo"
            required
            className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded text-white text-lg"
            onChange={(e) => setFormData({...formData, nome: e.target.value})}
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded text-white text-lg"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <textarea
            placeholder="Mensagem"
            rows={6}
            required
            className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded text-white text-lg"
            onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
          />
          <button type="submit" className="w-full bg-yellow-400 text-black py-5 text-xl font-bold rounded hover:bg-yellow-300 transition">
            ENVIAR MENSAGEM
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;