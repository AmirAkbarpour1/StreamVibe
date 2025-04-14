import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function Buttons({ isMobile = false }) {
  if (!isMobile) {
    return (
      <div className="hidden tablet:flex gap-4 cursor-pointer">
        <MagnifyingGlassIcon className="w-6 h-6 hover:stroke-red-55 hover:scale-105 transition-all duration-300" />
        <BellIcon className="w-6 h-6 hover:stroke-red-55 hover:scale-105 transition-all duration-300" />
      </div>
    )
  }

  return (
    <>
      <div className="flex items-center gap-4 mb-4">
        <MagnifyingGlassIcon className="w-6 h-6" />
        <p className="text-gray-75">Search</p>
      </div>
      <div className="flex items-center gap-4">
        <BellIcon className="w-6 h-6" />
        <p className="text-gray-75">Notifications</p>
      </div>
    </>
  )
}

export default Buttons
