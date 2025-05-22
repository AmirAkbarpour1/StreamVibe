import facebook from '@/assets/svgs/facebook.svg'
import twitter from '@/assets/svgs/twitter.svg'
import linkedin from '@/assets/svgs/linkedin.svg'

export const footerLinks = [
  {
    title: 'Home',
    href: '/',
    sections: [
      {
        name: 'Categories',
        id: 'categories',
      },
      {
        name: 'Devices',
        id: 'devices',
      },
      {
        name: 'FAQ',
        id: 'FAQ',
      },
      {
        name: 'Pricing',
        id: 'pricing',
      },
    ],
  },
  {
    title: 'Movies',
    href: '/movies-shows?type=movie',
    sections: [
      {
        name: 'Gernes',
        id: 'gernes',
      },
      {
        name: 'Trending',
        id: 'trending',
      },
      {
        name: 'New Release',
        id: 'new-release',
      },
      {
        name: 'Popular',
        id: 'popular',
      },
    ],
  },
  {
    title: 'Shows',
    href: '/movies-shows?type=show',
    sections: [
      {
        name: 'Gernes',
        id: 'gernes',
      },
      {
        name: 'Trending',
        id: 'trending',
      },
      {
        name: 'New Release',
        id: 'new-release',
      },
      {
        name: 'Popular',
        id: 'popular',
      },
    ],
  },
  {
    title: 'Support',
    href: '/support',
    sections: [
      {
        name: 'Contact Us',
        id: 'contact-us',
      },
    ],
  },
  {
    title: 'Subscription',
    href: '/subscription',
    sections: [
      {
        name: 'Plans',
        id: 'plans',
      },
      {
        name: 'Features',
        id: 'features',
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
