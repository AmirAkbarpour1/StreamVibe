import tmdb from '@/services/tmdb'
import withErrorHandling from '@/services/withErrorHandling'
import type { Movie, MovieWithTrailer, Video } from '@/types/movieTypes'
import MoviesSlider from '@/components/movies-sows/MoviesSlider'

async function VideoTrailer() {
  const moviesWithTrailer = await withErrorHandling(async () => {
    const moviesResponse = await tmdb('/discover/movie', {
      params: { sort_by: 'popularity.desc' },
    })

    const movies: Movie[] = moviesResponse.results.slice(0, 11)

    const moviesWithTrailers: MovieWithTrailer[] = (
      await Promise.all(
        movies.map(async (movie) => {
          try {
            const videosResponse = await tmdb(`movie/${movie.id}/videos`)
            const trailer = videosResponse.results.find(
              (vid: Video) => vid.site === 'YouTube' && vid.type === 'Trailer',
            )
            if (!trailer)
              return null
            const trailerUrl = `https://www.youtube.com/watch?v=${trailer.key}`
            return { ...movie, trailerUrl }
          }
          catch {
            return null
          }
        }),
      )
    ).filter((movie): movie is MovieWithTrailer => movie !== null)

    return moviesWithTrailers
  })

  return (
    <div className="safe-area laptop:mt-34.5 desktop:mt-42.5 mt-35.5">
      <MoviesSlider moviesWithTrailer={moviesWithTrailer} />
    </div>
  )
}

export default VideoTrailer
