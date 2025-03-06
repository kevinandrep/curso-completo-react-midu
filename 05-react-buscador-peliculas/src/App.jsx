import './App.css'

function App() {

  return (
    <div>
      <h1>Buscador de peliculas</h1>
      <header>
        <form className="form">
          <input placeholder="Avengers, starwars..."></input>
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        Aqui iran los resultados
      </main>
    </div>
  )
}

export default App
