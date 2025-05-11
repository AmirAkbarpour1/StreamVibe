'use client'

import { AnimatePresence, motion } from 'motion/react'
import type { ReactNode } from 'react'

interface IconSwitcherProps {
  isExpanded: boolean
  children: ReactNode[]
  transitionDuration?: number
}

export const IconSwitcher: React.FC<IconSwitcherProps> = ({
  isExpanded,
  children,
  transitionDuration = 0.3,
}) => {
  return (
    <motion.div
      className="flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: transitionDuration }}
    >
      <AnimatePresence>
        {children.length > 0 && (
          <motion.div
            key={0}
            initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
            animate={{
              opacity: isExpanded ? 0 : 1,
              scale: isExpanded ? 0.8 : 1,
              rotate: isExpanded ? -180 : 0,
            }}
            exit={{ opacity: 0, scale: 0.8, rotate: 180 }}
            transition={{ duration: transitionDuration, ease: 'easeInOut' }}
            style={{ display: isExpanded ? 'none' : 'block' }}
          >
            {children[0]}
          </motion.div>
        )}
        {children.length > 1 && (
          <motion.div
            key={1}
            initial={{ opacity: 0, scale: 0.8, rotate: 180 }}
            animate={{
              opacity: isExpanded ? 1 : 0,
              scale: isExpanded ? 1 : 0.8,
              rotate: isExpanded ? 0 : 180,
            }}
            exit={{ opacity: 0, scale: 0.8, rotate: -180 }}
            transition={{ duration: transitionDuration, ease: 'easeInOut' }}
            style={{ display: isExpanded ? 'block' : 'none' }}
          >
            {children[1]}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
