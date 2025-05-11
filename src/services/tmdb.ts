import { up } from 'up-fetch'
import env from '@/lib/env'

const tmdb = up(fetch, () => ({
  baseUrl: 'https://api.themoviedb.org/3',
  headers: {
    'Authorization': `Bearer ${env.TMDB_API_READ_TOKEN}`,
    'Content-Type': 'application/json',
  },
}))

export default tmdb
