'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/cn'
import { pricing } from '@/constants/pricing'

function PricingCard({
  plan,
  name,
  price,
  description,
}: {
  plan: 'month' | 'year'
  name: string
  price: string
  description: string
}) {
  return (
    <div className="bg-black-10 border-black-15 rounde-[10px] laptop:p-10 desktop:p-12.5 h-full w-full rounded-xl border p-6">
      <h3 className="laptop:text-xl desktop:text-2xl text-lg font-bold">
        {name}
      </h3>
      <p className="description laptop:mt-3 desktop:mt-4 mt-2.5">
        {description}
      </p>
      <span className="desktop:gap-1 laptop:mt-10 desktop:mt-12.5 mt-7.5 flex items-baseline gap-0.5">
        <p className="title font-semibold!">{price}</p>
        <p className="text-gray-60 laptop:text-base desktop:text-lg text-sm font-medium">
          /
          {plan}
        </p>
      </span>
      <div className="desktop:gap-5 desktop:text-lg laptop:mt-10 desktop:mt-12.5 *:desktop:rounded-md *:desktop:px-6 *:desktop:py-4.5 mt-7.5 flex w-full gap-3 text-sm font-semibold *:w-full *:rounded-sm *:px-5 *:py-3.5">
        <button type="button" className="bg-black-08 border-black-15 border">
          Start Free Trial
        </button>
        <button type="button" className="bg-red-45">
          Choose Plan
        </button>
      </div>
    </div>
  )
}

function Pricing() {
  const [plan, setPlan] = useState<'monthly' | 'yearly'>('monthly')
  return (
    <div className="laptop:mt-33.5 desktop:mt-37.5 safe-area mt-20">
      <div className="laptop:flex items-center justify-between">
        <div>
          <h2 className="title">Choose the plan that's right for you</h2>
          <p className="description desktop:mt-3.5 mt-2.5">
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!
          </p>
        </div>

        <div className="laptop:mt-0 desktop:p-2.5 desktop:rounded-[10px] bg-black-06 border-black-15 *:desktop:px-6 *:desktop:py-3.5 *:text-gray-60 mt-5 flex w-fit rounded-lg border p-2 *:relative *:rounded-md *:px-5 *:py-3">
          <button
            type="button"
            onClick={() => setPlan('monthly')}
            className={cn(plan === 'monthly' && 'text-white!')}
          >
            <p className="relative z-10">Monthly</p>
            {plan === 'monthly' && (
              <motion.div
                className="bg-black-12 desktop:rounded-[10px] absolute inset-0 rounded-lg"
                layoutId="activePlanItem"
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
          </button>
          <button
            type="button"
            onClick={() => setPlan('yearly')}
            className={cn(plan === 'yearly' && 'text-white!')}
          >
            <p className="relative z-10">Yearly</p>
            {plan === 'yearly' && (
              <motion.div
                className="bg-black-12 desktop:rounded-[10px] absolute inset-0 rounded-lg"
                layoutId="activePlanItem"
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
          </button>
        </div>
      </div>

      <div className="laptop:mt-15 desktop:mt-20 desktop:gap-7.5 laptop:flex-row mt-10 flex w-full flex-col gap-5">
        {pricing[`${plan}`].map(item => (
          <PricingCard
            key={item.name}
            plan={plan === 'monthly' ? 'month' : 'year'}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Pricing
