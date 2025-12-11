import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="header">
        <div className="container">
          <Link to="/">
            <img src="/img/Logo-HOOP2.png" alt="HOOP Store" className="logo" />
          </Link>
        </div>
      </header>

      {/* Navegação */}
      <nav className="nav">
        <div className="container">
          <ul className="nav-list">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/produtos" className="nav-link">Produtos</Link></li>
            <li><Link to="/pesquisa/jordan" className="nav-link">Pesquisa</Link></li>
            <li><Link to="/contacto" className="nav-link">Contacto</Link></li>
            <li><Link to="/sobre" className="nav-link">Sobre</Link></li>
          </ul>
        </div>
      </nav>

      {/* Conteúdo principal */}
      <main className="main flex-1">
        <div className="container">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 HOOP Store – Leonardo Alves</p>
          <p className="text-gold">Legends Never Die</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;