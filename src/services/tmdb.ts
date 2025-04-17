import { up } from 'up-fetch'
import clientEnv from '@/lib/clientEnv'

const tmdb = up(fetch, () => ({
  baseUrl: 'https://api.themoviedb.org/3',
  headers: {
    'Authorization': `Bearer ${clientEnv.VITE_TMDB_API_READ_TOKEN}`,
    'Content-Type': 'application/json',
  },
}))

export default tmdb
