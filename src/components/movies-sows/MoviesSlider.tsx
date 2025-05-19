'use client'

import { getImageUrl } from '@/constants/tmdbImages'
import { cn } from '@/lib/cn'
import type { MovieWithTrailer } from '@/types/movieTypes'
import {
  HandThumbUpIcon,
  PlusIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { PlayIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useIsClient, useScrollLock, useToggle } from 'usehooks-ts'
import { useState } from 'react'
import ReactPlayer from 'react-player'
import { IconSwitcher } from '@/components/ui/IconSwitcher'
import { AnimatePresence, motion } from 'motion/react'

function MoviesSlider({
  moviesWithTrailer,
}: {
  moviesWithTrailer: MovieWithTrailer[]
}) {
  const isClient = useIsClient()
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null)
  const [isMuted, setIsMuted] = useToggle(false)
  const { lock, unlock } = useScrollLock()

  const handlePlay = (url: string) => {
    setTrailerUrl(url)
    lock()
  }

  const handleClose = () => {
    setTrailerUrl(null)
    unlock()
  }

  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        className={cn(
          'tablet:h-175 desktop:h-200 h-125 w-full rounded-xl',
          !isClient && 'opacity-0',
        )}
      >
        {moviesWithTrailer.map(movie => (
          <SwiperSlide
            key={movie.id}
            className="tablet:px-10 desktop:px-12.5 desktop:pb-5 relative px-6 pb-4"
          >
            <Image
              src={getImageUrl('backdrop', 'original', movie.backdrop_path)}
              alt={movie.title}
              fill
              className="object-cover object-center"
              priority
            />

            <div className="tablet:px-10 desktop:px-12.5 tablet:gap-6 desktop:gap-7.5 absolute right-0 bottom-0 left-0 z-2 flex w-full flex-col gap-5 px-6 pb-4">
              <div>
                <h3 className="title text-center">{movie.title}</h3>
                <p className="tablet:block description desktop:mt-4 mt-2 hidden text-center">
                  {movie.overview}
                </p>
              </div>
              <div className="tablet:flex-row tablet:w-fit mx-auto flex w-full flex-col gap-5">
                <button
                  type="button"
                  className="button w-full"
                  onClick={() => handlePlay(movie.trailerUrl)}
                >
                  <PlayIcon className="desktop:w-7 w-6" />
                  <p>Play Now</p>
                </button>
                <div className="*:bg-black-06 *:border-black-15 *:desktop:p-3.5 mx-auto flex flex-row gap-2 *:rounded-lg *:border *:p-3">
                  <button
                    type="button"
                    aria-label={`Add ${movie.title} to Collection`}
                  >
                    <PlusIcon className="desktop:w-7 w-6" />
                  </button>
                  <button type="button" aria-label={`Like ${movie.title}`}>
                    <HandThumbUpIcon className="desktop:w-7 w-6" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMuted()
                    }}
                    aria-label={isMuted ? 'UnMute' : 'Mute'}
                  >
                    <IconSwitcher isActive={isMuted}>
                      <SpeakerWaveIcon className="desktop:w-7 w-6" />
                      <SpeakerXMarkIcon className="desktop:w-7 w-6" />
                    </IconSwitcher>
                  </button>
                </div>
              </div>
            </div>

            <div className="from-black-08 absolute inset-0 z-1 bg-gradient-to-t to-transparent"></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <AnimatePresence>
        {trailerUrl && (
          <motion.div
            className="bg-black-08/80 fixed inset-0 z-6 flex items-center justify-center backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => {
              if (e.target === e.currentTarget)
                handleClose()
            }}
          >
            <button
              type="button"
              className="absolute top-4 right-4"
              onClick={() => handleClose()}
              aria-label="Close"
            >
              <XMarkIcon className="h-10 w-10 text-white" />
            </button>
            <ReactPlayer
              url={trailerUrl}
              playing
              controls
              muted={isMuted}
              className="tablet:w-75 h-auto w-full rounded-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MoviesSlider
