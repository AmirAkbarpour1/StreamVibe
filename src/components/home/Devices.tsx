import { devices } from '@/constants/devices'
import type { Device } from '@/constants/devices'
import Image from 'next/image'

function DeviceCard({ device }: { device: Device }) {
  return (
    <div className="laptop:p-10 desktop:p-12.5 from-red-45/10 to-black-06 bg-black-06 border-black-15 rounded-[10px] border bg-linear-[225deg] p-6">
      <div className="flex items-center gap-2.5">
        <div className="bg-black-08 border-black-12 laptop:p-3 laptop:rounded-[10px] desktop:p-4 desktop:rounded-xl rounded-lg border p-2.5">
          <Image
            src={device.icon}
            alt={device.name}
            width={24}
            height={24}
            className="laptop:w-7.5 desktop:w-10"
          />
        </div>
        <h3 className="laptop:text-xl desktop:text-2xl text-lg font-semibold">
          {device.name}
        </h3>
      </div>
      <p className="description laptop:t-6 desktop:mt-7.5 mt-5">
        {device.description}
      </p>
    </div>
  )
}

function Devices() {
  return (
    <div className="laptop:mt-30 desktop:mt-37.5 container mt-12.5">
      <h2 className="title">
        We Provide you streaming experience across various devices.
      </h2>
      <p className="description">
        With StreamVibe, you can enjoy your favorite movies and TV shows
        anytime, anywhere. Our platform is designed to be compatible with a wide
        range of devices, ensuring that you never miss a moment of
        entertainment.
      </p>
      <div className="desktop:gap-7.5 laptop:mt-15 desktop:mt-20 laptop:grid-cols-3 tablet:grid-cols-2 mt-10 grid grid-cols-1 gap-5">
        {devices.map(device => (
          <DeviceCard key={device.name} device={device} />
        ))}
      </div>
    </div>
  )
}

export default Devices
