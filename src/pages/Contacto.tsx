import { useState } from "react";

function Contacto() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: ""
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simula envio
    console.log("Mensagem enviada:", formData);
    setEnviado(true);
    setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <div className="mt-20 mb-20">
      <h1 className="text-4xl font-bold text-center mb-20">CONTACTO</h1>

      {enviado && (
        <div className="text-center bg-green-600 text-white py-4 px-8 rounded mb-20 inline-block">
          Mensagem enviada com sucesso! Obrigado por contactar a HOOP Store.
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="form-group">
          <input
            type="text"
            name="nome"
            placeholder="Nome completo"
            required
            className="form-input"
            value={formData.nome}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="form-input"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <textarea
            name="mensagem"
            placeholder="Mensagem"
            rows={8}
            required
            className="form-input"
            value={formData.mensagem}
            onChange={handleChange}
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn-primary">
            ENVIAR MENSAGEM
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contacto;