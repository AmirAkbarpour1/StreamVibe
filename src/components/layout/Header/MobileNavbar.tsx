import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import Buttons from '@/components/layout/Header/Buttons'
import { cn } from '@/lib/cn'
import { createPortal } from 'react-dom'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface Route {
  pathname: string
  name: string
}

function MenuToggleButton({ isOpen, toggle }: { isOpen: boolean, toggle: () => void }) {
  return (
    <button
      onClick={toggle}
      type="button"
      className="w-12 h-12 bg-black-10 flex items-center justify-center rounded-md border-black-15 border-[3px] laptop:hidden"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isOpen ? 'x' : 'bars'}
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <XMarkIcon className="w-6 aspect-square" /> : <Bars3BottomRightIcon className="w-6 aspect-square" />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

function MobileNavItem({ route, isActive, index, onClick }: {
  route: Route
  isActive: boolean
  index: number
  onClick: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{
        delay: 0.05 * index,
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
    >
      <Link
        to={route.pathname}
        onClick={onClick}
        className="relative p-4 rounded-lg block"
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
            layoutId="mobileActiveNavItem"
            className="absolute inset-0 bg-black-10 rounded-lg backdrop-blur-sm"
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        )}
      </Link>
    </motion.div>
  )
}

function MobileMenu({ isOpen, routes, toggle }: {
  isOpen: boolean
  routes: Route[]
  toggle: () => void
}) {
  const location = useLocation()

  if (typeof document === 'undefined')
    return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 laptop:hidden bg-black-06"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 250 }}
        >
          <div className="p-4 flex flex-col gap-2 mt-[102px]">
            {routes.map((route, index) => (
              <MobileNavItem
                key={route.pathname}
                route={route}
                index={index}
                isActive={route.pathname === location.pathname}
                onClick={toggle}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.05 * routes.length }}
            className="mt-4 p-4 border-t border-black-15 border-opacity-60"
          >
            <Buttons isMobile />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

function MobileNavbar({ routes }: { routes: Route[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(prev => !prev)

  return (
    <>
      <MenuToggleButton isOpen={isOpen} toggle={toggle} />
      <MobileMenu isOpen={isOpen} routes={routes} toggle={toggle} />
    </>
  )
}

export default MobileNavbar
