import phone from '@/assets/svgs/phone.svg'
import tablet from '@/assets/svgs/tablet.svg'
import tv from '@/assets/svgs/tv.svg'
import laptop from '@/assets/svgs/laptop.svg'
import console from '@/assets/svgs/console.svg'
import vr from '@/assets/svgs/vr.svg'

export const devices = [
  {
    name: 'Smartphones',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    icon: phone,
  },
  {
    name: 'Tablet',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    icon: tablet,
  },
  {
    name: 'Smart TV',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    icon: tv,
  },
  {
    name: 'Laptops',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    icon: laptop,
  },
  {
    name: 'Gaming Consoles',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    icon: console,
  },
  {
    name: 'VR Headsets',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    icon: vr,
  },
]

export type Device = (typeof devices)[number]
