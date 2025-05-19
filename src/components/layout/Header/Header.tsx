import Logo from '@/components/layout/Header/Logo'
import Navbar from '@/components/layout/Header/Navbar'
import Buttons from '@/components/layout/Header/Buttons'

function Header() {
  return (
    <header
      id="header"
      className="laptop:px-20 laptop:py-6 desktop:px-40.5 desktop:py-7.5 absolute top-0 right-0 left-0 z-5 flex w-full items-center justify-between px-4 pt-10 pb-2.5"
    >
      <Logo />
      <Navbar />
      <Buttons />
    </header>
  )
}

export default Header
