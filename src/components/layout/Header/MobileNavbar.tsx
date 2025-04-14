import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import Logo from '@/components/layout/Header/Logo'
import Buttons from '@/components/layout/Header/Buttons'
import { Link } from '@tanstack/react-router'
import { cn } from '@/lib/cn'

function MobileNavbar({ routes }: { routes: { pathname: string, name: string }[] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }
  return (
    <>
      <button
        className="w-12 h-12 bg-black-10 flex items-center justify-center rounded-md border-black-15 border-[3px] tablet:hidden"
        type="button"
        onClick={toggleMobileMenu}
      >
        <Bars3BottomRightIcon className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="tablet:hidden">
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md"
              onClick={toggleMobileMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="absolute top-0 left-0 right-0 bg-black-06 bg-opacity-80 border-b border-black-15 backdrop-blur-lg shadow-lg"
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{
                type: 'spring',
                damping: 30,
                stiffness: 300,
              }}
            >
              <div className="flex justify-between items-center p-4 border-b border-black-15 border-opacity-60">
                <Logo />
                <button
                  type="button"
                  onClick={toggleMobileMenu}
                  className="w-12 h-12 bg-black-10 flex items-center justify-center rounded-md border-black-15 border-[3px]"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 flex flex-col gap-2">
                {routes.map((route) => {
                  const isActive = route.pathname === location.pathname

                  return (
                    <Link
                      key={route.pathname}
                      to={route.pathname}
                      onClick={toggleMobileMenu}
                      className="relative p-4 rounded-lg"
                    >
                      <p
                        className={cn(
                          'relative z-10 desktop:text-lg',
                          isActive ? 'text-white font-medium' : 'text-gray-75',
                        )}
                      >
                        {route.name}
                      </p>
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 bg-black-10 rounded-lg backdrop-blur-sm"
                          layoutId="mobileActiveNavItem"
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

              <div className="mt-4 p-4 border-t border-black-15 border-opacity-60">
                <Buttons isMobile />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileNavbar
