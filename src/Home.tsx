import { Link, Outlet } from "react-router-dom";

function Home() {

const logo = "/img/Logo-HOOP2.png";
 
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Fundo com Jordan grande e subtil */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="../public/img/kobe-background.jpg"
          alt="Michael Jordan"
          className="w-full h-full object-cover object-top scale-110"
        />
      </div>

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90"></div>

      {/* Conteúdo central */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo */}
        <img
          src={logo}
          alt="HOOP Store"
          className="mx-auto h-32 md:h-40 drop-shadow-2xl mb-8 animate-pulse"
        />

        {/* Título principal */}
        <h1 className="text-6xl md:text-8xl font-black text-yellow-400 tracking-wider mb-6 drop-shadow-2xl">
          LEGENDS
        </h1>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 drop-shadow-lg">
          NEVER DIE
        </h2>

        {/* Botão */}
        <Link
          to="/produtos"
          className="inline-block bg-yellow-400 text-black px-12 py-6 text-2xl font-black rounded-lg hover:bg-yellow-300 transform hover:scale-105 transition duration-300 shadow-2xl"
        >
          ENTRAR NA LOJA
        </Link>

        {/* Texto pequeno */}
        <p className="mt-12 text-gray-300 text-lg md:text-xl">
          Camisolas autênticas Mitchell & Ness • Edições limitadas • História viva da NBA
        </p>
      </div>

      {/* Seta para baixo (opcional, fica fixe) */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}

export default Home;