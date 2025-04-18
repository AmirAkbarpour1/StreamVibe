import {
  Outlet,
  HeadContent,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'

import mainCss from '@/styles/main.css?url'
import Header from '@/components/layout/Header/Header'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Stream Vibe',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: mainCss,
      },
    ],
  }),

  component: () => (
    <RootDocument>

      <Outlet />

    </RootDocument>
  ),
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Header />
        {children}
        <Scripts />
      </body>
    </html>
  )
}
