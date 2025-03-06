import './App.css'
import responseMovies from './mocks/with-results.json'
import withoutResults from './mocks/no-results.json'

function App() {

  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0

  console.log(responseMovies);
  
  console.log(movies);

  

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
          hasMovies ?
            (
              <ul>
                {movies.map(movie => (
                  <li key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                    <img src={movie.Poster} alt={movie.Title}></img>
                  </li>
                ))}
              </ul>
            ): <p>No se encontraron resultados</p>
        }
      </main>
    </div>
  )
}

export default App
