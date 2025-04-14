import logoMobile from '@/assets/svgs/logo-mobile.svg'
import logoLaptop from '@/assets/svgs/logo-laptop.svg'
import logoDesktop from '@/assets/svgs/Logo-desktop.svg'

const logoSizes = {
  mobile: { width: 116.08, height: 35, media: 0 },
  laptop: { width: 165.83, height: 50, media: 1440 },
  desktop: { width: 199, height: 60, media: 1920 },
}

function Logo() {
  return (
    <picture>
      <source
        media={`(min-width: ${logoSizes.desktop.media}px)`}
        srcSet={logoDesktop}
        width={logoSizes.desktop.width}
        height={logoSizes.desktop.height}
      />
      <source
        media={`(min-width: ${logoSizes.laptop.media}px)`}
        srcSet={logoLaptop}
        width={logoSizes.laptop.width}
        height={logoSizes.laptop.height}
      />
      <img
        src={logoMobile}
        alt="Company Logo"
        width={logoSizes.mobile.width}
        height={logoSizes.mobile.height}
        className="object-contain"
      />
    </picture>
  )
}

export default Logo
