import './App.css'
import { useMovies } from './hooks/useMovies';
import { Movies } from './components/Movies';
import { useRef, useState } from 'react';
import { useEffect } from 'react';

function useSerarch () {
  const [search , updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect (() => {

//validacion
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search.startsWith(' ')) return

    if (search === ''){
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con numero')
      return
    }

    if (search.length < 3) {
      setError('Busqueda con mas de 3 careacteres')
      return
    }
    
        setError(null)
  }, [search])

  return {search, updateSearch, error}
}

function App() {

  const {search, updateSearch, error} = useSerarch()
  const {movies, getMovies} = useMovies({search})
 
  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
    


  }

  return (
    <div>
      <h1>Buscador de peliculas</h1>
      <header>
        <form className="form" onSubmit={handleSubmit}>
          <input style={{border : '1px solid transparent', borderColor: error ? 'red' : 'transparent'}} onChange={handleChange} value={search} name='query' placeholder="Avengers, starwars..."></input>
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        {
          <Movies movies={movies}></Movies>
        }
      </main>
    </div>
  )
}

export default App
