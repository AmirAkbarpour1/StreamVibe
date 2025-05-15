import facebook from '@/assets/svgs/facebook.svg'
import twitter from '@/assets/svgs/twitter.svg'
import linkedin from '@/assets/svgs/linkedin.svg'

export const footerLinks = [
  {
    title: 'Home',
    href: '/',
    pathes: [
      {
        name: 'Categories',
        path: '#categories',
      },
      {
        name: 'Devices',
        path: '#devices',
      },
      {
        name: 'FAQ',
        path: '#FAQ',
      },
      {
        name: 'Pricing',
        path: '#pricing',
      },
    ],
  },
  {
    title: 'Movies',
    href: '/movies-shows?type=movie',
    pathes: [
      {
        name: 'Gernes',
        path: '#gernes',
      },
      {
        name: 'Trending',
        path: '#trending',
      },
      {
        name: 'New Release',
        path: '#new-release',
      },
      {
        name: 'Popular',
        path: '#popular',
      },
    ],
  },
  {
    title: 'Shows',
    href: '/movies-shows?type=show',
    pathes: [
      {
        name: 'Gernes',
        path: '#gernes',
      },
      {
        name: 'Trending',
        path: '#trending',
      },
      {
        name: 'New Release',
        path: '#new-release',
      },
      {
        name: 'Popular',
        path: '#popular',
      },
    ],
  },
  {
    title: 'Subscription',
    href: '/subscription',
    pathes: [
      {
        name: 'Plans',
        path: '#plans',
      },
      {
        name: 'Features',
        path: '#features',
      },
    ],
  },
  {
    title: 'Support',
    href: '/support',
    pathes: [
      {
        name: 'Contact Us',
        path: '#contact-us',
      },
    ],
  },
]

export const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: facebook,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/',
    icon: twitter,
  },
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/',
    icon: linkedin,
  },
]
