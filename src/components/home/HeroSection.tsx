import * as motion from 'motion/react-client'
import { PlayIcon } from '@heroicons/react/24/solid'
import logoHero from '@/assets/images/logo-hero.webp'
import heroBackground from '@/assets/images/hero-background.webp'
import Image from 'next/image'

function HeroSection() {
  return (
    <div className="relative">
      <div className="w-full overflow-x-hidden">
        <motion.div
          className="flex w-[3840px] gap-5"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          <Image
            src={heroBackground}
            alt="Background Sliders"
            className="laptop:h-[700px] desktop:h-[860px] h-[500px] w-auto object-cover"
            width={1920}
            height={860}
            priority
          />
          <Image
            src={heroBackground}
            alt="Background Sliders"
            className="laptop:h-[700px] desktop:h-[860px] h-[500px] w-auto object-cover"
            width={1920}
            height={860}
          />
          <Image
            src={heroBackground}
            alt="Background Sliders"
            className="laptop:h-[700px] desktop:h-[860px] h-[500px] w-auto object-cover"
            width={1920}
            height={860}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="desktop:gap-5 absolute top-1/2 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2.5"
      >
        <Image
          src={logoHero}
          alt="StreamVibe"
          width={200}
          height={200}
          className="laptop:w-[300px] desktop:w-[470px]"
          priority
        />
        <h1 className="laptop:text-5xl desktop:text-6xl text-center text-[28px] font-bold text-white drop-shadow">
          The Best Streaming Experience
        </h1>
      </motion.div>

      <div className="laptop:max-w-1/2 tablet:max-w-3/4 mx-auto flex items-center justify-center">
        <p className="description laptop:hidden mt-4 text-center">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere.
        </p>

        <p className="desktop:mt-6 description laptop:block mt-4 hidden text-center">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. You can also
          create your own watchlists, so you can easily find the content you
          want to watch.
        </p>
      </div>

      <button type="button" className="button mx-auto mt-8">
        <PlayIcon className="desktop:w-7 w-6" />
        <p>Start Watching Now</p>
      </button>
    </div>
  )
}

export default HeroSection
