import Image from 'next/image'
import logo from '@/assets/svgs/logo-mobile.svg'

function Logo() {
  return (
    <Image
      src={logo}
      alt="StreamSVibe"
      width={116.08}
      height={35}
      className="laptop:w-[165.83px] laptop:h-[50px] desktop:w-[199px] desktop:h-[60px]"
      priority
    />
  )
}

export default Logo
