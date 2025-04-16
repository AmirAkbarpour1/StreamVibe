import { up } from 'up-fetch'
import serverEnv from '@/lib/serverEnv'

const tmdb = up(fetch, () => ({
  baseUrl: 'https://api.themoviedb.org/3',
  headers: {
    'Authorization': `Bearer ${serverEnv.TMDB_API_READ_TOKEN}`,
    'Content-Type': 'application/json',
  },
}))

export default tmdb
