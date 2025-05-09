export interface Genre {
  id: number
  name: string
}

export interface Movie {
  id: number
  title: string
  poster_path: string
}

export interface GenreWithMovies {
  genre: string
  id: number
  movies: Movie[]
}
