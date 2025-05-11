'use client'

import type { ReactNode } from 'react'
import type { SwiperProps } from 'swiper/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { Navigation, Pagination } from 'swiper/modules'
import { cn } from '@/lib/cn'
import { useIsClient } from 'usehooks-ts'

interface SliderProps {
  title?: string
  description?: string
  className?: string
  paginationName?: string
  swiperProps?: SwiperProps
  slides?: ReactNode[]
  swiperClassName?: string
  headerClassName?: string
  showNavigation?: boolean
}

export default function Slider({
  title,
  description,
  className = '',
  paginationName = 'default',
  swiperProps,
  slides,
  swiperClassName = '',
  headerClassName = '',
  showNavigation = true,
}: SliderProps) {
  const isClient = useIsClient()

  const laptopPaginationClass = `swiper-pagination-laptop-${paginationName}`
  const mobilePaginationClass = `swiper-pagination-mobile-${paginationName}`
  const prevButtonClass = `swiper-button-prev-${paginationName}`
  const nextButtonClass = `swiper-button-next-${paginationName}`

  return (
    <div className={cn('container mb-5 w-full', className)}>
      {(title || description) && (
        <div
          className={cn('flex items-center justify-between', headerClassName)}
        >
          <div>
            {title && <h2 className="title">{title}</h2>}
            {description && <p className="description">{description}</p>}
          </div>
          {showNavigation && (
            <div className="laptop:flex bg-black-06 border-black-12 desktop:p-4 desktop:rounded-xl desktop:gap-4 hidden flex-row items-center gap-3 rounded-[10px] border p-3">
              <div
                className={cn(
                  'group bg-black-10 desktop:rounded-lg desktop:p-3.5 border-black-12 rounded-md border p-2.5',
                  prevButtonClass,
                  'cursor-pointer transition-all duration-300 [&.swiper-button-disabled]:cursor-not-allowed [&.swiper-button-disabled]:opacity-50',
                )}
              >
                <ArrowLeftIcon className="laptop:w-6 desktop:w-7 group-hover:text-red-55 aspect-square transition-all duration-300 group-hover:scale-110 group-[.swiper-button-disabled]:scale-100 group-[.swiper-button-disabled]:text-white" />
              </div>
              <div
                className={cn(
                  'hidden',
                  laptopPaginationClass,
                  'laptop:flex items-center gap-2',
                )}
              >
              </div>
              <div
                className={cn(
                  'group bg-black-10 desktop:rounded-lg desktop:p-3.5 border-black-12 rounded-md border p-2.5',
                  nextButtonClass,
                  'cursor-pointer transition-all duration-300 [&.swiper-button-disabled]:cursor-not-allowed [&.swiper-button-disabled]:opacity-50',
                )}
              >
                <ArrowRightIcon className="laptop:w-6 desktop:w-7 group-hover:text-red-55 aspect-square transition-all duration-300 group-hover:scale-110 group-[.swiper-button-disabled]:scale-100 group-[.swiper-button-disabled]:text-white" />
              </div>
            </div>
          )}
        </div>
      )}

      <Swiper
        breakpoints={{
          1: { slidesPerView: 1.5, slidesPerGroup: 1, spaceBetween: 20 },
          450: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 20 },
          700: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 30 },
          1000: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 30 },
          1440: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 30,
            pagination: {
              el: `.${laptopPaginationClass}`,
              clickable: true,
              type: 'bullets',
              bulletClass:
                'bg-black-20 w-3.5 h-1 rounded-full transition-all duration-300 cursor-pointer',
              bulletActiveClass: 'bg-red-45 w-4.5',
            },
          },
        }}
        className={cn(
          'mt-10 w-full',
          swiperClassName,
          !isClient && 'opacity-0',
        )}
        navigation={
          showNavigation
            ? {
                prevEl: `.${prevButtonClass}`,
                nextEl: `.${nextButtonClass}`,
                disabledClass: 'swiper-button-disabled',
              }
            : false
        }
        pagination={{
          clickable: true,
          el: `.${mobilePaginationClass}`,
          type: 'bullets',
          bulletClass:
            'bg-black-20 rounded-l-full rounded-r-full h-1 w-full transition-all duration-300 cursor-pointer',
          bulletActiveClass: 'bg-red-45',
        }}
        modules={[Pagination, Navigation]}
        {...swiperProps}
      >
        {slides?.map((slide, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={`slide-${index}`}>{slide}</SwiperSlide>
        ))}
      </Swiper>
      <div
        className={cn(
          mobilePaginationClass,
          'laptop:hidden bg-black-20 mx-auto mt-6 flex max-w-[70%] justify-center rounded-l-full rounded-r-full',
        )}
      >
      </div>
    </div>
  )
}
