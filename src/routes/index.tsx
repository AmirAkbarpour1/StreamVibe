import HeroSection from '@/components/home/HeroSection'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <HeroSection />
  )
}
