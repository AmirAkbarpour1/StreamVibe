import { devices } from '@/constants/devices'
import type { Device } from '@/constants/devices'
import * as motion from 'motion/react-client'

function DeviceCard({ device }: { device: Device }) {
  return (
    <div className="laptop:p-10 desktop:p-12.5 from-red-45/10 to-black-06 bg-black-06 border-black-15 rounded-[10px] border bg-linear-[225deg] p-6">
      <div className="flex items-center gap-2.5">
        <div className="bg-black-08 border-black-12 laptop:p-3 laptop:rounded-[10px] desktop:p-4 desktop:rounded-xl rounded-lg border p-2.5">
          <device.icon
            width={24}
            height={24}
            className="laptop:w-7.5 desktop:w-10"
          />
        </div>
        <h3 className="laptop:text-xl desktop:text-2xl text-lg font-semibold">
          {device.name}
        </h3>
      </div>
      <p className="description desktop:mt-7.5 laptop:mt-6 mt-5">
        {device.description}
      </p>
    </div>
  )
}

function Devices() {
  return (
    <div
      className="laptop:mt-30 desktop:mt-37.5 safe-area mt-12.5"
      id="devices"
    >
      <h2 className="title">
        We Provide you streaming experience across various devices.
      </h2>
      <p className="description desktop:mt-3.5 mt-2.5">
        With StreamVibe, you can enjoy your favorite movies and TV shows
        anytime, anywhere. Our platform is designed to be compatible with a wide
        range of devices, ensuring that you never miss a moment of
        entertainment.
      </p>
      <div className="desktop:gap-7.5 laptop:mt-15 desktop:mt-20 laptop:grid-cols-3 tablet:grid-cols-2 mt-10 grid grid-cols-1 gap-5">
        {devices.map((device, index) => (
          <motion.div
            key={device.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: 'easeInOut',
            }}
          >
            <DeviceCard device={device} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Devices
