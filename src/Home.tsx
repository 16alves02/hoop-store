function Home() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold mb-6 text-gold">HOOP STORE</h1>
      <p className="text-3xl mb-10">Camisolas autênticas NBA • Mitchell & Ness Classics</p>
      
      {/* Jordan grande no centro */}
      <div className="mb-20">
        <img 
          src="/img/jordan-front.png" 
          alt="Michael Jordan 23" 
          className="mx-auto" 
          style={{maxWidth: "600px", width: "100%"}} 
        />
      </div>

      <p className="text-2xl mb-10">Legends Never Die</p>
      
      <a href="/produtos" className="btn-primary">
        VER TODOS OS PRODUTOS
      </a>

      <div className="mt-20">
        <p className="text-xl">
          Descobre as camisolas mais icónicas da história da NBA.<br />
          Jordan, Kobe, Iverson, Bird, Curry e muitas mais.
        </p>
      </div>
    </div>
  );
}

export default Home;