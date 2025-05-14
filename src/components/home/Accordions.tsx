'use client'

import { accordionItems } from '@/constants/accordionItems'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { IconSwitcher } from '@/components/ui/IconSwitcher'

function AccordionItem({
  item,
  index,
  expandedIndex,
  toggleAccordion,
}: {
  item: { id: string, title: string, content: string }
  index: number
  expandedIndex: number
  toggleAccordion: (index: number) => void
}) {
  return (
    <div className="laptop:p-6 desktop:px-8.5 desktop:py-7.5 relative px-2.5 py-5">
      <button
        type="button"
        onClick={() => toggleAccordion(index)}
        className="flex w-full items-center justify-between"
      >
        <div className="desktop:gap-6 flex items-center justify-center gap-4">
          <span className="desktop:text-xl laptop:p-4 laptop:rounded-lg desktop:p-5 bg-black-12 border-black-15 desktop:rounded-[10px] flex items-center rounded-md border p-3 font-semibold">
            {item.id}
          </span>
          <p className="laptop:text-xl desktop:text-[22px] text-start text-lg font-medium">
            {item.title}
          </p>
        </div>
        <IconSwitcher isExpanded={expandedIndex === index}>
          <PlusIcon className="desktop:w-7.5 w-6" />
          <MinusIcon className="desktop:w-7.5 w-6" />
        </IconSwitcher>
      </button>
      <AnimatePresence>
        {expandedIndex === index && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="description laptop:mt-3.5 desktop:mt-5 mt-3">
              {item.content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <span className="via-red-45 absolute right-0 bottom-0 left-0 h-0.25 bg-gradient-to-r from-transparent via-[17%] to-transparent"></span>
    </div>
  )
}

function Accordions() {
  const [expandedIndex, setExpandedIndex] = useState<number>(-1)

  const toggleAccordion = (index: number) => {
    setExpandedIndex(index === expandedIndex ? -1 : index)
  }

  const half = Math.ceil(accordionItems.length / 2)

  return (
    <div className="laptop:flex-row laptop:gap-10 desktop:gap-20 mt-10 flex w-full flex-col gap-5">
      <div className="laptop:w-1/2 flex w-full flex-col gap-5">
        {accordionItems.slice(0, half).map((item, index) => (
          <AccordionItem
            key={item.id}
            item={item}
            index={index}
            expandedIndex={expandedIndex}
            toggleAccordion={toggleAccordion}
          />
        ))}
      </div>
      <div className="laptop:w-1/2 flex w-full flex-col gap-5">
        {accordionItems.slice(half).map((item, index) => (
          <AccordionItem
            key={item.id}
            item={item}
            index={index + half}
            expandedIndex={expandedIndex}
            toggleAccordion={toggleAccordion}
          />
        ))}
      </div>
    </div>
  )
}

export default Accordions
