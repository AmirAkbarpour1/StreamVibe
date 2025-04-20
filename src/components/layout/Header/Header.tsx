import Logo from '@/components/layout/Header/Logo'
import Navbar from '@/components/layout/Header/Navbar'
import Buttons from '@/components/layout/Header/Buttons'

function Header() {
  return (
    <header className="flex justify-between items-center px-4 pb-[14px] pt-10 laptop:px-20 laptop:py-6 desktop:px-[162px] desktop:py-[30px] fixed top-0 right-0 left-0 w-full z-50">
      <Logo />
      <Navbar />
      <Buttons />
    </header>
  )
}

export default Header
