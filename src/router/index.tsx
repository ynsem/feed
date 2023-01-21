import * as React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RouterPath from '@/router/RouterPath'

const MainLayout = React.lazy(() => import('@/layouts/main'))
const Article = React.lazy(() => import('@/views/article'))
const Feed = React.lazy(() => import('@/views/feed'))
const NotFound = React.lazy(() => import('@/views/not-found'))

export const routes = () => {
  return createBrowserRouter([
    {
      element: <MainLayout />,
      path: RouterPath.Home,
      children: [
        {
          element: <Article />,
          path: `${RouterPath.Feed}/:id`,
        },
        {
          element: <Feed />,
          path: RouterPath.Feed,
        },
      ],
    },
    {
      element: <NotFound />,
      path: '*',
    },
  ])
}
