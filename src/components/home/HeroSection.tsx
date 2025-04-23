import { motion } from 'motion/react'
import { PlayIcon } from '@heroicons/react/24/solid'
import logoHero from '@/assets/images/logo-hero.webp'
import heroBackground from '@/assets/images/hero-background.webp'

function HeroSection() {
  return (
    <div className="relative">
      <div
        className="w-full overflow-x-hidden"
      >
        <motion.div
          className="flex gap-5 w-[3840px]"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          <img
            src={heroBackground}
            alt="Background Sliders"
            className="w-auto object-cover h-[500px] laptop:h-[700px] desktop:h-[860px]"
            width={1920}
            height={860}
          />
          <img
            src={heroBackground}
            alt="Background Sliders"
            className="w-auto object-cover h-[500px] laptop:h-[700px] desktop:h-[860px]"
            width={1920}
            height={860}
          />
          <img
            src={heroBackground}
            alt="Background Sliders"
            className="w-auto object-cover h-[500px] laptop:h-[700px] desktop:h-[860px]"
            width={1920}
            height={860}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-2.5 desktop:gap-5 w-full"
      >
        <img
          src={logoHero}
          alt="StreamVibe"
          className="w-[200px] aspect-square laptop:w-[300px] desktop:w-[470px]"
        />
        <h1 className="font-bold text-[28px] laptop:text-[48px] desktop:text-[58px] text-center text-white drop-shadow">
          The Best Streaming Experience
        </h1>
      </motion.div>

      <p className="text-sm desktop:text-lg text-gray-100 text-center mt-[10px] desktop:mt-[14px]">
        StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere.
      </p>

      <button
        type="button"
        className="mt-[30px] px-6 py-[14px] bg-red-45 flex gap-1 rounded-lg items-center justify-center mx-auto text-white"
      >
        <PlayIcon className="w-6 aspect-square desktop:w-7" />
        <p className="font-semibold text-sm desktop:text-[18px]">Start Watching Now</p>
      </button>
    </div>
  )
}

export default HeroSection
