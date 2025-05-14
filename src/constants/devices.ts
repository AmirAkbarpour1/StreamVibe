import Phone from '@/assets/svgs/phone.svg'
import Tablet from '@/assets/svgs/tablet.svg'
import Tv from '@/assets/svgs/tv.svg'
import Laptop from '@/assets/svgs/laptop.svg'
import Console from '@/assets/svgs/console.svg'
import Vr from '@/assets/svgs/vr.svg'

export const devices = [
  {
    name: 'Smartphones',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    icon: Phone,
  },
  {
    name: 'Tablet',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    icon: Tablet,
  },
  {
    name: 'Smart TV',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    icon: Tv,
  },
  {
    name: 'Laptops',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    icon: Laptop,
  },
  {
    name: 'Gaming Consoles',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    icon: Console,
  },
  {
    name: 'VR Headsets',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    icon: Vr,
  },
]

export type Device = (typeof devices)[number]
