export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'

export const IMAGE_SIZES = {
  poster: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'],
  backdrop: ['w300', 'w780', 'w1280', 'original'],
  still: ['w92', 'w185', 'w300', 'original'],
  profile: ['w45', 'w185', 'h632', 'original'],
  logo: ['w45', 'w92', 'w154', 'w185', 'w300', 'w500', 'original'],
} as const

export type ImageType = keyof typeof IMAGE_SIZES
export type ImageSize<T extends ImageType> = (typeof IMAGE_SIZES)[T][number]

export function getImageUrl<T extends ImageType>(
  type: T,
  size: ImageSize<T>,
  path: string,
) {
  return `${IMAGE_BASE_URL}/${size}${path}`
}
