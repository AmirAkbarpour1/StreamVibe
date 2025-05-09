import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function Buttons({ isMobile = false }) {
  if (!isMobile) {
    return (
      <div className="laptop:flex hidden cursor-pointer gap-4">
        <MagnifyingGlassIcon className="hover:stroke-red-55 aspect-square w-6 transition-all duration-300 hover:scale-105" />
        <BellIcon className="hover:stroke-red-55 aspect-square w-6 transition-all duration-300 hover:scale-105" />
      </div>
    )
  }

  return (
    <>
      <div className="mb-4 flex items-center gap-4">
        <MagnifyingGlassIcon className="aspect-square w-6" />
        <p className="text-gray-75">Search</p>
      </div>
      <div className="flex items-center gap-4">
        <BellIcon className="aspect-square w-6" />
        <p className="text-gray-75">Notifications</p>
      </div>
    </>
  )
}

export default Buttons
