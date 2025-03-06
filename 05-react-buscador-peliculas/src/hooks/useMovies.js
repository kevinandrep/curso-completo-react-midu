import responseMovies from '../mocks/with-results.json'

export function useMovies () {
    // mapeando la variable movies para rescindir del contrato json
    const movies = responseMovies.Search
    const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))

    return {movies: mappedMovies}
}