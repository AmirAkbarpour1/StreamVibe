export interface Genre {
  id: number
  name: string
}

export interface Movie {
  id: number
  title: string
  overview: string
  poster_path: string
  backdrop_path: string
}

export interface GenreWithMovies {
  genre: string
  id: number
  movies: Movie[]
}

export interface Video {
  id: string
  key: string
  site: string
  type: string
}

export interface MovieWithTrailer extends Movie {
  trailerUrl: string
}
