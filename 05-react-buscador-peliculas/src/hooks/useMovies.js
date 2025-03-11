import { useState } from 'react'
import withoutResults from '../mocks/no-results.json'

export function useMovies ({search}) {
    
  const [responseMovies, setResponseMovies] = useState([])
  
  const movies = responseMovies.Search

  //mapeando la variable movies para rescindir del contrato json

    const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))

    const getMovies = () => {
      if (search) {
        //setResponseMovies(withResults)
        fetch(`https://www.omdbapi.com/?apikey=4287ad07&s=${search}`)
          .then(res => res.json())
          .then(json => {
            setResponseMovies(json)
          })
      } else {
        setResponseMovies(withoutResults)
      }
    }

    return {movies: mappedMovies, getMovies}
}

