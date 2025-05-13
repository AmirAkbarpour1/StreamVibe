import Logo from '@/components/layout/Header/Logo'
import Navbar from '@/components/layout/Header/Navbar'
import Buttons from '@/components/layout/Header/Buttons'

function Header() {
  return (
    <header className="laptop:px-20 laptop:py-6 desktop:px-[162px] desktop:py-[30px] absolute top-0 right-0 left-0 z-50 flex w-full items-center justify-between px-4 pt-10 pb-[14px]">
      <Logo />
      <Navbar />
      <Buttons />
    </header>
  )
}

export default Header
