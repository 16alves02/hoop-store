function Sobre() {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-black text-yellow-400 mb-12">SOBRE A HOOP</h1>
        
        <div className="bg-gray-900 rounded-xl p-10 shadow-2xl">
          <p className="text-xl leading-relaxed mb-8">
            HOOP é uma loja online dedicada às camisolas mais icónicas da história da NBA.  
            Inspirada na Mitchell & Ness, trazemos até ti as peças que marcaram épocas, jogadores lendários e momentos inesquecíveis do basquetebol.
          </p>
          
          <div className="my-12">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">Projeto Académico</h2>
            <p className="text-lg">
              Trabalho realizado por <strong>Leonardo Alves</strong><br />
              CTeSP em Desenvolvimento de Software<br />
              Unidade Curricular: Tecnologias Web<br />
              Professor: Carlos Guerra · 2025
            </p>
          </div>

          <p className="text-5xl font-black text-yellow-400 mt-16">
            Legends Never Die
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sobre;