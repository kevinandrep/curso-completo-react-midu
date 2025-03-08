import './App.css'
import { useMovies } from './hooks/useMovies';
import { Movies } from './components/Movies';


function App() {

  const {movies} = useMovies()
 


  const handleSubmit = (event) => {
    event.preventDefault()
    const fields = new FormData(event.target)
    const query = fields.get('query')
    console.log(fields);
    
    
  }

  return (
    <div>
      <h1>Buscador de peliculas</h1>
      <header>
        <form className="form" onSubmit={handleSubmit}>
          <input name='query' placeholder="Avengers, starwars..."></input>
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
