'use client'

import { AnimatePresence, motion } from 'motion/react'
import type { ReactNode } from 'react'

interface IconSwitcherProps {
  isActive: boolean
  children: [ReactNode, ReactNode]
  transitionDuration?: number
}

export const IconSwitcher: React.FC<IconSwitcherProps> = ({
  isActive,
  children,
  transitionDuration = 0.3,
}) => {
  return (
    <div className="flex items-center">
      <AnimatePresence>
        <motion.div
          key={0}
          animate={{
            opacity: isActive ? 0 : 1,
            scale: isActive ? 0.8 : 1,
            rotate: isActive ? -180 : 0,
          }}
          exit={{ opacity: 0, scale: 0.8, rotate: 180 }}
          transition={{ duration: transitionDuration, ease: 'easeInOut' }}
          style={{ display: isActive ? 'none' : 'block' }}
        >
          {children[0]}
        </motion.div>
        <motion.div
          key={1}
          animate={{
            opacity: isActive ? 1 : 0,
            scale: isActive ? 1 : 0.8,
            rotate: isActive ? 0 : 180,
          }}
          exit={{ opacity: 0, scale: 0.8, rotate: -180 }}
          transition={{ duration: transitionDuration, ease: 'easeInOut' }}
          style={{ display: isActive ? 'block' : 'none' }}
        >
          {children[1]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
