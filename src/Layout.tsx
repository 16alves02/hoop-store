import { Link, Outlet } from "react-router-dom"


function Layout(){

    return <div>
        <header className="bg-black text-gold text -5x1">HOOP</header>
        <nav>
            <Link to="">Home</Link>
            <Link to="viagens">Produtos</Link>
            <Link to="about">Sobre</Link>
        </nav>
        <main>
            <Outlet />
        </main>
        <footer>
            &copy;2025
        </footer>
    </div>
}

export default Layout