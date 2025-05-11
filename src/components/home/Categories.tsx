import tmdb from '@/services/tmdb'
import withErrorHandling from '@/services/withErrorHandling'
import type { Genre, GenreWithMovies } from '@/types/movieTypes'
import Slider from '@/components/ui/Slider'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { getImageUrl } from '@/constants/tmdbImages'
import * as motion from 'motion/react-client'
import Link from 'next/link'

function genreComponent(genre: GenreWithMovies) {
  return (
    <Link
      href="/"
      key={genre.id}
      className="bg-black-10 border-black-15 laptop:p-6 desktop:p-7.5 group mx-auto block w-fit rounded-[10px] border p-5"
    >
      <div className="grid w-fit grid-cols-2 gap-[5px] mask-b-from-10%">
        {genre.movies.slice(0, 4).map(movie => (
          <div className="w-full min-w-[70px]" key={movie.id}>
            <Image
              src={getImageUrl('poster', 'w154', movie.poster_path)}
              alt={movie.title}
              width={154}
              height={231}
              className="rounded-md"
            />
          </div>
        ))}
      </div>
      <div className="mt-2 flex w-full items-center justify-between">
        <p className="laptop:text-base desktop:text-lg group-hover:text-gray-65 text-sm font-semibold transition-all duration-300">
          {genre.genre}
        </p>
        <ArrowRightIcon className="laptop:w-6 desktop:w-7.5 group-hover:text-red-45 aspect-square w-5 text-white transition-all duration-300 group-hover:scale-110" />
      </div>
    </Link>
  )
}

async function Categories() {
  const genresWithTopMovies = await withErrorHandling(async () => {
    const genresResponse = await tmdb('/genre/movie/list')
    const genres: Genre[] = genresResponse.genres

    const genresWithMovies: GenreWithMovies[] = await Promise.all(
      genres.map(async (genre) => {
        const moviesResponse = await tmdb('/discover/movie', {
          params: {
            with_genres: genre.id,
            sort_by: 'popularity.desc',
          },
        })

        return {
          genre: genre.name,
          id: genre.id,
          movies: moviesResponse.results.slice(0, 4),
        }
      }),
    )

    return genresWithMovies
  })

  const genreComponents = genresWithTopMovies.map(genreWithMovies =>
    genreComponent(genreWithMovies),
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="laptop:mt-37.5 desktop:mt-50 mt-25"
    >
      <Slider
        title="Explore our wide variety of categories"
        description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
        slides={genreComponents}
        paginationName="categories-home"
      />
    </motion.div>
  )
}

export default Categories
