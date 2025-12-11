import { Link, Outlet } from "react-router-dom";
import logo from "../../public/img/Logo-HOOP2.png";
function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Header com o logo */}
      <header className="bg-black border-b-4 border-yellow-500 py-6 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} alt="HOOP Store" className="h-20 md:h-24 drop-shadow-2xl" />
            <span className="text-4xl md:text-5xl font-black text-yellow-400 tracking-wider hidden md:block">
              HOOP
            </span>
          </Link>

          {/* Navbar */}
          <nav className="flex gap-8 md:gap-12 text-lg font-bold">
            <Link to="/" className="hover:text-yellow-400 transition">HOME</Link>
            <Link to="/produtos" className="hover:text-yellow-400 transition">PRODUTOS</Link>
            <Link to="/pesquisa/jordan" className="hover:text-yellow-400 transition hidden md:block">PESQUISA</Link>
            <Link to="/contacto" className="hover:text-yellow-400 transition">CONTACTO</Link>
            <Link to="/sobre" className="hover:text-yellow-400 transition">SOBRE</Link>
          </nav>
        </div>
      </header>

      {/* Páginas */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 HOOP STORE – Leonardo Alves | CTeSP Desenvolvimento de Software
          </p>
          <p className="text-yellow-400 font-bold mt-2">Legends Never Die</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;