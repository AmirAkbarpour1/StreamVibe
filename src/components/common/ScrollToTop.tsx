'use client'

import { useEffect } from 'react'

export default function ScrollToTop() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  return null
}
