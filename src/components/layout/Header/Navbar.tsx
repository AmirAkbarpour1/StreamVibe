'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'motion/react'
import { cn } from '@/lib/cn'
import MobileNavbar from '@/components/layout/Header/MobileNavbar'

const routes = [
  { pathname: '/', name: 'Home' },
  { pathname: '/movies-shows', name: 'Movies & Shows' },
  { pathname: '/support', name: 'Support' },
  { pathname: '/subscriptions', name: 'Subscriptions' },
]

function Navbar() {
  const pathname = usePathname()

  return (
    <nav>
      <div className="bg-black-06 border-black-12 laptop:flex relative hidden items-center rounded-lg border-[3px] px-6 py-2">
        {routes.map((route) => {
          const isActive = route.pathname === pathname

          return (
            <Link
              key={route.pathname}
              href={route.pathname}
              className={cn(
                'relative rounded-lg px-5 py-3 transition-colors duration-300',
                isActive ? 'text-white' : 'text-gray-75 hover:text-gray-90',
              )}
            >
              <p className="relative z-10">{route.name}</p>
              {isActive && (
                <motion.div
                  className="bg-black-10 absolute inset-0 rounded-lg"
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
