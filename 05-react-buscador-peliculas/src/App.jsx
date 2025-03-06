import './App.css'
import responseMovies from './mocks/with-results.json'
import { Movies } from './components/Movies';

function App() {

  const movies = responseMovies.Search

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
        {
          <Movies movies={movies}></Movies>
        }
      </main>
    </div>
  )
}

export default App
