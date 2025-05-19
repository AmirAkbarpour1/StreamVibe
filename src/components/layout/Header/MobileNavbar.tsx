'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useScrollLock, useToggle } from 'usehooks-ts'
import Link from 'next/link'
import Buttons from '@/components/layout/Header/Buttons'
import { cn } from '@/lib/cn'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'

interface Route {
  pathname: string
  name: string
}

function MenuToggleButton({
  isOpen,
  toggle,
}: {
  isOpen: boolean
  toggle: () => void
}) {
  return (
    <button
      onClick={toggle}
      type="button"
      className="bg-black-10 border-black-15 tablet:hidden relative z-5 flex h-12 w-12 items-center justify-center rounded-md border-3"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isOpen ? 'x' : 'bars'}
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen
            ? (
                <XMarkIcon className="w-6" />
              )
            : (
                <Bars3BottomRightIcon className="w-6" />
              )}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

function MobileNavItem({
  route,
  isActive,
  index,
  onClick,
}: {
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
        href={route.pathname}
        onClick={onClick}
        className="relative block rounded-lg p-4"
      >
        <p
          className={cn(
            'desktop:text-lg relative z-1',
            isActive ? 'font-medium text-white' : 'text-gray-75',
          )}
        >
          {route.name}
        </p>

        {isActive && (
          <motion.div
            layoutId="mobileActiveNavItem"
            className="bg-black-10 absolute inset-0 rounded-lg backdrop-blur-sm"
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        )}
      </Link>
    </motion.div>
  )
}

function MobileMenu({
  isOpen,
  routes,
  toggle,
}: {
  isOpen: boolean
  routes: Route[]
  toggle: () => void
}) {
  const pathname = usePathname()

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="tablet:hidden bg-black-06 fixed inset-0 z-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 250 }}
        >
          <div className="mt-25.5 flex flex-col gap-2 p-4">
            {routes.map((route, index) => (
              <MobileNavItem
                key={route.pathname}
                route={route}
                index={index}
                isActive={route.pathname === pathname}
                onClick={toggle}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.05 * routes.length }}
            className="border-black-15 border-opacity-60 mt-4 border-t p-4"
          >
            <Buttons isMobile />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function MobileNavbar({ routes }: { routes: Route[] }) {
  const [isOpen, toggle] = useToggle()
  const { lock, unlock } = useScrollLock({
    autoLock: false,
  })

  const toggleMenu = () => {
    if (!isOpen) {
      lock()
      window.scrollTo(0, 0)
    }
    else {
      unlock()
    }
    toggle()
  }

  return (
    <>
      <MenuToggleButton isOpen={isOpen} toggle={toggleMenu} />
      <MobileMenu isOpen={isOpen} routes={routes} toggle={toggleMenu} />
    </>
  )
}

export default MobileNavbar
