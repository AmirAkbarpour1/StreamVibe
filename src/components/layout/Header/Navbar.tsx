import { Link, useLocation } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { cn } from '@/lib/cn'
import MobileNavbar from '@/components/layout/Header/MobileNavbar'

const routes = [
  { pathname: '/', name: 'Home' },
  { pathname: '/movies', name: 'Movies' },
  { pathname: '/support', name: 'Support' },
  { pathname: '/subscriptions', name: 'Subscriptions' },
]

function Navbar() {
  const location = useLocation()

  return (
    <nav>

      <div className="relative bg-black-06 border-[3px] border-black-12 hidden laptop:flex px-6 py-2 rounded-lg items-center">
        {routes.map((route) => {
          const isActive = route.pathname === location.pathname

          return (
            <Link
              key={route.pathname}
              to={route.pathname}
              className={cn(
                'px-5 py-3 rounded-lg transition-colors duration-200 relative',
                isActive ? 'text-white' : 'text-gray-75 hover:text-gray-90',
              )}
            >
              <p className="relative z-10">{route.name}</p>
              {isActive && (
                <motion.div
                  className="absolute inset-0 bg-black-10 rounded-lg"
                  layoutId="activeNavItem"
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
            </Link>
          )
        })}
      </div>

      <MobileNavbar routes={routes} />
    </nav>
  )
}

export default Navbar
