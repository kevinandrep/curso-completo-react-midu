import './App.css'
import { useMovies } from './hooks/useMovies';
import { Movies } from './components/Movies';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {

  const {movies} = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
 
  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  useEffect(() => {

  }, [query])

  const handleSubmit = (event) => {
    event.preventDefault()
    const fields = Object.fromEntries(new window.FormData(event.target))
    console.log(fields);
  }

  return (
    <div>
      <h1>Buscador de peliculas</h1>
      <header>
        <form className="form" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name='query' placeholder="Avengers, starwars..."></input>
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
